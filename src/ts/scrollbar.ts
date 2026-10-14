import datasetConfig from "dataset-config";
import d from "domtify";

import Constants from "./constants";

const SELECTOR_DATA_TOGGLE = '[data-lts-toggle="scrollbar"]';
const { OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin } =
  OverlayScrollbarsGlobal;
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

class Scrollbar {
  #config;
  #element;
  #osInstance;

  constructor(element, config) {
    this.#config = { ...DEFAULT, ...(config ?? {}) };
    this.#element = element;
    this.#init();
  }

  #init() {
    //插件注册
    OverlayScrollbars.plugin([SizeObserverPlugin, ClickScrollPlugin, ScrollbarsHidingPlugin]);

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

  // 获取滚动条插件的实例
  getOsInstance() {
    return this.#osInstance;
  }
}

/**
 * Data API
 * ====================================================
 */
d(() => {
  d(SELECTOR_DATA_TOGGLE).each((i, el) => {
    new Scrollbar(
      el,
      datasetConfig(el, {
        prefix: Constants.PREFIX,
      }),
    );
  });
});

export default Scrollbar;
