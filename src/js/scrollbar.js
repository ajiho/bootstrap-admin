import datasetConfig from "dataset-config";

import BaseComponent from "./base-component";
import Constants from "./constants";
import { hasMultipleToggle } from "./utils/index";

const DATA_TOGGLE_NAME = "scrollbar";
const SELECTOR_DATA_TOGGLE = `[data-${Constants.PREFIX}-toggle*="${DATA_TOGGLE_NAME}"]`;
const { OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin } =
  OverlayScrollbarsGlobal;

//插件注册
OverlayScrollbars.plugin([SizeObserverPlugin, ClickScrollPlugin, ScrollbarsHidingPlugin]);

// 默认选项
const DEFAULT = {
  overflow: {
    x: "scroll",
    y: "scroll",
  },
  scrollbars: {
    //never scroll leave move
    autoHide: "leave",
    //是否可以点击轨道滚动
    clickScroll: true,
    //隐藏滚动条的时间
    autoHideDelay: 600,
  },
};

class Scrollbar extends BaseComponent {
  #config;
  #element;
  #osInstance;

  constructor(element, config) {
    super(element);
    this.#config = { ...DEFAULT, ...(config ?? {}) };
    this.#element = element;
    this.#init();
  }

  #init() {
    //初始化实例
    this.#osInstance = OverlayScrollbars(this.#element, {
      update: {
        // 监听 transitionend 事件（grid-template-rows 动画结束时触发）
        elementEvents: [[`.${Constants.PREFIX}-navigation li`, "transitionend"]],
        // 稍微加一点 debounce，防止频繁触发
        debounce: 50,
      },
      overflow: {
        x: "hidden",
        y: "scroll",
      },
      scrollbars: {
        autoHide: "leave",
        visibility: "auto",
      },
    });
  }

  scrollTo(options) {
    this.#osInstance.elements().viewport.scrollTo(options);
  }

  getScrollElement() {
    return this.#osInstance.elements().viewport;
  }
}

/**
 * Data API
 * ====================================================
 */

$(() => {
  for (const el of document.querySelectorAll(SELECTOR_DATA_TOGGLE)) {
    Scrollbar.getOrCreateInstance(
      el,
      datasetConfig(el, {
        prefix: hasMultipleToggle(el)
          ? `${Constants.PREFIX}-${DATA_TOGGLE_NAME}`
          : Constants.PREFIX,
      }),
    );
  }
});

export default Scrollbar;
