/**
 * 全局弹出层状态管理
 */

/**
 * 支持的弹出层类型。
 * 允许后续扩展其他类型。
 */
export type PopupType = "modal" | "offcanvas" | "popover" | "tooltip" | "toast" | (string & {});

/**
 * 弹出层组件的最小接口。
 */
export interface PopupComponent {
  destroy(): void;
}

/**
 * Bootstrap 实例的最小接口。
 */
export interface PopupInstance {
  show?(): void;
  hide?(): void;
  dispose?(): void;
}

/**
 * 弹出层注册信息。
 */
export interface PopupRecord<TComponent = PopupComponent, TInstance = PopupInstance> {
  /** 唯一标识 */
  id: string;

  /** 弹出层类型 */
  type: PopupType;

  /** 弹出层 DOM 元素 */
  el: HTMLElement;

  /** 插件组件实例 */
  component: TComponent;

  /** Bootstrap 原生实例 */
  instance: TInstance;

  /** 当前弹出层的基础 z-index */
  zIndex: number;
}

/**
 * 全局状态。
 *
 * stack 按注册顺序保存弹出层。
 * zIndex 为全局层级分配器的当前值。
 */
export const state: {
  zIndex: number;
  stack: PopupRecord[];
} = {
  zIndex: 1050,
  stack: [],
};

/**
 * 获取下一个 z-index。
 *
 * 默认每次递增 1。
 */
export function nextZIndex(step = 1): number {
  state.zIndex += step;
  return state.zIndex;
}

/**
 * 设置 z-index 下限。
 *
 * 不允许全局层级值倒退。
 * 返回传入的 value，便于直接设置元素样式。
 */
export function setZIndex(value: number): number {
  if (!Number.isFinite(value)) {
    throw new TypeError("z-index must be a finite number.");
  }

  state.zIndex = Math.max(state.zIndex, value);

  return value;
}

/**
 * 注册弹出层。
 *
 * component 和 instance 分开存储：
 * component 是我们的插件对象；
 * instance 是 Bootstrap 原生实例。
 */
export function pushStack<TComponent, TInstance>(
  id: string,
  type: PopupType,
  el: HTMLElement,
  component: TComponent,
  instance: TInstance,
  zIndex = state.zIndex,
): PopupRecord<TComponent, TInstance> {
  if (state.stack.some((item) => item.id === id)) {
    throw new Error(`Popup "${id}" is already registered.`);
  }

  const record: PopupRecord<TComponent, TInstance> = {
    id,
    type,
    el,
    component,
    instance,
    zIndex,
  };

  state.stack.push(record as PopupRecord);

  return record;
}

/**
 * 根据 ID 获取弹出层。
 */
export function getPopupById(id: string): PopupRecord | undefined {
  return state.stack.find((item) => item.id === id);
}

/**
 * 根据插件组件实例获取 ID。
 */
export function getIdByComponent(component: unknown): string | undefined {
  return state.stack.find((item) => item.component === component)?.id;
}

/**
 * 根据 Bootstrap 实例获取 ID。
 */
export function getIdByBootstrapInstance(instance: unknown): string | undefined {
  return state.stack.find((item) => item.instance === instance)?.id;
}

/**
 * 兼容旧 API。
 *
 * 旧代码传入的是 Modal 插件实例，而不是 Bootstrap 实例。
 */
export function getIdByInstance(instance: unknown): string | undefined {
  return getIdByComponent(instance);
}

/**
 * 注销弹出层。
 *
 * 这里只移除注册信息，不负责调用 hide() 或 dispose()。
 */
export function cleanStack(id: string): void {
  const index = state.stack.findIndex((item) => item.id === id);

  if (index !== -1) {
    state.stack.splice(index, 1);
  }
}

/**
 * 获取当前最上层的弹出层。
 */
export function getTopPopup(): PopupRecord | undefined {
  return state.stack.at(-1);
}

/**
 * 获取指定类型的弹出层。
 */
export function getPopupsByType(type: PopupType): PopupRecord[] {
  return state.stack.filter((item) => item.type === type);
}
