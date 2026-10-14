import datasetConfig from "dataset-config";

import BaseComponent from "./base-component";
import Constants from "./constants";
import {
  SELECTOR_DATA_TOGGLE as SELECTOR_DATA_PUSH_MENU_TOGGLE,
  EVENT_TOGGLE_END,
  EVENT_HOVER_TOGGLE_END,
} from "./push-menu.js";
import Scrollbar from "./scrollbar.js";
import Treeview, { EVENT_TRANSITION_COMPLETE, SOURCE_OPEN_PARENTS } from "./treeview.js";
import { dispatchCustomEvent } from "./utils/dispatchCustomEvent.ts";

const DATA_KEY = `${Constants.PREFIX}.multitab`;
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_TOGGLE = `toggle${EVENT_KEY}`;
const EVENT_UNTOGGLE = `untoggle${EVENT_KEY}`;

const CLASS_NAME_APP_OVERLAY = `${Constants.PREFIX}-overlay`;
const CLASS_NAME_NAVIGATION_HAS_SUBMENU = `has-submenu`;

const SELECTOR_DATA_TOGGLE = `[data-${Constants.PREFIX}-toggle="multitab"]`;
const SELECTOR_APP_WRAPPER = `.${Constants.PREFIX}-wrapper`;
const SELECTOR_APP_SIDEBAR = `.${Constants.PREFIX}-sidebar`;
const SELECTOR_NAVIGATION = `.${Constants.PREFIX}-navigation`;
const SELECTOR_APP_SIDEBAR_BODY = `${SELECTOR_APP_SIDEBAR}__body`;
const SELECTOR_NAVIGATION_LINK = `${SELECTOR_NAVIGATION}__link`;
const SELECTOR_NAVIGATION_CONTENT = `${SELECTOR_NAVIGATION}__content`;
const SELECTOR_TRIGGERELEMENT = `${SELECTOR_NAVIGATION_LINK}:not(.${CLASS_NAME_NAVIGATION_HAS_SUBMENU}):not([target])`;

const DEFAULT = {
  //点击是否自动关闭侧边栏
  clickCloseSidebar: false,
  //触发元素选择器
  triggerElement: SELECTOR_TRIGGERELEMENT,

  triggerTitleSelector: SELECTOR_NAVIGATION_CONTENT,
};

class MultiTab extends BaseComponent {
  #element;
  #config;

  #scrollTarget = null;

  constructor(element, config) {
    super(element);
    this.#element = element;
    this.#config = { ...DEFAULT, ...(config ?? {}) };
    this.#init();
  }

  #init() {
    this.navigationEl = document.querySelector(SELECTOR_NAVIGATION);

    const pushmenuEl = document.querySelector(SELECTOR_DATA_PUSH_MENU_TOGGLE);
    if (pushmenuEl) {
      pushmenuEl.addEventListener(EVENT_TOGGLE_END, (e) => {
        if (!e.detail.toggled) {
          this.treeview.reveal(this.#scrollTarget);
          this.scrollTo();
        }
      });

      pushmenuEl.addEventListener(EVENT_HOVER_TOGGLE_END, (e) => {
        if (e.detail.expanded) {
          this.treeview.reveal(this.#scrollTarget);
          this.scrollTo();
        }
      });
    }

    // 获取滚动条
    this.scrollbar = Scrollbar.getOrCreateInstance(SELECTOR_APP_SIDEBAR_BODY);

    this.treeview = Treeview.getOrCreateInstance(SELECTOR_NAVIGATION);

    // 初始化quicktab
    this.quicktab = new Quicktab(this.#element, {
      tab: {
        clickCenterActive: true,
      },
      onInit: () => {
        const bodyEl = document.querySelector(".quicktab-dropdown .body");

        new Scrollbar(bodyEl);
      },
      onTabCloseAll: () => {
        this.treeview.collapseAll();
      },
      onTabActivated: (url) => {
        this.#scrollTarget = this.#findScrollTarget(url);

        if (!this.#scrollTarget) return;

        this.treeview.reveal(this.#scrollTarget);
      },
    });

    // 事件监听
    $(SELECTOR_NAVIGATION).on("click", this.#config.triggerElement, (event) => {
      event.preventDefault(); //阻止默认事件

      const triggerElement = event.currentTarget;

      const url = triggerElement.getAttribute("href")?.trim();

      if (!url || /^(#|javascript:)/i.test(url)) {
        return;
      }

      const title = triggerElement
        .querySelector(this.#config.triggerTitleSelector)
        ?.textContent?.trim();

      if (!title) return;

      this.quicktab.addTab({
        title,
        url,
        close: true,
      });
    });

    // 监听动画展开的事件
    this.navigationEl.addEventListener(EVENT_TRANSITION_COMPLETE, (e) => {
      if (event.detail.source !== SOURCE_OPEN_PARENTS) {
        return;
      }

      this.scrollTo();
    });
  }

  scrollTo() {
    this.scrollbar.scrollTo({
      top: this.#scrollTarget.offsetTop,
      behavior: "smooth",
    });
  }

  #findScrollTarget(url) {
    return this.navigationEl.querySelector(`${SELECTOR_NAVIGATION_LINK}[href="${CSS.escape(url)}"]`)
      ?.parentElement;
  }
}

/**
 * Data API
 * ====================================================
 */

$(() => {
  for (const el of document.querySelectorAll(SELECTOR_DATA_TOGGLE)) {
    MultiTab.getOrCreateInstance(
      el,
      datasetConfig(el, {
        prefix: Constants.PREFIX,
      }),
    );
  }
});

export default MultiTab;
