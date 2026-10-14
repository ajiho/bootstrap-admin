import Constants from "../constants/index";
import { isFunction2 } from "./is.ts";

export function hasMultipleToggle(el) {
  const toggles = (el.dataset.ltsToggle ?? "").split(/[,\s]+/).filter(Boolean);

  return toggles.length > 1;
}

export function sprintf(_str, ...args) {
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
}

export function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function registerEvent(element, events) {
  for (const [eventName, handler] of Object.entries(events)) {
    let eventHandlers = Array.isArray(handler) ? handler : [handler];

    for (const eventHandler of eventHandlers) {
      if (isFunction2(eventHandler)) {
        element.addEventListener(eventName, eventHandler);
      }
    }
  }
}

export function registerInternalEvent(opts, eventName, handler) {
  // 确保 opts.events 存在
  opts.events = opts.events || {};

  const eventVal = opts.events[eventName];

  // 追加到 opts.events 中
  opts.events[eventName] = Array.isArray(eventVal) ? [handler, ...eventVal] : [handler, eventVal];
}

export function focusTopPopup() {
  const elements = document.querySelectorAll(".modal.show, .offcanvas.show");
  if (elements.length > 0) {
    const topEl = elements[elements.length - 1];
    topEl?.focus();
  }
}
export function isBodyOrHtml(el) {
  const tag = el.tagName?.toLowerCase();
  return tag === "body" || tag === "html";
}
export function ensurePositioned(el) {
  if (window.getComputedStyle(el).position === "static") {
    el.style.position = "relative";
  }
}

export function getRootWindow() {
  try {
    return window.top ?? window;
  } catch {
    return window;
  }
}

const instanceMap = new Map();

export function getStore(name) {
  if (!instanceMap.has(name)) {
    instanceMap.set(name, new WeakMap());
  }

  return instanceMap.get(name);
}

export function resolveElement(target) {
  if (!target) {
    return null;
  }

  // DOM
  if (target instanceof Element) {
    return target;
  }

  // selector
  if (typeof target === "string") {
    return document.querySelector(target);
  }

  return null;
}

function resolveElements(target) {
  if (!target) return [];

  if (typeof target === "string") {
    return [...document.querySelectorAll(target)];
  }

  if (target instanceof Element) {
    return [target];
  }

  if (target instanceof NodeList || Array.isArray(target)) {
    return [...target];
  }

  if (target.jquery) {
    return target.toArray();
  }

  return [];
}

export function executeAfterTransition(element, callback) {
  const style = getComputedStyle(element);

  const duration = parseFloat(style.transitionDuration) + parseFloat(style.transitionDelay);

  console.log(style.transitionDuration);
  console.log(style.transitionDelay);

  // console.log(duration)

  // 没有动画，立即完成
  if (duration === 0) {
    callback();
    return;
  }

  let called = false;

  const complete = () => {
    if (called) {
      return;
    }

    called = true;

    element.removeEventListener("transitionend", handler);

    callback();
  };

  const handler = (event) => {
    if (event.target !== element) {
      return;
    }

    complete();
  };

  element.addEventListener("transitionend", handler);

  // transitionDuration 的单位是秒，setTimeout 需要毫秒
  setTimeout(complete, duration * 1000 + 5);
}

export function hasTransition(element) {
  const style = getComputedStyle(element);

  return style.transitionDuration.split(",").some((value) => parseFloat(value) > 0);
}

/**
 * 调试日志
 * 自动标识当前窗口（TOP / IFRAME）
 *
 * @example
 * debugLog("scrollbar")
 * debugLog("treeview", options)
 * debugLog("PushMenu", "opened", element)
 */
export function debugLog(...args) {
  const prefix = window === window.top ? "[TOP]" : "[IFRAME]";

  console.log(prefix, ...args);
}
