const stores = new WeakMap<Function, WeakMap<Element, any>>();

function getStore(clazz: Function) {
  let store = stores.get(clazz);

  if (!store) {
    store = new WeakMap();
    stores.set(clazz, store);
  }

  return store;
}

export default class BaseComponent {
  protected _element: Element;

  constructor(element: Element) {
    this._element = element;

    getStore(this.constructor).set(element, this);
  }

  static getInstance<T>(this: new (...args: any[]) => T, element: Element): T | undefined {
    return getStore(this).get(element);
  }

  static getOrCreateInstance<T>(
    this: new (element: Element, config?: any) => T,
    element: Element,
    config?: any,
  ): T {
    return this.getInstance(element) ?? new this(element, config);
  }

  dispose() {
    getStore(this.constructor).delete(this._element);
  }
}
