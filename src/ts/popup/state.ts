const state = {
  // 初始的索引层
  zIndex: 1050,
  // 保存的堆栈信息
  stack: [],
};

function nextZIndex(step = 1) {
  state.zIndex += step;
  return state.zIndex;
}

function setZIndex(value) {
  if (value > state.zIndex) {
    state.zIndex = value;
  }
  return value;
}

function cleanStack(id) {
  const idx = state.stack.findIndex((item) => item.id === id);
  idx !== -1 && state.stack.splice(idx, 1);
}

function pushStack(id, type, el, instance, originalInstance) {
  state.stack.push({
    id,
    type,
    el,
    instance,
    originalInstance,
  });
}

function getIdByInstance(instance) {
  return state.stack.find((item) => item.instance === instance).id;
}

export { state, nextZIndex, setZIndex, cleanStack, pushStack, getIdByInstance };
