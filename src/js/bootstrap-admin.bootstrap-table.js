//bootstrap-admin对bootstrap-table插件的一些参数的预设和一些辅助函数的封装等,目的是减少代码冗余
$.extend({
  bootstrapTable: {
    //对bootstrap-table插件一些参数的分类和预设
    Default: {
      //图标相关配置
      icon: {
        // 图标前缀
        iconsPrefix: 'bi',
        // 图标大小 undefined sm lg
        iconSize: undefined,
        // 图标的设置 详细参考:https://examples.bootstrap-table.com/#options/table-icons.html
        icons: {
          paginationSwitchDown: 'bi bi-sort-down',
          paginationSwitchUp: 'bi bi-sort-up',
          refresh: 'bi-arrow-repeat',
          toggleOff: 'bi-toggle2-off',
          toggleOn: 'bi-toggle2-on',
          fullscreen: 'bi-fullscreen',
          columns: 'bi-card-checklist',
          detailOpen: 'bi-plus',
          detailClose: 'bi-dash',
        }
      },
      //右边工具栏相关设置
      toolbar: {
        // 工具按钮容器
        toolbar: '#toolbar',
        // true:显示详细视图和列表视图的切换按钮
        showToggle: true,
        // true:显示可以弹出所有列名称的列表的下拉菜单的按钮
        showColumns: true,
        // true:显示刷新按钮
        showRefresh: true,
        // true:显示全屏按钮
        showFullscreen: true,
        // true:显示控制分页的开关的按钮
        showPaginationSwitch: true,
        // true:toolbar的按钮组则会显示图标
        showButtonIcons: true,
        // true:toolbar的按钮组则会显示文本,false:不显示按钮的文本信息，为了美观多半会把该选项设置为false
        showButtonText: false,
        // 按钮的类名前缀
        buttonsPrefix: 'btn',
        // 按钮的类,和buttonsPrefix组合使用实际上就是设置按钮的class类名 <button class="btn btn-light" type="button"></button>
        buttonsClass: 'light',
        // 给右上角的按钮区域增加一个自定义按钮
        buttons: function () {
          return {
            //这里只做一个示例
            collapseSearch: {
              text: '搜索区域折叠/显示',
              icon: 'bi bi-search',
              event: function () {
                $(".bsa-search-area").slideToggle();
              },
              attributes: {
                title: '折叠搜索区域'
              }
            }
          }
        },
      },
      // 表格插件配置
      table: {
        //配置语言
        locale: 'zh-CN',
        //设置高度就可以固定表头
        // height: 320,
        //固定列功能开启
        fixedColumns: true,
        //左侧固定列数
        fixedNumber: 1,
        //右侧固定列数
        fixedRightNumber: 1,
        // 是否启用点击选中行
        clickToSelect: true,
        //点击那些元素可以忽略勾选
        ignoreClickToSelectOn: function (element) {
          //意思就是遇到.more-btn和.form-check-input或者button、a标签的时候被点击的时候行不会被选中
          return !!($(element).closest('.more-btn, .form-check-input,button,a,.treegrid-expander').length);
        },
        // 总数字段
        totalField: 'total',
        // 当字段为 undefined 显示
        undefinedText: '-',
        // 定义全局排序方式 只能是undefined, 'asc' or 'desc'
        sortOrder: "asc",
        //加载模板,不改的话，默认的会超出不好看
        loadingTemplate: function () {
          return '<div class="spinner-grow" role="status"><span class="visually-hidden">Loading...</span></div>';
        },
        //所有的事件都会触发的事件,用于初始化bootstrap的提示和气泡插件
        onAll: function (name, args) {

          $('[data-bs-toggle="popover"]').each(function () {
            bootstrap.Popover.getOrCreateInstance(this, {
              container: '.bootstrap-table'
            }).hide()
          })
          $('[data-bs-toggle="tooltip"]').each(function () {
            bootstrap.Tooltip.getOrCreateInstance(this, {
              container: '.bootstrap-table'
            }).hide()
          })
        }
      },
      //分页配置
      pagination: {
        //是否开启分页
        pagination: true,
        //是客户端分页还是服务端分页  'client','server',由于演示没有后端提供服务，所以采用前端分页演示
        sidePagination: 'client',
        // 初始化加载第一页，默认第一页
        pageNumber: 1,
        //默认显示几条
        pageSize: 5,
        //可供选择的每页的行数
        pageList: [5, 10, 25, 50, 100],
        //true:当在最后一页时,点击下一页跳转到第一页
        paginationLoop: true,
        // 展示首尾页的最小页数
        paginationPagesBySide: 2,
      }
    },
    /**
     * 刷新操作,该函数的使用频率较高,单独封装减少代码冗余
     * @param $table
     * @param page
     */
    refresh($table, page = 1) {
      $table.bootstrapTable('refresh');
      $table.bootstrapTable('selectPage', page)
    },
    /**
     * 用于处理bootstrap-table插件的批量选中按钮的便利封装助手函数
     * @param {Object} $table table的jq对象
     * @param {String} btnSelector 需要设置disabled状态的按钮的选择器
     * @param {Function} callback 按钮点击时的回调函数，形参：ids数组，rowSelected
     * 作用是不需要自己单独绑定事件,并已经把最可能需要的id数组拼接返回,如果不满足第二个参数是所有的选中行数据
     * @param {Function} [conditionFn] 形参：rowSelected -> bootstrap-table插件getSelections方法的返回结果
     */
    updateButtonStateOnSelection($table, btnSelector, callback, conditionFn) {
      const $btn = $(btnSelector);
      $table.on('all.bs.table', function (name, args) {
        const selectedRows = $table.bootstrapTable('getSelections');
        let conditionResult;
        // 如果传递了条件函数，则使用传递的条件函数进行判断
        if (conditionFn) {
          conditionResult = conditionFn(selectedRows);
        } else {
          // 默认条件：选中行数量大于 0
          conditionResult = selectedRows.length > 0;
        }
        // 根据条件结果设置按钮状态
        $btn.attr('disabled', !conditionResult);
      })
      $(document).on('click', btnSelector, function () {
        //获取所有选中行的id
        const ids = [];
        const rowSelected = $table.bootstrapTable('getSelections');
        $.each(rowSelected, function (index, row) {
          ids.push(row.id);
        })
        callback.call(this, ids, rowSelected)
      })
    },
    /**
     * 初始化bootstrap-table的treegrid拓展
     * @param {Object} $table
     * @param {String} treeShowField https://bootstrap-table.com/docs/extensions/treegrid/#treeshowfield
     */
    treegridExtInit($table, treeShowField) {
      $.bootstrapTable.Default.table.treeShowField = treeShowField
      $table.on('post-body.bs.table', function (event, data) {
        const columns = $table.bootstrapTable('getOptions').columns;
        const columnsFirst = columns[0];
        if (columns && columnsFirst) {
          const treeColumn = columnsFirst.findIndex(obj => obj.field === treeShowField);
          if (columnsFirst[treeColumn].visible) {
            $table.treegrid({
              treeColumn: treeColumn,
              onChange: function () {
                $table.bootstrapTable('resetView')
              },
              saveState: true
            })
          }
        }

      })
    },
    /**
     * 让按钮具备bootstrap-table的treegrid拓展的全部展开和折叠能力
     * @param {Object} $table
     * @param {String} btnSelector
     */
    treegridExtSlideToggleByButton($table, btnSelector) {
      $(document).on('click', btnSelector, function (event) {
        event.preventDefault()
        if ($table.find('tr').hasClass('treegrid-expanded')) {//只要有一个tr是被展开的就折叠
          $table.treegrid('collapseAll');
        } else {
          $table.treegrid('expandAll');
        }
      })
    },
    /**
     * 使bootstrap-table的treegrid拓展被启用时点击行也可以折叠/展开当前行
     * @param {Object} $table
     * @param {String} idField https://bootstrap-table.com/docs/extensions/treegrid/#idfield
     */
    treegridExtSlideToggleClickRow($table, idField = 'id') {
      $table.on('click-row.bs.table', function (event, row, $element, field) {
        const $target = $(event.target);
        if (!$target.closest('button,.treegrid-expander').length) {
          if (!$element.hasClass('treegrid-expander')) {
            const $tr = $('.treegrid-' + row[idField]);
            if ($tr.treegrid('isExpanded')) {
              $tr.treegrid('collapse');
            } else {
              $tr.treegrid('expand');
            }
          }
        }
      })
    },
    getParents(data, row, result = [], rowsIndex = [], idField = 'id', pidField = 'pid') {
      data.forEach((item, index) => {
        if (item[idField] === row[pidField]) {
          result.push(item)
          rowsIndex.push(index)
          this.getParents(data, item, result, rowsIndex, idField, pidField)
        }
      });
    },
    getChildren(data, row, result = [], rowsIndex = [], idField = 'id', pidField = 'pid') {
      data.forEach((item, index) => {
        if (item[pidField] === row[idField]) {
          result.push(item)
          rowsIndex.push(index)
          this.getChildren(data, item, result, rowsIndex, idField, pidField)
        }
      })
    },

    toggleParentOnLastChildUncheck($table, data, row, idField = 'id', pidField = 'pid') {

      //找到父级的数据
      const parentIndex = data.findIndex(obj => obj.id === row.pid)
      const parentRow = data[parentIndex];
      if (parentIndex !== -1) {

        //找到所有子集
        const sonData = [];
        this.getChildren(data, parentRow, sonData, [], idField, pidField);

        //获取所有的被勾选的row
        const sonCheckedData = sonData.filter(item => item[0] === true)
        if (sonCheckedData.length === 0) {
          $table.bootstrapTable('uncheck', parentIndex)

          //递归调用
          this.toggleParentOnLastChildUncheck($table, data, parentRow, idField, pidField)
        }
      }
    },
    toggleCheckRelation($table,idField = 'id', pidField = 'pid'){
      const that = this;
      $table.on('change', '.bs-checkbox input', function () {

        const $input = $(this);
        const rowIndex = $input.attr('data-index');

        if (rowIndex !== undefined) {
          const data = $table.bootstrapTable('getData');
          const row = data[rowIndex];

          if ($input.is(':checked')) {
            const parentsIndex = [];
            const childrenIndex = [];
            that.getParents(data, row, [], parentsIndex,idField,pidField)
            that.getChildren(data, row, [], childrenIndex,idField,pidField)
            //所有的行索引
            const rowsIndex = [...parentsIndex, ...childrenIndex];
            rowsIndex.forEach((index) => {
              $table.bootstrapTable('check', index);
            })
          } else {

            //1.把所有的子节点都取消掉
            const childrenIndex = [];
            that.getChildren(data, row, [], childrenIndex,idField,pidField)
            childrenIndex.forEach((index) => {
              $table.bootstrapTable('uncheck', index);
            })

            //2.取消选中最后一个子元素时查找对应父元素取消
            that.toggleParentOnLastChildUncheck($table, data, row,idField,pidField);
          }
        }

      });
    }
  }
})

//bootstrap-table插件的搜索区域的表单重置处理统一提取到这里
$(document).on('click', '.bsa-reset-btn', function (event) {
  event.preventDefault()
  $('.bsa-search-area form').each(function () {
    this.reset()
  })
  //找到bootstrap-table的插件实例(注意，这里范围太广了,如果你页面上有很多个实例也会同时刷新,不过一般情况下一个页面只有一个列表,就算刷新了也没事)
  $('table').each(function () {
    $.bootstrapTable.refresh($(this))
  })
})

//bootstrap-table插件的搜索区域的表单搜索处理
$(document).on('click', '.bsa-search-btn', function (event) {
  event.preventDefault()
  $('table').each(function () {
    $.bootstrapTable.refresh($(this))
  })
})
