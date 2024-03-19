$(document).ready(function (e) {


  //提示工具允许的属性和标签设置，如果不设置提示工具可能无法正确显示内容，参考:https://getbootstrap.com/docs/5.3/getting-started/javascript/#sanitizer
  bootstrap.Tooltip.Default.allowList['*'].push(/^data-bsa-[\w-]+/)
  bootstrap.Tooltip.Default.allowList.button = [];


  //bootstrap提示组件初始化
  $('[data-bs-toggle="tooltip"]').each(function () {
    bootstrap.Tooltip.getOrCreateInstance(this)
  })

  //bootstrap气泡组件初始化
  $('[data-bs-toggle="popover"]').each(function () {
    bootstrap.Popover.getOrCreateInstance(this)
  })


  //优化:禁止所有的input记忆输入内容
  $('input').attr('AutoComplete', 'off')

  //滚动条美化
  OverlayScrollbarsGlobal.OverlayScrollbars(document.querySelector('body'), {
    overflow: {
      x: 'hidden',
    },
  });


  //js跳转辅助,针对一些不是a链接的元素跳转时很有用 只需要给元素上绑定 data-href 和 data-target属性即可 作用同a链接的href和target相同
  $(document).on('click', '[data-bsa-href]', function (event) {
    event.preventDefault();
    const href = $(this).attr('data-bsa-href')
    let target = $(this).attr('data-bsa-target')
    const targetRange = ['_self', '_blank', '_parent', '_top'];
    target = targetRange.includes(target) ? target : '_self';
    window.open(href, target);
  })


  // 优化:在提示框和气泡框显示出来之前先把别的已经存在的都隐藏掉
  $(document).on('show.bs.popover', '[data-bs-toggle="popover"]', function (event) {
    $('[data-bs-toggle="popover"]').each(function () {
      bootstrap.Popover.getOrCreateInstance(this).hide()
    })
  })
  $(document).on('show.bs.tooltip', '[data-bs-toggle="tooltip"]', function (event) {
    $('[data-bs-toggle="tooltip"]').each(function () {
      bootstrap.Tooltip.getOrCreateInstance(this).hide()
    })
  })


  //优化:无效表单禁止提交(如果form没有action属性或者action属性值等于#,不让提交)
  $(document).on('submit', 'form', function (event) {
    const action = $(this).attr('action')
    if (action === undefined || action === '#') {
      event.preventDefault()
    }
  })

  //优化:对于含有#的a链接阻止默认事件
  $(document).on('click', 'a[href="#"]', function (event) {
    event.preventDefault();
  })


  //优化:处理提示工具和气泡工具的下一次关闭，弥补官方的不足，官方的下一次关闭只能是a元素，参阅:https://getbootstrap.com/docs/5.3/components/popovers/#dismiss-on-next-click
  $(document).on('click', function (event) {
    if (!$(event.target).closest('[data-bs-toggle="popover"],[data-bs-toggle="tooltip"]').length) {
      $('[data-bs-toggle="popover"]').each(function () {
        bootstrap.Popover.getInstance(this).hide()
      })
      $('[data-bs-toggle="tooltip"]').each(function () {
        bootstrap.Tooltip.getInstance(this).hide()
      })
    }
  })

});


