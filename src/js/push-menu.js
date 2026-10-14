import datasetConfig from "dataset-config";

import BaseComponent from "./base-component";
import Constants from "./constants";
import { dispatchCustomEvent } from "./utils/dispatchCustomEvent.ts";
import { executeAfterTransition, hasTransition } from "./utils/index.js";

const EVENT_KEY = `.${Constants.PREFIX}.push-menu`;

export const EVENT_TOGGLE_START = `toggle${EVENT_KEY}`;
export const EVENT_TOGGLE_END = `toggled${EVENT_KEY}`;

export const EVENT_HOVER_TOGGLE_START = `hovertoggle${EVENT_KEY}`;
export const EVENT_HOVER_TOGGLE_END = `hovertoggled${EVENT_KEY}`;

const CLASS_NAME_SIDEBAR_TOGGLE = "toggled";
const CLASS_NAME_APP_OVERLAY = `${Constants.PREFIX}-overlay`;

export const SELECTOR_DATA_TOGGLE = `[data-${Constants.PREFIX}-toggle="pushmenu"]`;
const SELECTOR_APP_WRAPPER = `.${Constants.PREFIX}-wrapper`;
const SELECTOR_APP_OVERLAY = `.${CLASS_NAME_APP_OVERLAY}`;
const SELECTOR_APP_SIDEBAR = `.${Constants.PREFIX}-sidebar`;

const HTML_APP_OVERLAY = `<div class="${CLASS_NAME_APP_OVERLAY}"></div>`;

const DEFAULT = {
  //过渡的动画时间
  animationSpeed: 300,
};

class PushMenu extends BaseComponent {
  #element;
  #config;

  #pendingState = null;
  #transitionStartWidth = 0;

  constructor(element, config) {
    super(element);
    this.#element = element;
    this.appWrapperEl = document.querySelector(SELECTOR_APP_WRAPPER);
    this.sidebarEl = document.querySelector(SELECTOR_APP_SIDEBAR);
    this.#config = { ...DEFAULT, ...(config ?? {}) };
    this.#init();
  }

  #init() {
    // 绑定事件
    $(this.#element).on("click", (event) => {
      this.toggle();
    });

    // 直接注入遮罩层
    this.#addOverlay();

    //遮罩层关闭事件
    $(document).on("click", SELECTOR_APP_OVERLAY, (e) => {
      e.preventDefault();
      this.setToggled(false);
    });

    this.sidebarEl.addEventListener("transitionrun", (e) => {
      if (e.propertyName !== "width") return;

      this.#transitionStartWidth = this.sidebarEl.offsetWidth;

      console.log("transitionrun");
    });

    // 过渡结束事件
    this.sidebarEl.addEventListener("transitionend", (e) => {
      if (e.target !== e.currentTarget) {
        return;
      }

      if (e.propertyName == "width") {
        const currentWidth = this.sidebarEl.offsetWidth;
        const expanded = currentWidth > this.#transitionStartWidth;

        dispatchCustomEvent(this.#element, EVENT_HOVER_TOGGLE_END, {
          detail: {
            expanded,
          },
        });
      }

      if (!["width", "transform"].includes(e.propertyName)) {
        return;
      }

      if (this.#pendingState === null) {
        return;
      }

      dispatchCustomEvent(this.#element, EVENT_TOGGLE_END, {
        detail: {
          toggled: this.#pendingState,
        },
      });

      this.#pendingState = null;
    });
  }

  setToggled(state) {
    // 避免重复设置相同状态，防止产生无意义的操作和事件。
    if (this.isToggled() === state) {
      return;
    }

    this.#pendingState = state;

    dispatchCustomEvent(this.#element, EVENT_TOGGLE_START, {
      detail: {
        toggled: state,
      },
    });

    this.appWrapperEl.classList.toggle(CLASS_NAME_SIDEBAR_TOGGLE, state);
  }

  toggle() {
    this.setToggled(!this.isToggled());
  }

  isToggled() {
    return this.appWrapperEl.classList.contains(CLASS_NAME_SIDEBAR_TOGGLE);
  }

  #addOverlay() {
    if ($(SELECTOR_APP_OVERLAY).length === 0) {
      $(HTML_APP_OVERLAY).prependTo(SELECTOR_APP_WRAPPER);
    }
  }
}

/**
 * Data API
 * ====================================================
 */

$(() => {
  for (const el of document.querySelectorAll(SELECTOR_DATA_TOGGLE)) {
    PushMenu.getOrCreateInstance(
      el,
      datasetConfig(el, {
        prefix: Constants.PREFIX,
      }),
    );
  }
});

export default PushMenu;
