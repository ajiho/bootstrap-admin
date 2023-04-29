/*!
 * bootstrap-admin v1.1.0 (https://gitee.com/ajiho/bootstrap-admin)
 * Copyright 2021-2023 ajiho
 * license MIT (https://gitee.com/ajiho/bootstrap-admin/blob/2.x/LICENSE)
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('bootstrap-quicktab')) :
    typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'bootstrap-quicktab'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BootstrapAdmin = {}, global.jQuery, global.Quicktab));
})(this, (function (exports, $, Quicktab) { 'use strict';

    var Helper = {
      //判断是否为主页面
      isIndex() {
        return $('.bsa-header').length !== 0 && $('.bsa-sidebar').length !== 0;
      }
    };

    class Storage {
      /**
       * @param type 1:sessionStorage 2:localStorage
       */
      constructor(type = 1) {
        this.type = type;
      }

      /**
       * 设置缓存
       * @param name 缓存的key
       * @param data 缓存数据
       */
      set(name, data) {
        this.remove(name);
        if (this.type === 1) {
          sessionStorage.setItem(name, JSON.stringify(data));
        } else if (this.type === 2) {
          localStorage.setItem(name, JSON.stringify(data));
        }
      }

      /**
       * 获取缓存
       * @param name 缓存的key
       * @returns {any}
       */
      get(name) {
        if (this.type === 1) {
          let value = sessionStorage.getItem(name);
          try {
            return JSON.parse(value);
          } catch (e) {
            return value;
          }
        } else if (this.type === 2) {
          let value = localStorage.getItem(name);
          try {
            return JSON.parse(value);
          } catch (e) {
            return value;
          }
        }
      }

      /**
       * 删除缓存
       * @param name
       */
      remove(name) {
        if (this.type === 1) {
          sessionStorage.removeItem(name);
        } else if (this.type === 2) {
          localStorage.removeItem(name);
        }
      }

      /**
       * 同时删除 sessionStorage和localStorage缓存
       * @param name
       */
      static removeBoth(name) {
        sessionStorage.removeItem(name);
        localStorage.removeItem(name);
      }
    }

    /* global bootstrap OverlayScrollbarsGlobal  */
    const NAME$4 = 'Layout';
    const DATA_KEY$4 = 'bsa.layout';
    const THEME_CACHE_KEY = 'theme';
    const SELECTOR_QUICKTAB = '.qtab';
    const JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];

    //用于实现密码点击显示/隐藏
    const SELECTOR_LOGIN_PASSWORD = '.bsa-show_hide_password span';
    const Default$4 = {
      //滚动条自动隐藏 never scroll leave move  #https://kingsora.github.io/OverlayScrollbars/
      scrollbarAutoHide: 'leave',
      //滚动条隐藏时间
      scrollbarAutoHideDelay: 1300,
      //加载器持续时间
      preloadDuration: 800,
      //tab页面是否适配主题
      tabPageEnableTheme: true,
      //主题的保存方式  sessionStorage,localStorage
      themeCacheType: 'localStorage'
    };

    //滚动条插件对象
    let OverlayScrollbars = null;

    //侧边栏滚动条插件的示例对象
    let sidebarOsInstance = null;
    class Layout {
      constructor(element, config) {
        this._config = config;
        this._element = element;
      }

      // Public
      fullscreen() {
        if ($('.bsa-header').length !== 0) {
          document.documentElement.requestFullscreen();
        }
      }
      exitFullscreen() {
        if ($('.bsa-header').length !== 0) {
          if (document.fullscreenElement !== null) {
            document.exitFullscreen();
          }
        }
      }
      getTheme() {
        return this.Storge.get(THEME_CACHE_KEY);
      }

      // Private
      _init() {
        this._common();
        if (Helper.isIndex()) {
          //如果是index.html页面
          this._index();
        }
      }

      // 所有页面都要执行的
      _common() {
        //启用提示
        $('[data-bs-toggle="tooltip"]').each(function (i, el) {
          new bootstrap.Tooltip(el);
        });

        //启用弹出层工具
        $('[data-bs-toggle="popover"]').each(function (i, el) {
          new bootstrap.Popover(el);
        });

        //禁止所有的input框记忆
        $('input').each(function (index, element) {
          $(element).attr('AutoComplete', 'off');
        });

        //禁止action为#的无效表单提交
        $(document).on('submit', 'form[action="#"]', function (e) {
          e.preventDefault();
        });

        //登录页面的密码切换
        if ($(SELECTOR_LOGIN_PASSWORD).length !== 0) {
          //登录页面密码框的显示和隐藏
          $(SELECTOR_LOGIN_PASSWORD).on('click', function (event) {
            event.preventDefault();
            let $input = $('.bsa-show_hide_password input');
            let $i = $('.bsa-show_hide_password i');
            if ($input.attr('type') === 'text') {
              $input.attr('type', 'password');
              $i.removeClass('bi-eye');
              $i.addClass('bi-eye-slash');
            } else if ($input.attr('type') === 'password') {
              $input.attr('type', 'text');
              $i.addClass('bi-eye');
              $i.removeClass('bi-eye-slash');
            }
          });
        }
      }

      // 首页需要执行的方法
      _index() {
        let _this = this;
        let cacheType = 1;
        //换成实例化
        if (_this._config.themeCacheType === 'localStorage') {
          cacheType = 2;
        } else if (_this._config.themeCacheType === 'sessionStorage') {
          cacheType = 1;
        }
        _this.Storge = new Storage(cacheType);

        //给滚动条注册插件
        if (typeof OverlayScrollbarsGlobal !== 'undefined') {
          OverlayScrollbars = OverlayScrollbarsGlobal.OverlayScrollbars;

          //给滚动条对象注册插件
          OverlayScrollbars.plugin([OverlayScrollbarsGlobal.ScrollbarsHidingPlugin, OverlayScrollbarsGlobal.SizeObserverPlugin, OverlayScrollbarsGlobal.ClickScrollPlugin]);
        }

        //导航菜单滚动条插件
        sidebarOsInstance = OverlayScrollbars(document.querySelector('.bsa-sidebar-body'), {
          overflow: {
            x: 'hidden',
            y: 'scroll'
          },
          scrollbars: {
            //never scroll leave move
            autoHide: _this._config.scrollbarAutoHide,
            //是否可以点击轨道滚动
            clickScroll: true,
            //隐藏滚动条的时间
            autoHideDelay: _this._config.scrollbarAutoHideDelay
          }
        });

        // console.log(sidebarOsInstance)

        //头部下拉菜单滚动条
        $('.bsa-header .card-body').each(function (index, element) {
          OverlayScrollbars(element, {
            overflow: {
              x: 'hidden',
              y: 'scroll'
            },
            scrollbars: {
              //never scroll leave move
              autoHide: 'leave',
              clickScroll: true,
              //隐藏滚动条的时间
              autoHideDelay: 1300
            }
          });
        });

        // 监听全屏事件
        $(document).on('fullscreenchange', function () {
          if (document.fullscreenElement == null) {
            //退出全屏
            $('.bsa-fullscreen-toggler').find('i.bi').removeClass('bi-fullscreen-exit').addClass('bi-arrows-fullscreen');
          } else {
            $('.bsa-fullscreen-toggler').find('i.bi').removeClass('bi-arrows-fullscreen').addClass('bi-fullscreen-exit');
          }
        });

        //全屏
        $('.bsa-fullscreen-toggler').on('click', function () {
          if ($(this).find('.bi-arrows-fullscreen').length > 0) {
            document.documentElement.requestFullscreen();
          } else {
            document.exitFullscreen();
          }
        });

        //主题切换
        $(document).on('click', 'div[class^=bsa-theme-color]', function (e) {
          e.preventDefault();
          let themeVal = Array.from(this.classList).at(-1);

          //存入缓存
          _this.Storge.set(THEME_CACHE_KEY, String(themeVal));

          //修改主题
          $('html').attr('data-bs-theme', themeVal);

          //tab内部也需要修改主题
          if ($(SELECTOR_QUICKTAB).length !== 0 && _this._config.tabPageEnableTheme === true) {
            Quicktab.get(SELECTOR_QUICKTAB).setTab(function (tabs) {
              for (let tab of tabs) {
                if (tab.tabIFrame.el !== null && tab.tabIFrame.canAccess === true) {
                  let $doc = $(tab.tabIFrame.el.contentDocument);
                  $doc.find('html').attr('data-bs-theme', themeVal);

                  //同时我们还得在iframe的子文档中再次查找iframe元素
                  let $iframes = $doc.find('iframe');
                  $iframes.each(function (index, item) {
                    if (Quicktab.canAccessIFrame(item)) {
                      let $doc = $(item.contentDocument);
                      $doc.find('html').attr('data-bs-theme', themeVal);
                    }
                  });
                }
              }
            });
          }
        });

        //tab插件初始化
        if ($(SELECTOR_QUICKTAB).length !== 0 && typeof Quicktab !== 'undefined') {
          new Quicktab({
            selector: SELECTOR_QUICKTAB,
            minHeight: '',
            //不设置默认自适应容器高度
            height: '100%',
            //不设置默认自适应容器宽度
            width: '',
            //"sessionStorage","localStorage",null:不缓存每次刷新都会只展示选项tabs里面的tab
            cache: 'sessionStorage',
            //初始化的tab
            tabs: [],
            toolbar: {
              refresh: {
                enable: true
              },
              //全屏功能
              fullscreen: {
                //true:开启全屏 false:关闭全屏
                enable: true,
                fullscreen: function () {
                  $('.bsa-content').addClass('fullscreen');
                },
                exitFullscreen: function () {
                  $('.bsa-content').removeClass('fullscreen');
                }
              }
            },
            tabConfig: {
              //拖动排序
              dragSort: true,
              //点击tab时自动居中
              clickRollback: true,
              //右键菜单功能启用
              contextmenu: {
                enable: true
              }
            },
            //实例初始化完毕回调，只会执行一次
            onInit: function (e) {
              $('.bsa-menu a').each(function (index, a) {
                if ($(a).attr('href') === Quicktab.getTabUrl(e.target.getActiveTab())) {
                  _this._scrollToA(a);
                  //结束循环，避免左侧菜单有重复的测试地址时会展开多个菜单
                  return false;
                }
              });
            },
            //tab被单击事件
            onTabClick: function (e) {
              let $allA = $('.bsa-menu a');
              $allA.each(function (index, a) {
                //如果找到这个tab的地址
                if ($(a).attr('href') === e.tabUrl) {
                  //移除所有的展开和激活状态
                  $allA.each(function (index, a) {
                    $(a).removeClass('open active');
                  });

                  //移除所有ul正在执行的动画,并且移除掉行内style样式
                  $('.bsa-menu ul').each(function (index, ul) {
                    $(ul).removeAttr('style');
                  });
                  _this._scrollToA(a);
                  //结束循环，避免左侧菜单有重复的测试地址时会展开多个菜单
                  return false;
                }
              });
            },
            //tab加载完毕事件
            onTabLoaded: function (tab) {
              //是否启用主题适配子页面
              if (_this._config.tabPageEnableTheme === true) {
                if (tab.tabIFrame.el !== null && tab.tabIFrame.canAccess === true) {
                  $(tab.tabIFrame.el.contentDocument).find('html').attr('data-bs-theme', _this.Storge.get(THEME_CACHE_KEY));
                }
              }
            }
          });
        }

        //遮罩层关闭
        setTimeout(() => {
          $('html').attr('data-bs-theme', _this.Storge.get(THEME_CACHE_KEY));
          $('.bsa-preloader').fadeOut(_this._config.preloadDuration);
        }, this._config.preloadDuration);
      }
      _openMenu(a) {
        let $ul = $(a).parent().parent();
        let $canOpen = $ul.siblings(a);
        if (!($canOpen.length > 0)) {
          return;
        }
        $canOpen.addClass('open');
        return this._openMenu($canOpen);
      }
      _scrollToA(a) {
        let $a = $(a);
        $a.addClass('active');
        this._openMenu(a);
        sidebarOsInstance.elements().viewport.scrollTo({
          top: $a.position().top
        });
      }

      // Static
      static _jQueryInterface(config) {
        for (const element of this) {
          let $element = $(element);
          let data = $element.data(DATA_KEY$4);
          const _config = $.extend({}, Default$4, typeof config === 'object' ? config : $element.data());
          if (!data) {
            //没有就new
            data = new Layout($element, _config);

            //赋值给data,供给下次调用
            $element.data(DATA_KEY$4, data);

            //调用内部的私有方法,初始化，执行必须执行的方法
            data._init();
          }
          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError(`方法 "${config}" 不存在`);
            }
            let execRt = data[config]();
            if (typeof execRt !== 'undefined') {
              return execRt;
            }
          }
        }
        return this;
      }
    }

    /**
     * Data API
     * ====================================================
     */

    $(window).on('load', () => {
      Layout._jQueryInterface.call($('body'));
    });

    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME$4] = Layout._jQueryInterface;
    $.fn[NAME$4].Constructor = Layout;
    $.fn[NAME$4].noConflict = function () {
      $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
      return Layout._jQueryInterface;
    };

    const NAME$3 = 'NavbarSearch';
    const DATA_KEY$3 = 'bsa.navbar-search';
    const JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];

    // 搜索事件触发
    const EVENT_SEARCH = 'search.bsa.navbar-search';
    const SELECTOR_DATA_TOGGLE$1 = '[data-bsa-toggle="navbar-search"]';
    const SELECTOR_SEARCH_TRIGGER = '.bsa-search-form-toggler';

    // 展开时的类名
    const CLASS_NAME_OPEN = 'open';
    const Default$3 = {
      //关闭时重置
      closeReset: false,
      //触发器
      trigger: SELECTOR_SEARCH_TRIGGER,
      //请求地址
      action: '',
      //额外参数
      params: ''
    };
    class NavbarSearch {
      constructor(_element, _options) {
        this._element = _element;
        this._config = _options;
        this._$input = this._element.find('input.bsa-input-search');
      }

      // Public

      open() {
        this._element.addClass(CLASS_NAME_OPEN);
      }
      close() {
        this._element.removeClass(CLASS_NAME_OPEN);
        if (this._config.closeReset === true) {
          this._$input.val('');
        }
      }
      toggle() {
        if (this._element.hasClass(CLASS_NAME_OPEN)) {
          this.close();
        } else {
          this.open();
        }
      }
      _triggerSearch(keyword) {
        const searchEvent = $.Event(EVENT_SEARCH);
        $(this._element).trigger(searchEvent, [this._config, keyword]);
      }
      _init() {
        let _this = this;

        //给input框绑定key事件
        _this._$input.on('keydown', function (event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            let inputVal = $.trim(_this._$input.val());
            if (inputVal !== '') {
              _this._triggerSearch(inputVal);
            }
          }
        });

        //给搜索图标绑定点击事件
        $(document).on('click', '.bsa-search-submit-btn', function (e) {
          e.preventDefault();
          let inputVal = $.trim(_this._$input.val());
          if (inputVal !== '') {
            _this._triggerSearch(inputVal);
          }
        });

        //给关闭按钮绑定点击事件
        $(document).on('click', '.bsa-search-close-btn', function (e) {
          e.preventDefault();
          _this.close();
        });

        //给触发器绑定事件

        $(document).on('click', _this._config.trigger, function (e) {
          e.preventDefault();
          _this.open();
        });
      }

      // Static
      static _jQueryInterface(config) {
        return this.each(function () {
          let data = $(this).data(DATA_KEY$3);
          const _config = $.extend({}, Default$3, typeof config === 'object' ? config : $(this).data());
          if (!data) {
            data = new NavbarSearch($(this), _config);
            $(this).data(DATA_KEY$3, data);
            data._init();
          } else if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError(`No method named "${config}"`);
            }
            data[config]();
          } else if (typeof config === 'undefined') {
            data._init();
          }
        });
      }
    }

    /**
     * Data API
     * ====================================================
     */

    $(window).on('load', () => {
      if (Helper.isIndex()) {
        NavbarSearch._jQueryInterface.call($(SELECTOR_DATA_TOGGLE$1));
      }
    });

    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME$3] = NavbarSearch._jQueryInterface;
    $.fn[NAME$3].Constructor = NavbarSearch;
    $.fn[NAME$3].noConflict = function () {
      $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
      return NavbarSearch._jQueryInterface;
    };

    /* global bootstrap */
    // import _template from 'lodash-es/template'

    const NAME$2 = 'Toasts';
    const DATA_KEY$2 = 'bsa.toasts';
    const EVENT_KEY$2 = `.${DATA_KEY$2}`;
    const JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
    const EVENT_INIT = `init${EVENT_KEY$2}`;
    // const EVENT_CREATED = `created${EVENT_KEY}`
    // const EVENT_REMOVED = `removed${EVENT_KEY}`

    const POSITION_TOP_RIGHT = 'topRight';
    const Default$2 = {
      //正文内容。也可以填充html标签。例子：Hello <b>World</b>
      body: '',
      //将过渡应用到吐司
      animation: true,
      //自动隐藏吐司
      autohide: true,
      //是否显示关闭按钮
      btnClose: true,
      //将关闭按钮设置为白色变体
      btnCloseWhite: false,
      //要添加到类“.toast”中的类属性
      className: '',
      //延迟隐藏吐司（毫秒）
      delay: 5000,
      //toast 之间的间隙 (px)
      gap: 16,
      //角边距。也可以填充一个css变量。例子：var(--toast-margin)
      margin: '1rem',
      //toast 的角落位置。可用值：top-right, top-left, bottom-right, bottom-left
      position: POSITION_TOP_RIGHT
    };
    class Toasts {
      constructor(element, config) {
        this._config = config;

        //bootstrap官方的实例
        this._bootstrapToast = null;

        //调用容器
        this._prepareContainer();
        //准备
        $('body').trigger($.Event(EVENT_INIT));
      }

      // Public

      show() {
        this._bootstrapToast.show();
      }
      hide() {
        this._bootstrapToast.hide();
      }

      // Private
      _prepareContainer() {
        let template = `
              <div style="z-index: 1081" class="toast position-fixed bottom-0 end-0" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                  <img src="dist/img/user.png" style="height: 25px" class="rounded me-2" alt="...">
                  <i class="bi bi-bell"></i>  
                  <strong class="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                  Hello, world! This is a toast message.
                </div>
              </div>
        `;
        let $element = $(template);
        $('body').append($element);
        this._bootstrapToast = new bootstrap.Toast($element[0], {
          animation: this._config.animation,
          autohide: this._config.autohide,
          delay: this._config.delay
        });

        //         let html = `
        //                 <div class="big">
        //                     <p>1</p>
        //                     <p>2</p>
        //                     <% if ( options.autohide === true ) { %>
        //                     <p>3</p>
        //                     <% } %>
        //                 </div>
        // `
        //         let ret = _template(html)({
        //             options: this._config
        //         })
        //
        //         console.log(ret)
      }

      // Static
      static _jQueryInterface(option, config) {
        return this.each(function () {
          const _options = $.extend({}, Default$2, config);
          const toast = new Toasts($(this), _options);
          if (option === 'show') {
            toast[option]();
          }
        });
      }
    }

    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME$2] = Toasts._jQueryInterface;
    $.fn[NAME$2].Constructor = Toasts;
    $.fn[NAME$2].noConflict = function () {
      $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
      return Toasts._jQueryInterface;
    };

    const NAME$1 = 'PushMenu';
    const DATA_KEY$1 = 'bsa.pushmenu';
    const EVENT_KEY$1 = `.${DATA_KEY$1}`;
    const JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];

    //折叠开始
    const EVENT_COLLAPSE = `collapse${EVENT_KEY$1}`;
    //折叠完毕
    const EVENT_COLLAPSED$1 = `collapsed${EVENT_KEY$1}`;

    //展开开始
    const EVENT_EXPAND = `expand${EVENT_KEY$1}`;

    //展开完毕
    const EVENT_EXPANDED$1 = `expanded${EVENT_KEY$1}`;
    const SELECTOR_TOGGLE_BUTTON = '[data-bsa-toggle="pushmenu"]';

    //侧边栏选择器
    const SELECTOR_SIDEBAR = '.bsa-sidebar';
    const SELECTOR_MASK = '.bsa-mask';
    //折叠类名
    const CLASS_NAME_COLLAPSED = 'open';
    const Default$1 = {
      //过渡的动画时间
      animationSpeed: 300
    };
    class PushMenu {
      constructor(element, options) {
        this._element = element;
        this._options = options;
        this._addTransition();
      }

      // Public

      expand() {
        //事件
        $(this._element).trigger($.Event(EVENT_EXPAND));

        // 展开
        $('.bsa-sidebar').addClass(CLASS_NAME_COLLAPSED);
        $(SELECTOR_SIDEBAR).data('isOpen', true);
        //添加遮罩层
        this._addOverlay();
      }
      collapse() {
        $(this._element).trigger($.Event(EVENT_COLLAPSE));
        $(SELECTOR_SIDEBAR).removeClass(CLASS_NAME_COLLAPSED);
        $(SELECTOR_SIDEBAR).data('isOpen', false);
        //同时移除遮罩层
        // $('.bsa-mask').remove();
        $(SELECTOR_MASK).remove();
      }
      toggle() {
        if ($(SELECTOR_SIDEBAR).hasClass(CLASS_NAME_COLLAPSED)) {
          this.collapse();
        } else {
          this.expand();
        }
      }

      // Private
      _addTransition() {
        $(SELECTOR_SIDEBAR).css({
          'transition': `${this._options.animationSpeed}ms transform`
        });
      }
      _addOverlay() {
        if ($(SELECTOR_MASK).length === 0) {
          $('<div class="bsa-mask"></div>').prependTo('body');
        }
      }
      _init() {
        let _this = this;

        //遮罩层关闭事件
        $(document).on('click', SELECTOR_MASK, function (e) {
          e.preventDefault();
          _this.collapse();
        });

        //监听过渡事件
        $(document).on('transitionend', SELECTOR_SIDEBAR, function (e) {
          if (e.target === e.currentTarget) {
            const expandedEvent = $.Event(EVENT_EXPANDED$1);
            const collapsedEvent = $.Event(EVENT_COLLAPSED$1);

            //判断是展开还是折叠
            if ($(e.target).data('isOpen')) {
              $(_this._element).trigger(expandedEvent);
            } else {
              $(_this._element).trigger(collapsedEvent);
            }
          }
        });
        $(document).on('click', SELECTOR_TOGGLE_BUTTON, event => {
          event.preventDefault();
          _this.toggle();
        });
      }

      // Static
      static _jQueryInterface(config) {
        return this.each(function () {
          let data = $(this).data(DATA_KEY$1);
          const _config = $.extend({}, Default$1, typeof config === 'object' ? config : $(this).data());
          if (!data) {
            data = new PushMenu($(this), _config);
            $(this).data(DATA_KEY$1, data);
            data._init();
          } else if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError(`No method named "${config}"`);
            }
            data[config]();
          } else if (typeof config === 'undefined') {
            data._init();
          }
        });
      }
    }

    /**
     * Data API
     * ====================================================
     */

    $(window).on('load', () => {
      if (Helper.isIndex()) {
        PushMenu._jQueryInterface.call($(SELECTOR_TOGGLE_BUTTON));
      }
    });

    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME$1] = PushMenu._jQueryInterface;
    $.fn[NAME$1].Constructor = PushMenu;
    $.fn[NAME$1].noConflict = function () {
      $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
      return PushMenu._jQueryInterface;
    };

    const NAME = 'Sidebar';
    const DATA_KEY = 'bsa.sidebar';
    const EVENT_KEY = `.${DATA_KEY}`;
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    const EVENT_EXPANDED = `expanded${EVENT_KEY}`;
    const EVENT_COLLAPSED = `collapsed${EVENT_KEY}`;
    const SELECTOR_DATA_TOGGLE = '[data-bsa-toggle="sidebar"]';
    const Default = {
      //动画速度,单位毫秒
      animationSpeed: 150,
      //是否启用手风琴模式
      accordion: true
    };
    class Sidebar {
      constructor(element, config) {
        this._config = config;
        this._element = element;
      }

      // Public

      expand($menuLink) {
        let _this = this;
        $menuLink.siblings('ul').each(function (index, element) {
          //变成jquery对象
          let $element = $(element);

          //获取真实的滚动高度
          let scrollHeight = _this._getRealHeight(element);

          //设置一个展开标志属性,用于监听过渡结束时判断是展开还是折叠
          $element.data('isOpen', true);
          $element.css({
            'height': 0
          });

          //触发重绘
          void element.scrollHeight;
          $element.css({
            'transition-timing-function': 'ease',
            'transition-duration': `${_this._config.animationSpeed}ms`,
            'transition-property': 'height',
            'display': 'block',
            'height': scrollHeight
          });
        });
      }
      collapse($menuLink) {
        let _this = this;
        $menuLink.siblings('ul').each(function (index, element) {
          let $element = $(element);
          let scrollHeight = _this._getRealHeight(element);
          $element.data('isOpen', false);
          $element.css({
            'transition-timing-function': 'ease',
            'transition-duration': `${_this._config.animationSpeed}ms`,
            'transition-property': 'height',
            'display': 'block',
            'height': scrollHeight
          });
          void element.scrollHeight;
          $element.css({
            'height': 0
          });
        });
      }

      // Private
      _init() {
        let _this = this;

        //左侧导航过度结束事件
        $(document).on('transitionend', '.bsa-menu ul', function (e) {
          if (e.target === e.currentTarget) {
            const expandedEvent = $.Event(EVENT_EXPANDED);
            const collapsedEvent = $.Event(EVENT_COLLAPSED);
            $(e.target).removeAttr('style');
            //判断是展开还是折叠
            if ($(e.target).data('isOpen')) {
              $(_this._element).trigger(expandedEvent);
            } else {
              $(_this._element).trigger(collapsedEvent);
            }
          }
        });

        //侧边栏点击事件,有子集的且没有target属性
        $(document).on('click', '.bsa-menu a.has-children:not([target])', function (e) {
          e.preventDefault();
          let $a = $(this);

          //是否开启手风琴模式
          if (_this._config.accordion) {
            let $pSiblingsLi = $a.parent().siblings('li');
            let $pSiblingsOpenA = $pSiblingsLi.children('a.has-children.open');

            //调用折叠类
            _this.collapse($pSiblingsOpenA);
            $pSiblingsOpenA.removeClass('open');
            //
            // //同时给折叠的ul下面的子集中a链接有激活的给移除激活效果
            $pSiblingsLi.children('a.active').removeClass('active');
          }
          if (!$a.hasClass('open')) {
            $a.addClass('open');
            _this.expand($a);
          } else {
            $a.removeClass('open');
            _this.collapse($a);
          }
        });

        //侧边栏，没有子集的链接
        $(document).on('click', '.bsa-menu a:not(.has-children):not([target])', function (e) {
          e.preventDefault();
          let $a = $(this);

          //移除所有的激活类
          $('.bsa-menu a').each(function (index, a) {
            $(a).removeClass('active');
          });

          //给当前的a添加激活类
          $a.addClass('active');

          //添加tab处理
          Quicktab.get('.qtab').addTab({
            title: this.innerText,
            url: this.getAttribute('href'),
            close: true
          });
        });
      }

      //获取display:none元素的真实高度
      _getRealHeight(element) {
        let $element = $(element);
        let $clone = $element.clone();
        $clone.css({
          visibility: 'hidden',
          display: 'block',
          position: 'absolute',
          zIndex: '-999'
        });
        $element.after($clone);
        let nx = $element.next();
        //获取滚动高度
        let nxsh = nx.prop('scrollHeight');
        nx.remove();
        return nxsh;
      }

      // Static
      static _jQueryInterface(config) {
        for (const element of this) {
          let $element = $(element);
          let data = $element.data(DATA_KEY);
          const _config = $.extend({}, Default, typeof config === 'object' ? config : $element.data());
          if (!data) {
            //没有就new
            data = new Sidebar($element, _config);

            //赋值给data,供给下次调用
            $element.data(DATA_KEY, data);

            //调用内部的私有方法,初始化，执行必须执行的方法
            data._init();
          }
          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError(`方法 "${config}" 不存在`);
            }
            let execRt = data[config]();
            if (typeof execRt !== 'undefined') {
              return execRt;
            }
          }
        }
        return this;
      }
    }

    /**
     * Data API
     * ====================================================
     */

    $(window).on('load', () => {
      if (Helper.isIndex()) {
        $(SELECTOR_DATA_TOGGLE).each(function () {
          Sidebar._jQueryInterface.call($(this));
        });
      }
    });

    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = Sidebar._jQueryInterface;
    $.fn[NAME].Constructor = Sidebar;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Sidebar._jQueryInterface;
    };

    exports.Layout = Layout;
    exports.NavbarSearch = NavbarSearch;
    exports.PushMenu = PushMenu;
    exports.Sidebar = Sidebar;
    exports.Toasts = Toasts;

}));
//# sourceMappingURL=bootstrap-admin.js.map
