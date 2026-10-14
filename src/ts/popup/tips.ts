import d from "domtify";

import utils from "../utils";
import { cleanStack, nextZIndex, state } from "./state";

import "domtify/utilities/isInstanceOf";
import "domtify/methods/css";
import "domtify/methods/wrap";
import "domtify/methods/parent";
import "domtify/methods/get";

const DEFAULT = {
  // 是否允许同时存在多个 tips 层，即不销毁上一个 tips。
  tipsMore: false,
  // 3秒后自动关闭
  time: 3000,
  // 自定义样式
  style: {},
  // tooltips的选项
  options: {
    // 触发方式
    trigger: "manual",
  },

  // ref:https://getbootstrap.com/docs/5.3/components/tooltips/#events
  events: {
    "hide.bs.tooltip": null,
    "show.bs.tooltip": null,
  },
};

class Tooltip {
  #options;
  #element;
  #tooltipInstance;
  #zIndex;
  constructor(element, options) {
    this.#element = d.isString(element) ? document.querySelector(element) : element;

    const id = utils.uuid();

    if (!d.isInstanceOf(this.#element, Element)) {
      throw new TypeError("element must be a valid element");
    }

    this.#options = d.extend(true, {}, DEFAULT, options);
    this.#zIndex = nextZIndex(10);

    // 如果是禁用元素就给它,且触发方式不是编程方式
    if (this.#element.hasAttribute("disabled") && this.#options.options.trigger !== "manual") {
      this.#element = d(this.#element)
        .wrap(`<span class="d-inline-block" tabindex="0" ></span>`)
        .parent()
        .get(0);
    }

    if (!this.#options.tipsMore) {
      const tooltips = document.querySelectorAll('[aria-describedby^="tooltip"]');

      for (const element of tooltips) {
        const tipsIns = bootstrap.Tooltip.getInstance(element);
        if (tipsIns) tipsIns.dispose();
      }
    }

    const old = bootstrap.Tooltip.getInstance(this.#element);
    if (old) old.dispose();

    this.#element.addEventListener("hidden.bs.tooltip", () => {
      cleanStack(id);
    });
    this.#element.addEventListener("inserted.bs.tooltip", (event) => {
      // 通过 aria-describedby属性拿到id,再通过id拿到tooltip的el,再设置索引
      const id = event.target.getAttribute("aria-describedby");

      const tooltipEl = document.getElementById(id);

      tooltipEl.style.setProperty("z-index", this.#zIndex);

      d(tooltipEl).css(this.#options.style);
    });

    utils.registerEvent(this.#element, this.#options.events);

    // 获取或创建实例
    this.#tooltipInstance = bootstrap.Tooltip.getOrCreateInstance(
      this.#element,
      this.#options.options,
    );

    // 保存到堆栈中
    state.stack.push({
      id,
      type: "tips",
      el: this.#element,
      instance: this,
      originalInstance: this.#tooltipInstance,
    });

    this.#tooltipInstance.show();

    // 如果设置了自动关闭
    if (this.#options.time) {
      setTimeout(() => this.#tooltipInstance.hide(), this.#options.time);
    }
  }
}

function tips(content, element, options) {
  const tooltip = new Tooltip(
    element,
    d.extend(
      true,
      {
        options: {
          title: content,
        },
      },
      options,
    ),
  );

  return state.stack.find((item) => item.instance === tooltip).id;
}

export default tips;
