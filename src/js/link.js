import Constants from "./constants";

const SELECTOR = `[data-${Constants.PREFIX}-link-href]`;

const ATTR_HREF = `data-${Constants.PREFIX}-link-href`;
const ATTR_TARGET = `data-${Constants.PREFIX}-link-target`;
const ATTR_REL = `data-${Constants.PREFIX}-link-rel`;
const ATTR_DOWNLOAD = `data-${Constants.PREFIX}-link-download`;
const ATTR_REPLACE = `data-${Constants.PREFIX}-link-replace`;
const ATTR_CONFIRM = `data-${Constants.PREFIX}-link-confirm`;
const ATTR_DISABLED = `data-${Constants.PREFIX}-link-disabled`;

class Link {
  static init(root = document) {
    root.addEventListener("click", (event) => {
      const element = event.target.closest(SELECTOR);

      if (!element) {
        return;
      }

      // 已经阻止默认行为
      if (event.defaultPrevented) {
        return;
      }

      // 仅处理鼠标左键
      if (event.button !== 0) {
        return;
      }

      // Ctrl / Shift / Alt / Cmd 保持浏览器默认行为
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      // 禁用
      if (element.hasAttribute(ATTR_DISABLED)) {
        return;
      }

      const href = element.getAttribute(ATTR_HREF);

      if (!href) {
        return;
      }

      // 确认框
      const confirmText = element.getAttribute(ATTR_CONFIRM);

      if (confirmText && !window.confirm(confirmText)) {
        return;
      }

      // replace
      if (element.hasAttribute(ATTR_REPLACE)) {
        location.replace(href);
        return;
      }

      const a = document.createElement("a");

      a.href = href;

      const target = element.getAttribute(ATTR_TARGET);

      if (target) {
        a.target = target;
      }

      const rel = element.getAttribute(ATTR_REL);

      if (rel) {
        a.rel = rel;
      }

      if (element.hasAttribute(ATTR_DOWNLOAD)) {
        const filename = element.getAttribute(ATTR_DOWNLOAD);

        if (filename !== "") {
          a.download = filename;
        } else {
          a.download = "";
        }
      }

      a.click();
    });
  }
}

export default Link;
