import d from "domtify";

import { state } from "./state";

import "domtify/utilities/isPlainObject";
import "domtify/utilities/isString";

function close(target) {
  if (!target) return;

  if (d.isString(target)) {
    const idx = state.stack.findIndex((item) => item.id === target);

    if (idx !== -1) {
      const { el, originalInstance } = state.stack[idx];

      if (originalInstance) {
        originalInstance?.hide?.();
      } else {
        el?.remove?.();
      }
      state.stack.splice(idx, 1);
    }
  }

  if (d.isPlainObject(target) && target.type) {
    const matches = state.stack.filter((item) => item.type === target.type);
    for (const item of matches) close(item.id);
  }
}

export default close;
