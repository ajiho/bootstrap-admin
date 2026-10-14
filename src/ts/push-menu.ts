import datasetConfig from "dataset-config";
import d from "domtify";

import Constants from "./constants";

const DATA_KEY = "lte.push-menu";
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_OPEN = `open${EVENT_KEY}`;
const EVENT_COLLAPSE = `collapse${EVENT_KEY}`;

const CLASS_NAME_SIDEBAR_TOGGLE = "toggled";

const SELECTOR_DATA_TOGGLE = '[data-lts-toggle="pushmenu"]';

const SELECTOR_APP_WRAPPER = ".lts-wrapper";

const DEFAULT = {
  //过渡的动画时间
  animationSpeed: 300,
};

class PushMenu {
  #element;
  #config;

  #open;

  constructor(element, config) {
    this.#element = element;
    this.#config = { ...DEFAULT, ...(config ?? {}) };

    this.#init();
  }

  #init() {
    console.log(this.#element);
    d(this.#element).on("click", (event) => {
      this.#open = d(SELECTOR_APP_WRAPPER).hasClass(CLASS_NAME_SIDEBAR_TOGGLE);

      this.toggle();
    });
  }

  expand() {}

  collapse() {}

  toggle() {
    if (this.#open) {
      console.log("w");

      d(SELECTOR_APP_WRAPPER).removeClass(CLASS_NAME_SIDEBAR_TOGGLE);
    } else {
      console.log("r");

      d(SELECTOR_APP_WRAPPER).addClass(CLASS_NAME_SIDEBAR_TOGGLE);
    }
  }

  #addOverlay() {}
}

/**
 * Data API
 * ====================================================
 */
d(() => {
  d(SELECTOR_DATA_TOGGLE).each((i, el) => {
    new PushMenu(
      el,
      datasetConfig(el, {
        prefix: Constants.PREFIX,
      }),
    );
  });
});

export default PushMenu;
