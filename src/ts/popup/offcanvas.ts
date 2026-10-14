import d from "domtify";

import Constants from "../constants";
import utils from "../utils";
import { getIdByInstance, nextZIndex, pushStack, setZIndex, state } from "./state";
import "domtify/utilities/extend";
import "domtify/utilities/isPlainObject";

const DEFAULT = {
  header: "", //false:表示禁用
  title: "",
  body: "",
  // false 或者字符串 sm、md、lg、xl、xxl
  responsive: false,
  // 方位 字符串 start、end、top、bottom
  placement: "start",
  options: {
    // ref:https://getbootstrap.com/docs/5.3/components/offcanvas/#options
    backdrop: true,
    keyboard: true,
    scroll: false,
  },
  // ref:https://getbootstrap.com/docs/5.3/components/offcanvas/#events
  events: {
    "shown.bs.offcanvas": null,
    "hidden.bs.offcanvas": null,
  },
};

const Map = {
  responsive: {
    sm: "offcanvas-sm",
    md: "offcanvas-md",
    lg: "offcanvas-lg",
    xl: "offcanvas-xl",
    xxl: "offcanvas-xxl",
    default: "offcanvas",
  },
  placement: {
    start: "offcanvas-start",
    end: "offcanvas-end",
    top: "offcanvas-top",
    bottom: "offcanvas-bottom",
  },
};

class Offcanvas {
  #element;
  #options;
  #zIndex;
  #offcanvasInstance;
  constructor(options) {
    this.#options = d.extend({}, DEFAULT, options);

    this.#zIndex = nextZIndex(10);

    this.#renderHTML();
  }

  #renderHTML() {
    // 生成一个id
    const id = utils.uuid();

    const type =
      this.#options.responsive !== false
        ? Map.responsive[this.#options.responsive] || Map.responsive.default
        : Map.responsive.default;
    const placement = Map.placement[this.#options.placement] || "";
    let html = [
      utils.sprintf(Constants.HTML.offcanvas[0], type, placement, id, setZIndex(this.#zIndex + 5)),
    ];

    // 头部
    if (this.#options.header !== false) {
      html.push(Constants.HTML.offcanvasHeader[0]);

      if (d.isFullString(this.#options.header)) {
        html.push(this.#options.header);
      } else {
        // 头部的内容
        html.push(utils.sprintf(Constants.HTML.offcanvasTitle, this.#options.title));
        html.push(Constants.HTML.offcanvasBtnClose);
      }

      html.push(Constants.HTML.offcanvasHeader[1]);
    }

    // body
    html.push(Constants.HTML.offcanvasBody[0]);
    html.push(this.#options.body);
    html.push(Constants.HTML.offcanvasBody[1]);

    html.push(Constants.HTML.offcanvas[1]);
    html = html.join(" ");

    document.body.insertAdjacentHTML("beforeend", html);

    this.#element = document.querySelector(`[data-id="${id}"]`);

    this.#element.addEventListener("shown.bs.offcanvas", () => {
      this.#element.focus();
    });

    this.#element.addEventListener("hidden.bs.offcanvas", () => {
      this.#offcanvasInstance.dispose();
      document.body.removeChild(this.#element);

      utils.focusTopPopup();
    });

    this.#offcanvasInstance = new bootstrap.Offcanvas(this.#element, this.#options.options);

    pushStack(id, "offcanvas", this.#element, this, this.#offcanvasInstance);

    requestAnimationFrame(() => {
      this.#offcanvasInstance.show();

      if (this.#options.options.backdrop !== false) {
        const backdropEl = this.#element.nextElementSibling;
        backdropEl.style.setProperty("z-index", this.#zIndex);
      }
    });
  }
}

function offcanvas(title, body, options) {
  let opts;

  if (d.isPlainObject(title)) {
    opts = title;
  } else {
    opts = {
      title,
      body,
      ...options,
    };
  }

  return getIdByInstance(new Offcanvas(opts));
}

export default offcanvas;
