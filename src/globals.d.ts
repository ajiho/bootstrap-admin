import type * as JQuery from "jquery";

declare global {
  const $d: typeof JQuery;
  const jQueryd: typeof JQuery;
}

export {};
