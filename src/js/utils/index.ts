export function getRootWindow() {
  try {
    return window.top ?? window;
  } catch {
    return window;
  }
}

export function hasMultipleToggle(el: HTMLElement): boolean {
  const toggles = (el.dataset.ltsToggle ?? "").trim().split(/\s+/).filter(Boolean);

  return toggles.length > 1;
}
