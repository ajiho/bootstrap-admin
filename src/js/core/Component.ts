import { render as litRender, type TemplateResult } from "lit-html";

/**
 * 组件基础类
 */
export abstract class Component<TState extends object = Record<string, unknown>> {
  protected container: HTMLElement;

  protected state: TState;

  private mounted = false;

  private destroyed = false;

  constructor(container: HTMLElement, initialState: TState) {
    this.container = container;
    this.state = initialState;
  }

  /**
   * 定义组件模板
   */
  protected abstract template(): TemplateResult;

  /**
   * 挂载组件
   */
  mount(): this {
    if (this.destroyed) {
      throw new Error("Cannot mount a destroyed component.");
    }

    if (this.mounted) {
      return this;
    }

    this.mounted = true;
    this.render();

    return this;
  }

  /**
   * 渲染组件
   */
  protected render(): void {
    if (this.destroyed || !this.mounted) {
      return;
    }

    litRender(this.template(), this.container);
  }

  /**
   * 更新组件状态
   */
  protected setState(patch: Partial<TState>): void {
    if (this.destroyed) {
      return;
    }

    Object.assign(this.state, patch);

    if (this.mounted) {
      this.render();
    }
  }

  /**
   * 获取组件状态快照
   */
  getState(): Readonly<TState> {
    return { ...this.state };
  }

  /**
   * 组件是否已挂载
   */
  get isMounted(): boolean {
    return this.mounted;
  }

  /**
   * 销毁组件
   */
  destroy(): void {
    if (this.destroyed) {
      return;
    }

    // 清理 lit-html 管理的 DOM 和事件绑定
    litRender(undefined, this.container);

    this.mounted = false;
    this.destroyed = true;
  }
}
