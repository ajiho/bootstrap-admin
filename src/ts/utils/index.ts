import d from "domtify";
import "domtify/utilities/isFunction";

import Constants from "../constants";

export default {
  sprintf(_str, ...args) {
    let flag = true;
    let i = 0;

    const str = _str.replace(/%s/g, () => {
      const arg = args[i++];

      if (typeof arg === "undefined") {
        flag = false;
        return "";
      }
      return arg;
    });

    return flag ? str : "";
  },
  uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  },
  registerEvent(element, events) {
    for (const [eventName, handler] of Object.entries(events)) {
      const eventHandlers = Array.isArray(handler) ? handler : [handler];

      for (const eventHandler of eventHandlers) {
        if (d.isFunction(eventHandler)) {
          element.addEventListener(eventName, eventHandler);
        }
      }
    }
  },
  registerInternalEvent(opts, eventName, handler) {
    // 确保 opts.events 存在
    opts.events = opts.events || {};

    const eventVal = opts.events[eventName];

    // 追加到 opts.events 中
    opts.events[eventName] = Array.isArray(eventVal) ? [handler, ...eventVal] : [handler, eventVal];
  },

  focusTopPopup() {
    const elements = document.querySelectorAll(".modal.show, .offcanvas.show");
    if (elements.length > 0) {
      const topEl = elements[elements.length - 1];
      topEl?.focus();
    }
  },

  triggerEvent(el, name) {
    const event = new CustomEvent(name);
    el.dispatchEvent(event);
  },
  fadeIn(el, duration = 400, display = "block") {
    el.style.opacity = 0;
    el.style.display = display;
    return el.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration,
      fill: "forwards",
    }).finished;
  },

  fadeOut(el, duration = 400) {
    const animation = el.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration,
      fill: "forwards",
    });
    return animation.finished;
  },
  getMapValue(map, key, fallback) {
    if (key in map) return map[key];
    if (Constants.SYMBOL_DEFAULT in map) return map[Constants.SYMBOL_DEFAULT];
    return fallback;
  },
};
