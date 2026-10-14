import d from "domtify";

import BaseComponent from "./base-component";
import Constants from "./constants";

import "domtify/methods/parent";
import "domtify/methods/hasClass";
import "domtify/methods/on";
import "domtify/methods/each";
import "domtify/methods/addClass";
import "domtify/methods/removeClass";
import "domtify/methods/siblings";
import "domtify/methods/children";

const NAME = "treeview";
const SELECTOR_DATA_TOGGLE = `[data-${Constants.PREFIX}-toggle="${NAME}"]`;

const EVENT_EXPANDED = `expanded`;
const EVENT_COLLAPSED = `collapsed`;

const SELECTOR_LI = "li";
const SELECTOR_LINK = "a";
const CLASS_NAME_MENU_OPEN = "open";

const DEFAULT = {
  //动画速度,单位毫秒
  animationSpeed: 150,
  //是否启用手风琴模式
  accordion: true,
};

class Treeview extends BaseComponent {
  // 是否是展开状态
  #isOpen;
  #parentEl;
  constructor(element, config) {
    super(element, config);

    this.#init();

    const res = this.constructor.eventName("a");
    console.log(res);
  }

  static get Default() {
    return DEFAULT;
  }
  static get NAME() {
    return NAME;
  }

  #init() {
    // 绑定上点击事件
    d(this._element).on("click", `${SELECTOR_LINK}:not([target])`, (event) => {
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
    if (this._config.accordion === true) {
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
    new Treeview(el);
  });
});

export default Treeview;
