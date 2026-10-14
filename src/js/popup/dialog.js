// import { Dialog as BSDialog } from "bootstrap/dist/js/bootstrap.js"
import * as bootstrap from "bootstrap/dist/js/bootstrap.js";

import Constants from "../constants/index.js";
import { uuid, sprintf, registerEvent } from "../utils/index";
import { isNonBlankString, isString } from "../utils/is.ts";
import { nextZIndex, cleanStack, pushStack, getIdByInstance, setZIndex } from "./state";

const SELECTOR_APP_WRAPPER = `.${Constants.PREFIX}-wrapper`;

// 按钮默认配置
const BTN_DEFAULT = {
  text: "按钮",
  // 类型
  type: "light",
  // 尺寸
  size: "",
};

const DEFAULT = {
  header: "", // 对话框头部的 HTML false:表示禁用头部,优先级比title高
  title: "", // 对话框标题的 HTML
  body: "", // 对话框内容的 HTML
  footer: "", // 对话框底部的 HTML false:表示禁用底部
  dialogClass: "", // 应用于".dialog"的附加 CSS 类
  headerClass: "", // 应用于".dialog-header"的附加 CSS 类
  bodyClass: "", // 应用于".dialog-body"的附加 CSS 类
  footerClass: "", // 应用于".dialog-footer"的附加 CSS 类
  options: {
    // Bootstrap 模态框的配置项，参考：https://v6-dev--twbs-bootstrap.netlify.app/docs/6.0/components/dialog/#options
    backdrop: "static", // 禁止点击背景关闭对话框
  },
  // 底部按钮是否自动加载
  autoLoading: true,
  btn: ["确定"],

  // 或者这样用,通过对象配置,单个的会覆盖外部的总体大小的设置
  // btn: [{},{}],
  // 按钮回调
  // btn1: function () {},
  // 事件
  events: {
    // 支持数组
    "shown.bs.dialog": null,
    "hidden.bs.dialog": null,
  },
};

const CLASS_NAME_MODAL_FOOTER = "modal-footer";

class Dialog {
  #options;
  #element;
  #instance;
  #btnEl;
  #zIndex;
  constructor(options) {
    this.#options = $.extend({}, DEFAULT, options);
    this.#zIndex = nextZIndex(10);
    this.#renderHTML();
    // this.#bindEvents()
  }

  #bindEvents() {
    d(this.#element).on("click", `.${CLASS_NAME_MODAL_FOOTER} .btn`, async (event) => {
      let btnEl = event.currentTarget;
      // 如果被禁用了直接返回
      if (btnEl.hasAttribute("disabled")) return;

      this.#btnEl = btnEl;

      let index = Number(btnEl.dataset.index);
      const inOptsBtnKey = `btn${index + 1}`;
      const handler = this.#options[inOptsBtnKey];

      const autoLoading = this.#options.autoLoading !== false; // 默认 true
      let result;
      let isAsync = false;

      try {
        // 执行回调函数
        result = handler?.call(this, this);

        // 是否是 Promise
        if (result instanceof Promise) {
          isAsync = true;

          if (autoLoading) {
            this.setButtonLoading(true);
          }

          // 等待异步任务完成
          result = await result;
        }

        // 如果返回 false → 阻止关闭
        if (result === false) return;

        // 成功执行 → 关闭 modal
        this.#instance.hide();
      } catch (err) {
        // 捕获错误：不关闭弹窗，恢复按钮状态
        console.error("按钮回调发生错误:", err);
      } finally {
        // 只有在 autoLoading 模式下才自动恢复按钮
        if (isAsync && autoLoading) {
          this.setButtonLoading(false);
        }
      }
    });
  }

  setButtonLoading(enable = false) {
    // 如果开启了自动加载该方法无效
    if (!this.#options.autoLoading) return;

    // 先拿到原来的按钮的text内容
    // 用 dataset 存储原始文本
    const loadingClass = "spinner-border spinner-border-sm";
    if (enable) {
      if (this.#btnEl.dataset.loading === "true") return; // 已经是加载中

      this.#btnEl.dataset.loading = "true";
      this.#btnEl.dataset.originalText = this.#btnEl.textContent.trim();

      // 清空原文本
      this.#btnEl.textContent = "";

      // 创建 spinner + 文本
      const spinner = document.createElement("span");
      spinner.className = loadingClass;
      spinner.setAttribute("aria-hidden", "true");

      const text = document.createElement("span");
      text.setAttribute("role", "status");
      text.textContent = this.#btnEl.dataset.originalText;

      this.#btnEl.appendChild(spinner);
      this.#btnEl.appendChild(text);
      this.#btnEl.disabled = true;
    } else {
      if (this.#btnEl.dataset.loading !== "true") return; // 不在加载中

      this.#btnEl.dataset.loading = "false";
      this.#btnEl.disabled = false;
      this.#btnEl.textContent = this.#btnEl.dataset.originalText;
    }
  }

  #renderHTML() {
    // 生成一个id

    const id = crypto.randomUUID();

    let html = [
      sprintf(Constants.HTML.dialog[0], this.#options.dialogClass, id, setZIndex(this.#zIndex + 5)),
    ];

    // header
    if (this.#options.header !== false) {
      html.push(sprintf(Constants.HTML.dialogHeader[0], this.#options.headerClass));

      if (isNonBlankString(this.#options.header)) {
        html.push(this.#options.header);
      } else {
        // 头部的内容
        html.push(sprintf(Constants.HTML.dialogTitle, this.#options.title));
        html.push(Constants.HTML.dialogBtnClose);
      }

      html.push(Constants.HTML.dialogHeader[1]);
    }

    // body
    html.push(sprintf(Constants.HTML.dialogBody, this.#options.bodyClass, this.#options.body));

    // footer
    if (this.#options.footer !== false) {
      html.push(sprintf(Constants.HTML.dialogFooter[0], this.#options.footerClass));

      if (isNonBlankString(this.#options.footer)) {
        html.push(this.#options.footer);
      } else if (this.#options.btn.length) {
        // 合并按钮
        for (const [index, item] of this.#options.btn.entries()) {
          let item2 = isString(item) ? { text: item } : item;
          const btn = { ...BTN_DEFAULT, ...item2 };

          const type = Constants.Map.btnType[btn.type] || "";
          const size = Constants.Map.btnSize[btn.size] || "";

          html.push(sprintf(Constants.HTML.dialogFooterBtn, index, type, size, btn.text));
        }
      }
      html.push(Constants.HTML.dialogFooter[1]);
    }

    html.push(Constants.HTML.dialog[1]);

    html = html.join(" ");

    // document
    //   .querySelector(SELECTOR_APP_WRAPPER)
    //   .insertAdjacentHTML("beforeend", html)

    document.body.insertAdjacentHTML("beforeend", html);

    this.#element = document.querySelector(`[data-id="${id}"]`);

    // this.#element.addEventListener("hidden.bs.modal", () => {
    //   document.body.removeChild(this.#element)
    //   cleanStack(id)
    //   focusTopPopup()
    // })

    // // see：https://github.com/twbs/bootstrap/issues/41005
    // this.#element.addEventListener("hide.bs.modal", (event) => {
    //   event.target.inert = true
    // })

    // this.#element.addEventListener("show.bs.modal", (event) => {
    //   event.target.inert = false
    // })

    // this.#element.addEventListener("shown.bs.modal", (event) => {
    //   const modal = event.target
    //   modal.focus()
    // })

    // registerEvent(this.#element, this.#options.events)

    this.#instance = new bootstrap.Dialog(this.#element);

    // // 保存到堆栈中
    // pushStack(id, "modal", this.#element, this, this.#instance)

    this.#instance.show();

    // const backdropEl = this.#element.nextElementSibling

    // // backdropEl.style.setProperty("z-index", this.#zIndex)
  }
}

function dialog(options) {
  const ins = new Dialog(options);

  console.log("ww");

  // return getIdByInstance(ins)
}

export default dialog;
