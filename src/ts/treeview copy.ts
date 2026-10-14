import datasetConfig from "dataset-config";
import d from "domtify";

import BaseComponent from "./base-component";

import "domtify/methods/parent";
import "domtify/methods/hasClass";
import "domtify/methods/on";
import "domtify/methods/each";
import "domtify/methods/addClass";
import "domtify/methods/removeClass";
import "domtify/methods/siblings";
import "domtify/methods/children";

const DATA_KEY = "lts.treeview";
const EVENT_KEY = `.${DATA_KEY}`;

const SELECTOR_DATA_TOGGLE = '[data-lts-toggle="treeview"]';

const EVENT_EXPANDED = `expanded${EVENT_KEY}`;
const EVENT_COLLAPSED = `collapsed${EVENT_KEY}`;

const SELECTOR_LI = "li";
const SELECTOR_LINK = "a";
const SELECTOR_SUBMENU = "ul";
const CLASS_NAME_MENU_OPEN = "open";
const CLASS_NAME_ACTIVE = "active";

const DEFAULT = {
  //动画速度,单位毫秒
  animationSpeed: 150,
  //是否启用手风琴模式
  accordion: true,
};

class Treeview extends BaseComponent {
  // 配置
  #config;
  // 元素
  #element;

  // 是否是展开状态
  #isOpen;
  #parentEl;
  constructor(element, config) {
    this.#config = { ...DEFAULT, ...(config ?? {}) };
    this.#element = element;
    this.#init();
  }

  #init() {
    // 绑定上点击事件
    d(this.#element).on("click", `${SELECTOR_LINK}:not([target])`, (event) => {
      this.#parentEl = d(event.currentTarget).parent();
      this.#isOpen = this.#parentEl.hasClass(CLASS_NAME_MENU_OPEN);
      this.toggle();
    });
  }

  toggle() {
    if (this.#isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (this.#config.accordion === true) {
      this.#parentEl
        .siblings(`${SELECTOR_LI}.${CLASS_NAME_MENU_OPEN}`)

        .each((i, el) => {
          d(el).removeClass(CLASS_NAME_MENU_OPEN);
        });
    }

    this.#parentEl.addClass(CLASS_NAME_MENU_OPEN);
  }

  //折叠
  close() {
    this.#parentEl.removeClass(CLASS_NAME_MENU_OPEN);
  }
}

/**
 * Data API
 * ====================================================
 */

d(() => {
  d(SELECTOR_DATA_TOGGLE).each((i, el) => {
    new Treeview(
      el,
      datasetConfig(el, {
        prefix: "lts",
      }),
    );
  });
});

export default Treeview;
