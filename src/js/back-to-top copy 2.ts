import datasetConfig from "dataset-config";
import $ from "jquery";
import * as v from "valibot";

import BaseComponent from "./base-component";
import { PREFIX } from "./constants";
import { hasMultipleToggle } from "./utils";

const DATA_TOGGLE_NAME = "backtotop";
const SELECTOR_DATA_TOGGLE = `[data-${PREFIX}-toggle~="${DATA_TOGGLE_NAME}"]`;

/**
 * 配置 Schema
 */
const ConfigSchema = v.object({
  scrollThreshold: v.pipe(v.number(), v.minValue(0, "scrollThreshold 不能小于 0")),
});

/**
 * 配置类型：从 Schema 自动推导
 */
type BackToTopConfig = Partial<v.InferInput<typeof ConfigSchema>>;

/**
 * 默认配置
 */
const DEFAULT: Required<BackToTopConfig> = {
  scrollThreshold: 300,
};

class BackToTop extends BaseComponent {
  #config: Required<BackToTopConfig>;

  constructor(element: Element, config: BackToTopConfig = {}) {
    super(element);

    //  合并配置
    this.#config = {
      ...DEFAULT,
      ...config,
    };

    //  验证配置
    this.#config = v.parse(ConfigSchema, this.#config);
  }
}

/**
 * Data API
 */
$(() => {
  for (const el of document.querySelectorAll<HTMLElement>(SELECTOR_DATA_TOGGLE)) {
    BackToTop.getOrCreateInstance(
      el,
      datasetConfig(el, {
        prefix: hasMultipleToggle(el) ? `${PREFIX}-${DATA_TOGGLE_NAME}` : PREFIX,
      }),
    );
  }
});

export default BackToTop;
