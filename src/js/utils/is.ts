export function isNonBlankString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isFunction(value: unknown): value is (...args: any[]) => unknown {
  return typeof value === "function";
}

export function isFunction2(value: unknown): value is Function {
  return typeof value === "function";
}
