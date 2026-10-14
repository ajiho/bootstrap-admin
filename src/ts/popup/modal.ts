import d from "domtify";

import Constants from "../constants";
import utils from "../utils";
import { cleanStack, getIdByInstance, nextZIndex, pushStack, setZIndex } from "./state";
import "domtify/utilities/extend";
import "domtify/utilities/isFunction";
import "domtify/utilities/isFullString";

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
  modalClass: "fade", // 应用于“.modal”的附加 CSS 类，例如 "fade" 表示淡入淡出效果
  modalDialogClass: "", // 应用于“.modal-dialog”的附加 CSS 类，例如 "modal-lg" 或 "modal-sm" 用于调整大小
  headerClass: "", // 应用于“.modal-header”的附加 CSS 类
  bodyClass: "", // 应用于“.modal-body”的附加 CSS 类
  footerClass: "", // 应用于“.modal-footer”的附加 CSS 类
  options: {
    // Bootstrap 模态框的配置项，参考：https://getbootstrap.com/docs/4.0/components/modal/#options
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
    "shown.bs.modal": null,
    "hidden.bs.modal": null,
  },
};

const CLASS_NAME_MODAL_FOOTER = "modal-footer";

class Modal {
  #options;
  #element;
  #instance;
  #btnEl;
  #zIndex;
  constructor(options) {
    this.#options = d.extend({}, DEFAULT, options);
    this.#zIndex = nextZIndex(10);
    this.#renderHTML();
    this.#bindEvents();
  }

  #bindEvents() {
    d(this.#element).on("click", `.${CLASS_NAME_MODAL_FOOTER} .btn`, async (event) => {
      const btnEl = event.currentTarget;
      // 如果被禁用了直接返回
      if (btnEl.hasAttribute("disabled")) return;

      this.#btnEl = btnEl;

      const index = Number(btnEl.dataset.index);
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
    const id = utils.uuid();
    let html = [
      utils.sprintf(
        Constants.HTML.modal[0],
        this.#options.modalClass,
        id,
        id,
        setZIndex(this.#zIndex + 5),
      ),
    ];

    html.push(utils.sprintf(Constants.HTML.modalDialog[0], this.#options.modalDialogClass));
    html.push(Constants.HTML.modalContent[0]);

    if (this.#options.header !== false) {
      // header
      html.push(utils.sprintf(Constants.HTML.modalHeader[0], this.#options.headerClass));

      if (d.isFullString(this.#options.header)) {
        html.push(this.#options.header);
      } else {
        // 头部的内容
        html.push(utils.sprintf(Constants.HTML.modalTitle, this.#options.title));
        html.push(Constants.HTML.modalBtnClose);
      }

      html.push(Constants.HTML.modalHeader[1]);
    }

    // body
    html.push(utils.sprintf(Constants.HTML.modalBody, this.#options.bodyClass, this.#options.body));

    // footer
    if (this.#options.footer !== false) {
      html.push(utils.sprintf(Constants.HTML.modalFooter[0], this.#options.footerClass));

      if (d.isFullString(this.#options.footer)) {
        html.push(this.#options.footer);
      } else if (this.#options.btn.length) {
        // 合并按钮
        for (const [index, item] of this.#options.btn.entries()) {
          const item2 = d.isString(item) ? { text: item } : item;
          const btn = { ...BTN_DEFAULT, ...item2 };

          const type = Constants.Map.btnType[btn.type] || "";
          const size = Constants.Map.btnSize[btn.size] || "";

          html.push(utils.sprintf(Constants.HTML.modalFooterBtn, index, type, size, btn.text));
        }
      }
      html.push(Constants.HTML.modalFooter[1]);
    }

    html.push(Constants.HTML.modalContent[1]);
    html.push(Constants.HTML.modalDialog[1]);

    html.push(Constants.HTML.modal[1]);

    html = html.join(" ");

    document.body.insertAdjacentHTML("beforeend", html);
    this.#element = document.querySelector(`[data-id="${id}"]`);

    this.#element.addEventListener("hidden.bs.modal", () => {
      document.body.removeChild(this.#element);
      cleanStack(id);
      utils.focusTopPopup();
    });

    // see：https://github.com/twbs/bootstrap/issues/41005
    this.#element.addEventListener("hide.bs.modal", (event) => {
      event.target.inert = true;
    });

    this.#element.addEventListener("show.bs.modal", (event) => {
      event.target.inert = false;
    });

    this.#element.addEventListener("shown.bs.modal", (event) => {
      const modal = event.target;
      modal.focus();
    });

    utils.registerEvent(this.#element, this.#options.events);

    this.#instance = new bootstrap.Modal(this.#element, this.#options.options);

    // 保存到堆栈中
    pushStack(id, "modal", this.#element, this, this.#instance);

    this.#instance.show();

    const backdropEl = this.#element.nextElementSibling;

    backdropEl.style.setProperty("z-index", this.#zIndex);
  }
}

function modal(options) {
  return getIdByInstance(new Modal(options));
}

export default modal;
