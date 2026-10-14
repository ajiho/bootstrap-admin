import datasetConfig from "dataset-config";
import d from "domtify";

import Constants from "./constants";

import "domtify/utilities/isPlainObject";
import "domtify/methods/off";
import "domtify/methods/data";
import "domtify/methods/removeData";

class BaseComponent {
  constructor(element, config) {
    element = d(element).get(0);

    if (!element) {
      return;
    }

    this._element = element;
    this._config = this._getConfig(config);

    d(this._element).data(this.constructor.DATA_KEY, this);
  }

  // Public
  dispose() {
    d(this._element).removeData(this.constructor.DATA_KEY);

    d(this._element).off(this.constructor.EVENT_KEY);

    for (const propertyName of Object.getOwnPropertyNames(this)) {
      this[propertyName] = null;
    }
  }

  _getConfig(config) {
    return d.extend(
      true,
      {},
      this.constructor.Default,
      datasetConfig(this._element, {
        prefix: `${Constants.PREFIX}`,
      }),
      config,
    );
  }

  // Static
  static getInstance(element) {
    return d(element).data(BaseComponent.DATA_KEY);
  }

  static getOrCreateInstance(element, config = {}) {
    return (
      BaseComponent.getInstance(element) ||
      new BaseComponent(element, d.isPlainObject(config) ? config : null)
    );
  }

  static get Default() {
    return {};
  }

  static get VERSION() {
    return Constants.VERSION;
  }

  static get DATA_KEY() {
    return `${Constants.PREFIX}.${BaseComponent.NAME}`;
  }

  static get EVENT_KEY() {
    return `.${BaseComponent.DATA_KEY}`;
  }

  static eventName(name) {
    return `${name}${BaseComponent.EVENT_KEY}`;
  }
}

export default BaseComponent;
