export const dispatchCustomEvent = <T = undefined>(
  element: Element,
  name: string,
  options: { cancelable?: boolean; detail?: T } = {},
): CustomEvent<T | undefined> => {
  const event = new CustomEvent<T | undefined>(name, {
    bubbles: true,
    cancelable: options.cancelable ?? false,
    detail: options.detail,
  });

  element.dispatchEvent(event);
  return event;
};
