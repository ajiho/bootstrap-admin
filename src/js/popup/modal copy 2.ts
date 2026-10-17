import { html } from "lit-html";

import { Component } from "../core/Component.js";

/**
 * Modal 配置
 */
export interface ModalOptions {
  title?: string;
  content?: string;
  size?: ModalSize;
}

/**
 * Modal 尺寸
 */
export type ModalSize = "sm" | "md" | "lg" | "xl";

/**
 * Modal 状态
 */
interface ModalState {
  open: boolean;
  title: string;
  content: string;
  size: ModalSize;
}

/**
 * Modal 插件
 */
export class Modal extends Component<ModalState> {
  constructor(container: HTMLElement, options: ModalOptions = {}) {
    super(container, {
      open: false,
      title: options.title ?? "",
      content: options.content ?? "",
      size: options.size ?? "md",
    });
  }

  /**
   * 打开弹窗
   */
  show(): this {
    this.setState({ open: true });
    return this;
  }

  /**
   * 关闭弹窗
   */
  hide(): this {
    this.setState({ open: false });
    return this;
  }

  /**
   * 切换弹窗
   */
  toggle(): this {
    this.setState({ open: !this.state.open });
    return this;
  }

  /**
   * 更新标题
   */
  setTitle(title: string): this {
    this.setState({ title });
    return this;
  }

  /**
   * 更新内容
   */
  setContent(content: string): this {
    this.setState({ content });
    return this;
  }

  /**
   * 渲染模板
   */
  protected template() {
    const { open, title, content, size } = this.state;

    return html`
      <div
        class="modal ${open ? "show" : ""}"
        role="dialog"
        aria-modal="${open ? "true" : "false"}"
        aria-hidden="${!open}"
        data-size="${size}"
        ?hidden="${!open}"
      >
        <div class="modal-dialog modal-${size}">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${title}</h5>
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                @click=${this.hide}
              ></button>
            </div>

            <div class="modal-body">${content}</div>
          </div>
        </div>
      </div>
    `;
  }
}
