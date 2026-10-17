import { Modal as BootstrapModal } from "bootstrap";
import { html } from "lit-html";

import { Component } from "../core/Component.js";
import { cleanStack, getIdByComponent, nextZIndex, pushStack, setZIndex } from "./state.js";

interface ModalOptions {
  title?: string;
  content?: string;
  size?: "sm" | "md" | "lg" | "xl";
  backdrop?: boolean | "static";
  keyboard?: boolean;
}

interface ModalState {
  title: string;
  content: string;
  size: "sm" | "md" | "lg" | "xl";
}

export class Modal extends Component<ModalState> {
  #host: HTMLElement;
  #element!: HTMLElement;
  #instance!: BootstrapModal;
  #id: string;
  #zIndex: number;
  #disposed = false;

  constructor(options: ModalOptions = {}) {
    const host = document.createElement("div");

    super(host, {
      title: options.title ?? "",
      content: options.content ?? "",
      size: options.size ?? "md",
    });

    this.#host = host;
    this.#id = crypto.randomUUID();
    this.#zIndex = nextZIndex(10);

    document.body.append(host);

    // 先渲染 DOM，再创建 Bootstrap 实例。
    this.mount();

    const element = host.querySelector<HTMLElement>(".modal");

    if (!element) {
      host.remove();
      throw new Error("Failed to render Modal.");
    }

    this.#element = element;

    this.#instance = new BootstrapModal(element, {
      backdrop: options.backdrop ?? "static",
      keyboard: options.keyboard ?? true,
    });

    // 记录实例关系。
    pushStack(this.#id, "modal", this.#element, this, this.#instance, this.#zIndex);

    // Bootstrap 的 hide() 是异步过渡过程，
    // 因此等到 hidden 事件再清理 DOM。
    this.#element.addEventListener("hidden.bs.modal", this.#handleHidden);

    // 显示前先更新全局层级。
    setZIndex(this.#zIndex + 5);

    this.#instance.show();

    // Bootstrap 创建 Backdrop 后调整其层级。
    const backdrop = this.#element.nextElementSibling;

    if (backdrop instanceof HTMLElement && backdrop.classList.contains("modal-backdrop")) {
      backdrop.style.zIndex = String(this.#zIndex);
    }
  }

  protected template() {
    const { title, content, size } = this.state;

    return html`
      <div
        class="modal fade"
        id=${this.#id}
        data-id=${this.#id}
        tabindex="-1"
        aria-labelledby="${this.#id}-title"
        style="z-index: ${this.#zIndex + 5}"
      >
        <div class="modal-dialog modal-${size}">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${this.#id}-title">${title}</h5>

              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                @click=${() => this.hide()}
              ></button>
            </div>

            <div class="modal-body">${content}</div>
          </div>
        </div>
      </div>
    `;
  }

  show(): this {
    if (!this.#disposed) {
      this.#instance.show();
    }

    return this;
  }

  hide(): this {
    if (!this.#disposed) {
      this.#instance.hide();
    }

    return this;
  }

  setTitle(title: string): this {
    this.setState({ title });
    return this;
  }

  setContent(content: string): this {
    this.setState({ content });
    return this;
  }

  get id(): string {
    return this.#id;
  }

  get bootstrapInstance(): BootstrapModal {
    return this.#instance;
  }

  #handleHidden = (): void => {
    this.destroy();
  };

  override destroy(): void {
    if (this.#disposed) {
      return;
    }

    this.#disposed = true;

    this.#element.removeEventListener("hidden.bs.modal", this.#handleHidden);

    cleanStack(this.#id);

    this.#instance.dispose();

    super.destroy();

    this.#host.remove();
  }
}

/**
 * 保留旧版工厂 API。
 */
export default function modal(options: ModalOptions = {}): string {
  const instance = new Modal(options);

  return getIdByComponent(instance)!;
}
