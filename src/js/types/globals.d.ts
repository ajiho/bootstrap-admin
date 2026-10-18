import type * as JQuery from "jquery";
import type * as OverlayScrollbars from "overlayscrollbars";

import * as adminlts from "../index";

declare global {
  const OverlayScrollbarsGlobal: typeof OverlayScrollbars;

  const $d: typeof JQuery;
  const jQueryd: typeof JQuery;

  interface Window {
    adminlts: typeof adminlts;
  }
}
