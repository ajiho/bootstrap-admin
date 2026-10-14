import d from "domtify";

import BaseComponent from "../base-component";
import Constants from "../constants";
import utils from "../utils";
import { getIdByInstance, nextZIndex, pushStack } from "./state";

import "domtify/methods/trigger";
import "domtify/utilities/extend";
import "domtify/utilities/isPlainObject";
import "domtify/utilities/isFullString";
import "domtify/utilities/isNumber";

const FADE_DEFAULT = {
  in: 300,
  out: 300,
};

// 默认选项
const DEFAULT = {
  // 背景色
  background: "rgba(255, 255, 255, .65)",
  // 附加的背景的类名
  backgroundClass: "",
  // 旋转器外层包裹的盒子附加的类名
  boxClass: "d-flex align-items-center",
  // 旋转器 grow:实心圈  border:空心圈
  spinner: "border",
  // 旋转器颜色  可用值 primary success info  warning danger light dark
  spinnerColor: "dark",
  // 尺寸 可选值 'sm' 或者一个对象设置style {width: '3rem', height: '3rem';}
  spinnerSize: "",
  // 文本内容
  message: "",
  // 文本的颜色
  messageColor: "",
  // 自定义内容
  custom: "",
  // 最大等待时长
  time: Infinity,
  // false:不要动画，数字:启动动画并表示duration 对象：{in: 300,out:300}
  fade: false,
  // 事件 eg "show.lts.loading"
  events: {},
};

const NAME = "loading";

const EVENT_SHOW = `show`;
const EVENT_SHOWN = `shown`;
const EVENT_HIDE = `hide`;
const EVENT_HIDDEN = `hidden`;

const CLASS_NAME_LOADING = `${Constants.PREFIX}-loading`;

const Map = {
  // 预设风格
  preset: {
    0: {
      spinner: "border",
    },
    1: {
      spinner: "grow",
    },
    2: {
      boxClass: "d-flex gap-2 align-items-center py-2 px-3 border bg-light-subtle",
      message: "加载中...",
    },
  },
  spinner: {
    border: "spinner-border",
    grow: "spinner-grow",
    [Constants.SYMBOL_DEFAULT]: "spinner-border",
  },

  spinnerColor: {
    primary: "text-primary",
    secondary: "text-secondary",
    success: "text-success",
    danger: "text-danger",
    warning: "text-warning",
    info: "text-info",
    dark: "text-dark",
    light: "text-light",
    [Constants.SYMBOL_DEFAULT]: "text-primary",
  },
};

class Loading extends BaseComponent {
  #zIndex;

  // 是否是全局的
  #isGlobal;
  #loadingEl;
  constructor(element, options) {
    super(element, options);

    this._config.fade = this.#normalizeFade(this._config.fade);
    this.#zIndex = nextZIndex();

    this.#renderHTML();
  }

  static get Default() {
    return DEFAULT;
  }
  static get NAME() {
    return NAME;
  }

  #normalizeFade(fade) {
    if (fade === false) {
      return { enabled: false };
    }

    // 如果是数字：认为进出动画时间相同
    if (d.isNumber(fade)) {
      return { enabled: true, in: fade, out: fade };
    }

    // 如果是对象：允许部分值缺省
    if (d.isPlainObject(fade)) {
      return { enabled: true, ...FADE_DEFAULT, ...fade };
    }

    return { enabled: false };
  }

  #isGlobalOverlay(el) {
    const tag = el.tagName?.toLowerCase();
    return tag === "body" || tag === "html";
  }

  #ensurePositioned(el) {
    if (window.getComputedStyle(el).position === "static") {
      el.style.position = "relative";
    }
  }

  async #renderHTML() {
    // 生成一个id
    const id = utils.uuid();

    this.#isGlobal = this.#isGlobalOverlay(this._element);

    if (!this.#isGlobal) {
      // 不是全局的加载层则设置好定位
      this.#ensurePositioned(this._element);
    } else {
      this._element = document.body;
    }

    let html = [
      utils.sprintf(
        Constants.HTML.loadding[0],
        CLASS_NAME_LOADING,
        this._config.backgroundClass,
        this.#isGlobal ? this.#zIndex : "",
      ),
    ];

    // 1.先检查是否设置了自定义内容,后面再动态设置
    if (!this._config.custom) {
      // 假如box头部
      html.push(utils.sprintf(Constants.HTML.spinnerBox[0], this._config.boxClass));

      const spinner = utils.getMapValue(Map.spinner, this._config.spinner);
      const color = utils.getMapValue(Map.spinnerColor, this._config.spinnerColor);
      let size = "";

      if (!d.isPlainObject(this._config.size)) {
        size = this._config.size === "sm" ? `${spinner}-sm` : "";
      }
      html.push(utils.sprintf(Constants.HTML.spinner, spinner, color, size));

      // 后面的文本消息
      if (d.isFullString(this._config.message)) {
        html.push(
          utils.sprintf(
            Constants.HTML.spinnerMessage,
            this._config.messageColor,
            this._config.message,
          ),
        );
      }

      html.push(Constants.HTML.spinnerBox[1]);
    }

    html = html.join(" ");
    this.#loadingEl = d(html).get(0);

    // 动态设置大小
    if (d.isPlainObject(this._config.size)) {
      d(this.#loadingEl.firstElementChild.firstElementChild).css(this._config.size);
    }

    d(this.#loadingEl).css({
      background: this._config.background,
    });

    utils.registerEvent(this._element, this._config.events);

    if (this._config.custom) {
      this._element.insertAdjacentElement("beforeend", d(this._config.custom).get(0));
    }

    await this.show();
  }

  async show() {
    console.log(this._element);

    console.log(this.constructor.eventName(EVENT_SHOW));

    d(this._element).trigger(`${this.constructor.eventName(EVENT_SHOW)}`);

    // utils.triggerEvent(this._element, this.constructor.eventName(EVENT_SHOW))
    this._element.insertAdjacentElement("beforeend", this.#loadingEl);
    if (this._config.fade.enabled) {
      await utils.fadeIn(this.#loadingEl, this._config.fade.in);
    }

    // utils.triggerEvent(this._element, EVENT_SHOWN)
  }

  async hide() {}
}

// //默认是风格1的加载
// load(1)
// // 可以指定要挂载的容器
// load(1, ".foo")
// // 也可以不用写,默认就挂载到body，还可以传递选项覆盖
// load(1, {})

// // 指定了容器后第三个参数就是传递选项
// load(1, "body", {})

function load(style, element = "body", options = {}) {
  let el = element;
  if (d.isPlainObject(element)) {
    el = "body";
    options = element;
  }

  options = d.extend(true, {}, Map.preset[style] || {}, options);

  return new Loading(el, options);
}

export default load;
