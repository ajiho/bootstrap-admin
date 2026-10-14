import datasetConfig from "dataset-config";

import Link from "./link";
import { getRootWindow } from "./utils";

const DATA_KEY = "lts.initializer";
const EVENT_KEY = `.${DATA_KEY}`;
const SELECTOR_DATA_TOGGLE = '[data-lts-toggle="initializer"]';

//类名
const ClassName = {
  pe: "pe-none",
};

const DEFAULT = {
  //提示工具允许的属性和标签设置 see:https://getbootstrap.com/docs/5.3/getting-started/javascript/#sanitizer
  sanitizerAllowList: {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    button: ["onclick"],
  },
  //提示和气泡工具是否点击下一次自动关闭
  nextClickDismiss: true,
};

class Initializer {
  #config;
  #element;

  constructor(element, config) {
    this.#config = config;
    this.#element = element;
    this.#init();
  }

  // Private
  #init() {
    this.#bridge();

    // 初始化链接插件
    Link.init();

    // 优化：禁止所有 input 自动记忆输入内容
    document.querySelectorAll("input").forEach((input) => {
      input.setAttribute("autocomplete", "off");
    });

    document.addEventListener("submit", this.#onSubmit);

    document.addEventListener("click", this.#onClick);
  }

  #onSubmit(event) {
    // 优化：无效表单禁止提交（如果 form 没有 action 或 action="#"）
    const form = event.target;

    if (!(form instanceof HTMLFormElement)) {
      return;
    }

    const action = form.getAttribute("action")?.trim();

    if (!action || action === "#") {
      event.preventDefault();
    }
  }

  #onClick(event) {
    // 优化：对于 href="#" 的链接阻止默认事件
    const link = event.target.closest('a[href="#"]');

    if (!link) {
      return;
    }

    event.preventDefault();
  }

  #bridge() {
    Object.defineProperty(window, "popup", {
      configurable: true,
      enumerable: false,
      get() {
        return getRootWindow().adminlts?.popup;
      },
    });
  }
}

/**
 * Data API
 * ====================================================
 */
$(() => {
  $("body").each((i, el) => {
    new Initializer(
      el,
      datasetConfig(el, {
        prefix: "lts",
      }),
    );
  });
});

export default Initializer;
