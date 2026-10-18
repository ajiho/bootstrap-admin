import datasetConfig from "dataset-config";
import $ from "jquery";

const SELECTOR_DATA_TOGGLE = '[data-lts-toggle="initializer"]';

/**
 * 默认配置
 */
const DEFAULT = {
  // 提示工具允许的属性和标签设置
  // See: https://getbootstrap.com/docs/5.3/getting-started/javascript/#sanitizer
  sanitizerAllowList: {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    button: ["onclick"],
  },
  // 提示和气泡工具是否点击下一次自动关闭
  nextClickDismiss: true,
};

/**
 * 配置类型
 */
type InitializerConfig = {
  sanitizerAllowList: Record<string, (string | RegExp)[]>;
  nextClickDismiss: boolean;
};

/**
 * Initializer
 */
class Initializer {
  #config: InitializerConfig;
  #element: HTMLElement;

  constructor(element: HTMLElement, config: InitializerConfig) {
    this.#config = config;
    this.#element = element;

    this.#init();
  }

  // Private
  #init(): void {
    console.log("Initializerxxxxxxxddddddddddddd");

    // window.popup = "a";

    // Object.defineProperty(window, "popup", {
    //   configurable: true,
    //   enumerable: false,
    //   get() {
    //     console.log("rrr");

    //     return "dsadsa";

    //     // return getRootWindow().adminlts?.popup;
    //   },
    // });
  }
}

/**
 * Data API
 * ====================================================
 */
$(() => {
  console.log("DOM Ready");
  $(document).each((_i, el) => {
    const config = datasetConfig(el, {
      prefix: "lts",
    });

    new Initializer(el, {
      ...DEFAULT,
      ...config,
    });
  });
});

export default Initializer;
