import { getRootWindow } from "./utils";

const root = getRootWindow();

Object.defineProperty(window, "popup", {
  configurable: true,
  enumerable: false,

  get() {
    return root.adminlts.popup;
  },
});

export * from "./index";
