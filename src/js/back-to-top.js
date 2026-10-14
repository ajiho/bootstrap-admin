import datasetConfig from "dataset-config";

import BaseComponent from "./base-component";
import Constants from "./constants";
import { hasMultipleToggle } from "./utils/index";

const DATA_TOGGLE_NAME = "scrolltop";
const DATA_KEY = `${Constants.PREFIX}.${DATA_TOGGLE_NAME}`;
const EVENT_KEY = `.${DATA_KEY}`;
const SELECTOR_DATA_TOGGLE = `[data-${Constants.PREFIX}-toggle*="${DATA_TOGGLE_NAME}"]`;

const EVENT_SCROLL_BEFORE = `scroll.before${EVENT_KEY}`;
const EVENT_SCROLL_COMPLETE = `scroll.complete${EVENT_KEY}`;

// 类名,美化的
const CLASS_NAME_BACKTOTOP = "lts-back-to-top";

const Default = {
  //距离顶部的距离
  distanceFromTop: 300,
};

class Scrolltop extends BaseComponent {
  #config;
  #element;

  constructor(element, config) {
    super(element);
    this.#config = config;
    this.#element = element;

    this.#init();
  }

  #init() {
    // 只要初始化就插入元素
    // this.#setupListeners()
  }

  #setupListeners() {
    const that = this;

    //回到顶部,向下滚动300px渐显回到顶部按钮
    $(window).on("scroll", function () {
      // 先找到这个滚动到顶部的元素
      const $backtotop = $(`.${CLASS_NAME_BACKTOTOP}`);

      if ($backtotop.length === 0) {
        //如果没有
        $(`<a class="${CLASS_NAME_BACKTOTOP}"><i class="bi bi-arrow-up-short"></i></a>`).prependTo(
          $(that.#config.prependTo),
        );
      }
      $(this).scrollTop() > that.#config.distanceFromTop
        ? $backtotop.fadeIn()
        : $backtotop.fadeOut();
    });

    //回到顶部事件监听
    $(document).on("click", that.#config.triggerElement, function () {
      $(that.#element).trigger($.Event(EVENT_SCROLL_BEFORE));

      $("html").animate(
        {
          scrollTop: 0,
        },
        that.#config.speed,
        function () {
          $(that.#element).trigger($.Event(EVENT_SCROLL_COMPLETE));
        },
      );
    });
  }
}

/**
 * Data API
 * ====================================================
 */

$(() => {
  for (const el of document.querySelectorAll(SELECTOR_DATA_TOGGLE)) {
    Scrolltop.getOrCreateInstance(
      el,
      datasetConfig(el, {
        prefix: hasMultipleToggle(el)
          ? `${Constants.PREFIX}-${DATA_TOGGLE_NAME}`
          : Constants.PREFIX,
      }),
    );
  }
});

export default Scrolltop;
