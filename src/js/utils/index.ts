export function getRootWindow() {
  try {
    return window.top ?? window;
  } catch {
    return window;
  }
}
