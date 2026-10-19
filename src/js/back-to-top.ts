import datasetConfig from "dataset-config";
import * as v from "valibot";

import BaseComponent from "./base-component";
import { PREFIX } from "./constants";
import { hasMultipleToggle } from "./utils";

const DATA_TOGGLE_NAME = "backtotop";
const SELECTOR_DATA_TOGGLE = `[data-${PREFIX}-toggle~="${DATA_TOGGLE_NAME}"]`;

const SENTINEL_ID = "lts-back-to-top-sentinel";
const BUTTON_ID = "lts-back-to-top";

const CLASS_NAME_BACK_TO_TOP = "lts-back-to-top";
const CLASS_NAME_SHOW = "show";

const EVENT_KEY = `.${PREFIX}.${DATA_TOGGLE_NAME}`;
const EVENT_SCROLL_BEFORE = `scroll.before${EVENT_KEY}`;
const EVENT_SCROLL_COMPLETE = `scroll.complete${EVENT_KEY}`;

/**
 * 配置 Schema
 */
const ConfigSchema = v.object({
  scrollThreshold: v.pipe(v.number(), v.minValue(0, "scrollThreshold 不能小于 0")),
});

type BackToTopConfig = Partial<v.InferInput<typeof ConfigSchema>>;

const DEFAULT: Required<BackToTopConfig> = {
  scrollThreshold: 300,
};

/**
 * 回到顶部插件
 */
class BackToTop extends BaseComponent {
  #config: v.InferOutput<typeof ConfigSchema>;

  #sentinel!: HTMLElement;
  #button!: HTMLAnchorElement;
  #observer!: IntersectionObserver;

  #handleClick = (event: MouseEvent) => {
    event.preventDefault();

    // this._trigger(EVENT_SCROLL_BEFORE);

    // 已经在顶部时，不会产生新的滚动动画。
    if (window.scrollY <= 0) {
      // this._trigger(EVENT_SCROLL_COMPLETE);
      return;
    }

    // scrollend 用于判断本次平滑滚动何时结束。
    // 监听器只在本次操作期间存在。
    const handleScrollEnd = () => {
      // this._trigger(EVENT_SCROLL_COMPLETE);
    };

    window.addEventListener("scrollend", handleScrollEnd, {
      once: true,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  constructor(element: Element, config: BackToTopConfig = {}) {
    super(element);

    this.#config = v.parse(ConfigSchema, {
      ...DEFAULT,
      ...config,
    });

    this.#init();
  }

  /**
   * 初始化
   */
  #init() {
    this.#createElements();
    this.#setupObserver();
    this.#setupListeners();
  }

  /**
   * 创建并复用全局 DOM 元素
   */
  #createElements() {
    // Sentinel：固定作为 body 的第一个子元素。
    const existingSentinel = document.getElementById(SENTINEL_ID);

    if (existingSentinel instanceof HTMLElement) {
      this.#sentinel = existingSentinel;
    } else {
      this.#sentinel = document.createElement("span");
      this.#sentinel.id = SENTINEL_ID;
      this.#sentinel.setAttribute("aria-hidden", "true");

      Object.assign(this.#sentinel.style, {
        position: "absolute",
        top: "0",
        left: "0",
        width: "1px",
        height: "1px",
        pointerEvents: "none",
        visibility: "hidden",
      });

      document.body.prepend(this.#sentinel);
    }

    // 回到顶部按钮：整个页面只创建一个。
    const existingButton = document.getElementById(BUTTON_ID);

    if (existingButton instanceof HTMLAnchorElement) {
      this.#button = existingButton;
    } else {
      this.#button = document.createElement("a");
      this.#button.id = BUTTON_ID;
      this.#button.className = CLASS_NAME_BACK_TO_TOP;
      this.#button.href = "#";
      this.#button.setAttribute("aria-label", "回到顶部");
      this.#button.setAttribute("aria-hidden", "true");
      this.#button.tabIndex = -1;
      this.#button.hidden = true;

      // 保留原来 Bootstrap Icons 的视觉风格。
      const icon = document.createElement("i");
      icon.className = "bi bi-arrow-up-short";
      icon.setAttribute("aria-hidden", "true");

      this.#button.append(icon);
      document.body.append(this.#button);
    }
  }

  /**
   * 使用 IntersectionObserver 控制按钮显示
   */
  #setupObserver() {
    this.#observer = new IntersectionObserver(
      ([entry]) => {
        // Sentinel 仍处于观察区域内：隐藏按钮。
        // Sentinel 离开观察区域：显示按钮。
        const visible = !entry.isIntersecting;

        this.#button.classList.toggle(CLASS_NAME_SHOW, visible);
        this.#button.hidden = !visible;
        this.#button.setAttribute("aria-hidden", String(!visible));
        this.#button.tabIndex = visible ? 0 : -1;
      },
      {
        root: null,
        rootMargin: `${this.#config.scrollThreshold}px 0px 0px 0px`,
        threshold: 0,
      },
    );

    this.#observer.observe(this.#sentinel);
  }

  /**
   * 绑定事件
   */
  #setupListeners() {
    this.#button.addEventListener("click", this.#handleClick);
  }

  /**
   * 触发原生 DOM 自定义事件
   */
  #trigger(eventName: string) {
    this.element.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
      }),
    );
  }

  /**
   * 销毁实例
   */
  dispose() {
    this.#observer.disconnect();
    this.#button.removeEventListener("click", this.#handleClick);

    super.dispose();
  }

  /**
   * jQuery 风格的实例 API 不再需要。
   * 继续通过 BaseComponent 的 getOrCreateInstance 管理实例。
   */
}

/**
 * Data API
 */
function initBackToTop() {
  for (const el of document.querySelectorAll<HTMLElement>(SELECTOR_DATA_TOGGLE)) {
    BackToTop.getOrCreateInstance(
      el,
      datasetConfig(el, {
        prefix: hasMultipleToggle(el) ? `${PREFIX}-${DATA_TOGGLE_NAME}` : PREFIX,
      }),
    );
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBackToTop, {
    once: true,
  });
} else {
  initBackToTop();
}

export default BackToTop;
