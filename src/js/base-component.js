import { getStore } from "./utils";
import { resolveElement } from "./utils";

export default class BaseComponent {
  constructor(element) {
    // PushMenu has already been initialized.
    // Use PushMenu.getOrCreateInstance() instead.
    if (!(element instanceof Element)) {
      throw new TypeError(`${this.constructor.name}: expected a DOM Element.`);
    }

    const store = getStore(this.constructor);

    // console.log(store)

    if (store.has(element)) {
      throw new Error(`${this.constructor.name} has already been initialized.`);
    }
    store.set(element, this);
  }

  static getInstance(target) {
    const element = resolveElement(target);

    return element ? getStore(this).get(element) : null;
  }

  static getOrCreateInstance(target, config) {
    const element = resolveElement(target);

    return this.getInstance(element) ?? new this(element, config);
  }

  dispose() {
    getStore(this.constructor).delete(this._element);
  }
}
