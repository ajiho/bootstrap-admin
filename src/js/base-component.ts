type ComponentConstructor<T extends BaseComponent, TConfig = unknown> = {
  new (element: Element, config?: TConfig): T;
  getInstance(target: Element | string | null | undefined): T | null;
};

export default class BaseComponent {
  /**
   * 各组件类独立的实例存储
   */
  private static readonly instanceMap = new Map<Function, WeakMap<Element, BaseComponent>>();

  /**
   * 当前组件关联的 DOM 元素
   */
  protected element: Element;

  constructor(element: Element) {
    if (!(element instanceof Element)) {
      throw new TypeError(`${this.constructor.name}: expected a DOM Element.`);
    }

    const store = BaseComponent.getStore(this.constructor);

    if (store.has(element)) {
      throw new Error(`${this.constructor.name} has already been initialized.`);
    }

    this.element = element;
    store.set(element, this);
  }

  /**
   * 获取已存在的组件实例
   */
  static getInstance<T extends BaseComponent>(
    this: ComponentConstructor<T>,
    target: Element | string | null | undefined,
  ): T | null {
    const element = BaseComponent.resolveElement(target);

    if (!element) {
      return null;
    }

    return (BaseComponent.getStore(this).get(element) as T | undefined) ?? null;
  }

  /**
   * 获取已有实例；不存在时创建新实例
   */
  static getOrCreateInstance<T extends BaseComponent, TConfig = unknown>(
    this: ComponentConstructor<T, TConfig>,
    target: Element | string | null | undefined,
    config?: TConfig,
  ): T | null {
    const element = BaseComponent.resolveElement(target);

    if (!element) {
      return null;
    }

    return this.getInstance(element) ?? new this(element, config);
  }

  /**
   * 销毁组件并移除实例引用
   */
  dispose(): void {
    BaseComponent.getStore(this.constructor).delete(this.element);
  }

  /**
   * 获取指定组件类的实例存储
   */
  private static getStore(componentClass: Function): WeakMap<Element, BaseComponent> {
    let store = BaseComponent.instanceMap.get(componentClass);

    if (!store) {
      store = new WeakMap<Element, BaseComponent>();
      BaseComponent.instanceMap.set(componentClass, store);
    }

    return store;
  }

  /**
   * 将 DOM 元素或 CSS 选择器解析为 DOM 元素
   */
  private static resolveElement(target: Element | string | null | undefined): Element | null {
    if (!target) {
      return null;
    }

    if (target instanceof Element) {
      return target;
    }

    return document.querySelector(target);
  }
}
