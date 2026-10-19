import datasetConfig from "dataset-config";
import $ from "jquery";

import BaseComponent from "./base-component";
import { PREFIX } from "./constants";
import { hasMultipleToggle } from "./utils";

const DATA_TOGGLE_NAME = "backtotop";
const SELECTOR_DATA_TOGGLE = `[data-${PREFIX}-toggle~="${DATA_TOGGLE_NAME}"]`;

interface BackToTopConfig {
  distanceFromTop?: number;
}

class BackToTop extends BaseComponent {
  constructor(element: Element, config: BackToTopConfig = {}) {
    super(element);
    console.log(config);
    // 参数合并

    // 参数验证
  }
}

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
