import d from "domtify";

import Constants from "../constants";
import utils from "../utils";
import { getIdByInstance, nextZIndex, pushStack } from "./state";

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
  // 容器 element /selector
  container: "body",
  // 情景模式  可用值:primary success info  warning danger light dark
  type: "dark",
  // 旋转器 grow:实心圈  border:空心圈
  spinner: "border",
  // 尺寸 可选值 'sm' 或者一个对象设置style
  size: "",
  // 文本内容
  text: "",
  // 自定义内容
  custom: "",
  // 最大等待时长
  time: Infinity,
  // false:不要动画，数字:启动动画并表示duration 对象：{in: 300,out:300}
  fade: false,
  // 事件 eg "show.lts.loading"
  events: {},
};

const DATA_KEY = "lts.loading";
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;

const CLASS_NAME_LOADING = `${Constants.PREFIX}-loading`;

const Map = {
  spinner: {
    border: "spinner-border",
    grow: "spinner-grow",
  },

  typeIndex: {
    0: "primary",
    1: "success",
    2: "info",
    3: "warning",
    4: "danger",
    5: "light",
    6: "dark",
  },

  type: {
    primary: "text-primary",
    secondary: "text-secondary",
    success: "text-success",
    danger: "text-danger",
    warning: "text-warning",
    info: "text-info",
    dark: "text-dark",
    light: "text-light",
  },
};

class Loading {
  #options;
  #container;
  #element;
  #zIndex;

  // 是否是页面级的容器
  #isRootContainer;
  #isSizeObject;
  #isHiding;
  constructor(options) {
    this.#options = d.extend({}, DEFAULT, options);
    this.#options.fade = this.#normalizeFade(this.#options.fade);
    this.#zIndex = nextZIndex();

    this.#renderHTML();
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

  #isRootElement(el) {
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

    // 先处理一下容器
    this.#container = this.#options.container;
    if (d.isFullString(this.#container)) {
      this.#container = document.querySelector(this.#container);
    }

    if (!d.isInstanceOf(this.#container, Element)) {
      throw new TypeError("Container must be a valid element");
    }

    this.#isRootContainer = this.#isRootElement(this.#container);

    if (!this.#isRootContainer) {
      // 不是body或者html要处理定位
      this.#ensurePositioned(this.#container);
    } else {
      this.#container = document.body;
    }

    let html = [
      utils.sprintf(
        Constants.HTML.loadding[0],
        CLASS_NAME_LOADING,
        this.#options.backgroundClass,
        this.#isRootContainer ? this.#zIndex : "",
      ),
    ];

    this.#isSizeObject = d.isPlainObject(this.#options.size);

    // 是否设置了自定义内容

    if (!this.#options.custom) {
      const spinner = Map.spinner[this.#options.spinner] || "spinner-border";
      const color = Map.type[this.#options.type] || "text-primary";
      let size = "";

      if (!this.#isSizeObject) {
        size = this.#options.size === "sm" ? `${spinner}-sm` : "";
      }
      html.push(utils.sprintf(Constants.HTML.loadSpinner, spinner, color, size));
      // 文本
      if (d.isFullString(this.#options.text)) {
        html.push(utils.sprintf(Constants.HTML.loadText, this.#options.text));
      }
    }

    html.push(Constants.HTML.loadding[1]);
    html = html.join(" ");

    this.#element = d(html).get(0);

    if (this.#isSizeObject) {
      d(this.#element.firstElementChild).css(this.#options.size);
    }

    // 在这里可以尝试动态设置它的样式
    this.#element.style.setProperty("background", this.#options.background);
    utils.registerEvent(this.#element, this.#options.events);
    if (this.#options.custom) {
      this.#element.insertAdjacentElement("beforeend", d(this.#options.custom).get(0));
    }

    // 保存到堆栈中
    pushStack(id, "loading", this.#element, this, this);

    // 已经存在的就直接删除
    if (d(`.${CLASS_NAME_LOADING}`, this.#container).length) {
      console.log("ewq");

      await this.hide();
    }

    await this.show();
  }

  async show() {
    utils.triggerEvent(this.#element, EVENT_SHOW);
    this.#container.insertAdjacentElement("beforeend", this.#element);

    if (this.#options.fade.enabled) {
      await utils.fadeIn(this.#element, this.#options.fade.in);
    }

    utils.triggerEvent(this.#element, EVENT_SHOWN);
  }

  async hide() {
    // 如果元素不存在，就直接返回
    if (!this.#container.contains(this.#element)) return;

    // 如果正在淡出中，就不重复执行
    if (this.#isHiding) return;
    this.#isHiding = true;

    utils.triggerEvent(this.#element, EVENT_HIDE);

    try {
      if (this.#options.fade.enabled) {
        await utils.fadeOut(this.#element, this.#options.fade.out);
      }
      this.#element.remove();
      utils.triggerEvent(this.#element, EVENT_HIDDEN);
    } finally {
      this.#isHiding = false; // 恢复状态
    }
  }
}

function load(type, options) {
  let opts;

  if (d.isPlainObject(type)) {
    opts = type;
  } else {
    const color = Map.typeIndex[type] || "primary";

    opts = {
      type: color,
      ...options,
    };
  }

  return getIdByInstance(new Loading(opts));
}

export default load;
