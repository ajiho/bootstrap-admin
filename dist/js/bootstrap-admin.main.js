$(document).ready(function () {

  // 侧边栏toggle
  $(document).on('click', '.bsa-sidebar-toggle', function () {
    const $overlay = $('.bsa-overlay');
    const $wrapper = $('.bsa-wrapper');

    $wrapper.toggleClass('toggled')

    if ($overlay.length === 0) {
      $('<div class="bsa-overlay"></div>').prependTo($wrapper);
    } else {
      $overlay.remove();
    }
  })

  // 遮罩层事件
  $(document).on('click', '.bsa-overlay', function () {
    $(this).remove();
    $('.bsa-wrapper').removeClass('toggled');
  });


  $(document).on('fullscreenchange', function () {
    const $fullscreenTrigger = $('.bsa-fullscreen-trigger')
    if (document.fullscreenElement == null) {//退出全屏
      $fullscreenTrigger.html('<i class="bi bi-arrows-fullscreen"></i>')
    } else {
      $fullscreenTrigger.html('<i class="bi bi-fullscreen-exit"></i>')
    }
  })


  $(document).on('click', '.bsa-fullscreen-trigger', function () {
    if ($(this).find('i.bi-arrows-fullscreen').length > 0) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen()
    }
  })


  // 搜索的展开
  $(document).on('click', '.bsa-search-form-open-btn', function () {
    $('.bsa-search-form').addClass('open')
  })

  // 搜索的关闭
  $(document).on('click', '.bsa-search-form-close-btn', function () {
    $('.bsa-search-form').removeClass('open')
  })


  //侧边栏菜单的折叠控制逻辑
  $('.bsa-sidebar-wrapper .bsa-navigation').on('click', 'a', function (event) {
    const $trigger = $(this);
    //查找兄弟元素ul
    const $nextUl = $trigger.siblings('ul');
    const $parentLi = $trigger.parent();
    //动画速度
    const animationSpeed = 150;
    if ($nextUl.length > 0) {
      event.preventDefault();//阻止默认事件

      if (!$trigger.parent().find('ul').slice(1).is(':animated') && !$trigger.parents('ul').is(':animated')) {

        //所有的兄弟ul折叠逻辑
        $parentLi.siblings('li.open')
          .removeClass('open')
          .children('ul')
          .css('display', 'block')
          .stop(true, false)
          .slideUp(animationSpeed);
        const fn = function () {
          $(this).removeAttr('style')
        }
        if ($parentLi.hasClass('open')) {
          $parentLi.removeClass('open')
          $nextUl.css('display', 'block').stop(true, false).slideUp(animationSpeed, fn)
        } else {
          $parentLi.addClass('open')
          $nextUl.css('display', 'none').stop(true, false).slideDown(animationSpeed, fn)
        }
      }
    }
  })


  //回到顶部,向下滚动300px渐显回到顶部按钮
  $(window).on('scroll', function () {
    const $bsaBackToTop = $('.bsa-back-to-top');
    $bsaBackToTop.length === 0 && $('<a class="bsa-back-to-top"><i class="bi bi-arrow-up-short"></i></a>').prependTo($('.bsa-wrapper'));
    $(this).scrollTop() > 300 ? $bsaBackToTop.fadeIn() : $bsaBackToTop.fadeOut();
  })

  //回到顶部事件监听
  $(document).on('click', '.bsa-back-to-top', function () {
    $('html').animate({
      scrollTop: 0
    }, 600)
  })


  //绑定事件
  $('.bsa-sidebar-wrapper').on("mouseenter",
    function () {
      const $wrapper = $('.bsa-wrapper');
      $wrapper.hasClass('toggled') && $wrapper.addClass('sidebar-hovered');
    }).on("mouseleave",
    function () {
      $('.bsa-wrapper').removeClass('sidebar-hovered');
    })

  //监听侧边栏过渡事件
  $(document).on('transitionend', '.bsa-sidebar-wrapper', function (event) {
    const targetUL = event.target
    if (targetUL === this) {
      const overlayEl = document.querySelector('.bsa-overlay')
      if (overlayEl !== null) {
        const position = getComputedStyle(overlayEl).getPropertyValue('position')
        if (position === 'fixed') {
          bodyScrollLock.lock('body');
        }
      } else {
        bodyScrollLock.unlock('body');
      }
    }
  })


  //小屏幕下邮件侧边栏按钮点击处理
  $(document).on('click', '.email-toggle-btn', function () {
    // 先添加遮罩层
    const $overlay = $('.bsa-email-overlay');
    const $wrapper = $('.email-wrapper');
    if ($overlay.length === 0) {
      $('<div class="bsa-email-overlay"></div>').prependTo($wrapper);
    } else {
      $overlay.remove();
    }
    $wrapper.toggleClass("email-toggled")
  })


  // 邮箱遮罩层点击时关闭遮罩
  $(document).on('click', '.bsa-email-overlay', function () {
    $(this).remove();
    $('.email-wrapper').removeClass("email-toggled")
  })


})

