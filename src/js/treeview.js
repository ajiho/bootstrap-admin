import datasetConfig from "dataset-config";

import BaseComponent from "./base-component";
import Constants from "./constants";
import { dispatchCustomEvent } from "./utils/dispatchCustomEvent.ts";

const DATA_KEY = `${Constants.PREFIX}.treeview`;
const EVENT_KEY = `.${DATA_KEY}`;
export const EVENT_TRANSITION_COMPLETE = `transitioncomplete${EVENT_KEY}`;
export const SOURCE_OPEN = "open";
export const SOURCE_CLOSE = "close";
export const SOURCE_EXPAND_ALL = "expandAll";
export const SOURCE_COLLAPSE_ALL = "collapseAll";
export const SOURCE_OPEN_PARENTS = "openParents";
export const SOURCE_CLOSE_CHILDREN = "closeChildren";

const SELECTOR_DATA_TOGGLE = `[data-${Constants.PREFIX}-toggle="treeview"]`;

const EVENT_TOGGLE = `toggle${EVENT_KEY}`;
const EVENT_TOGGLED = `toggled${EVENT_KEY}`;

const SELECTOR_ITEM = "li";
const SELECTOR_LINK = "a";
const SELECTOR_SUBMENU = "ul";
const CLASS_NAME_MENU_OPEN = "is-open";
const CLASS_NAME_ACTIVE = "is-active";

const CSS_NAME_TRANSITION = "grid-template-rows";

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

  // 当前还有多少 transition 正在运行
  #transitionCount = 0;
  // 来源
  #source = null;

  constructor(element, config) {
    super(element);
    this.#config = { ...DEFAULT, ...(config ?? {}) };
    this.#element = element;
    this.#init();
  }

  #init() {
    // 绑定上点击事件
    $(this.#element).on("click", `${SELECTOR_LINK}:not([target])`, (event) => {
      const item = event.currentTarget.parentElement;

      this.toggle(item);
    });

    // transition 开始
    $(this.#element).on("transitionrun", SELECTOR_ITEM, (event) => {
      const e = event.originalEvent;

      if (e.propertyName !== CSS_NAME_TRANSITION) {
        return;
      }

      this.#transitionCount++;
    });

    // transition 结束/取消
    $(this.#element).on("transitionend transitioncancel", SELECTOR_ITEM, (event) => {
      const e = event.originalEvent;
      const item = event.currentTarget;
      if (e.propertyName !== CSS_NAME_TRANSITION) {
        return;
      }

      this.#transitionCount--;

      dispatchCustomEvent(item, EVENT_TOGGLED, {
        detail: {
          open: this.isOpen(item),
          source: this.#source,
        },
      });

      if (this.#transitionCount === 0) {
        dispatchCustomEvent(this.#element, EVENT_TRANSITION_COMPLETE, {
          detail: {
            source: this.#source,
          },
        });
      }
    });
  }

  toggle(item) {
    if (this.isOpen(item)) {
      this.close(item);
    } else {
      this.open(item);
    }
  }

  isOpen(item) {
    return item.classList.contains(CLASS_NAME_MENU_OPEN);
  }

  open(item) {
    this.#source = SOURCE_OPEN;
    if (this.#config.accordion === true) {
      const openedItems = item.parentElement.querySelectorAll(
        `:scope > ${SELECTOR_ITEM}.${CLASS_NAME_MENU_OPEN}`,
      );

      for (const el of openedItems) {
        if (el !== item) {
          this.close(el);
          this.closeChildren(el);
        }
      }
    }

    this.#open(item);
  }
  #open(item) {
    if (this.isOpen(item)) {
      return;
    }

    item.classList.add(CLASS_NAME_MENU_OPEN);

    dispatchCustomEvent(item, EVENT_TOGGLE, {
      detail: {
        open: true,
        source: this.#source,
      },
    });
  }
  //折叠
  close(item) {
    if (!this.isOpen(item)) {
      return;
    }

    this.#source = SOURCE_CLOSE;
    item.classList.remove(CLASS_NAME_MENU_OPEN);
    dispatchCustomEvent(item, EVENT_TOGGLE, {
      detail: {
        open: false,
        source: this.#source,
      },
    });
  }

  openParents(item) {
    this.#source = SOURCE_OPEN_PARENTS;

    let parent = item.parentElement.closest(SELECTOR_ITEM);

    while (parent) {
      this.#open(parent);

      parent = parent.parentElement.closest(SELECTOR_ITEM);
    }
  }

  closeChildren(item) {
    this.#source = SOURCE_CLOSE_CHILDREN;

    const openedItems = item.querySelectorAll(`${SELECTOR_ITEM}.${CLASS_NAME_MENU_OPEN}`);

    for (const el of openedItems) {
      this.close(el);
    }
  }

  activate(item) {
    this.deactivate();

    item.querySelector(SELECTOR_LINK).classList.add(CLASS_NAME_ACTIVE);
  }
  deactivate() {
    const activatedItems = this.#element.querySelectorAll(`${SELECTOR_LINK}.${CLASS_NAME_ACTIVE}`);

    for (const link of activatedItems) {
      link.classList.remove(CLASS_NAME_ACTIVE);
    }
  }

  expandAll() {
    this.#source = SOURCE_EXPAND_ALL;

    const items = this.#element.querySelectorAll(`${SELECTOR_ITEM}:not(.${CLASS_NAME_MENU_OPEN})`);

    for (const item of items) {
      this.#open(item);
    }
  }
  collapseAll() {
    this.#source = SOURCE_COLLAPSE_ALL;

    const items = this.#element.querySelectorAll(`${SELECTOR_ITEM}.${CLASS_NAME_MENU_OPEN}`);

    for (const item of items) {
      this.close(item);
    }
  }

  reveal(item) {
    // 折叠所有菜单
    this.collapseAll();
    // 展开某个菜单
    this.openParents(item);
    // 激活item
    this.activate(item);
  }
}

/**
 * Data API
 * ====================================================
 */

$(() => {
  for (const el of document.querySelectorAll(SELECTOR_DATA_TOGGLE)) {
    Treeview.getOrCreateInstance(
      el,
      datasetConfig(el, {
        prefix: Constants.PREFIX,
      }),
    );
  }
});

export default Treeview;
