import datasetConfig from "dataset-config";
import d from "domtify";

const DATA_KEY = "lts.initializer";
const EVENT_KEY = `.${DATA_KEY}`;
const SELECTOR_DATA_TOGGLE = '[data-lts-toggle="initializer"]';

//类名
const ClassName = {
  pe: "pe-none",
};

const DEFAULT = {
  //提示工具允许的属性和标签设置 see:https://getbootstrap.com/docs/5.3/getting-started/javascript/#sanitizer
  sanitizerAllowList: {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    button: ["onclick"],
  },
  //提示和气泡工具是否点击下一次自动关闭
  nextClickDismiss: true,
};

class Initializer {
  #config;
  #element;

  constructor(element, config) {
    this.#config = config;
    this.#element = element;
  }

  // Private
  #init() {
    console.log("Initializer");
  }
}

/**
 * Data API
 * ====================================================
 */
d(() => {
  d(SELECTOR_DATA_TOGGLE).each((i, el) => {
    new Initializer(
      el,
      datasetConfig(el, {
        prefix: "lts",
      }),
    );
  });
});

export default Initializer;
