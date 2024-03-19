/**
 * 防抖函数,可以防止js高频率渲染页面时出现的视觉卡顿效果
 * 简单理解就是，高频率的事件中，执行耗费性能的操作，连续操作之后只有最后一次会生效
 * @param func 函数
 * @param wait 频率
 * @returns {(function(): void)|*}
 */
function debounce(func, wait = 500) {
  let timeout

  return function () {
    const context = this
    const args = arguments

    clearTimeout(timeout)
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}


/**
 * 和window的resize事件效果是一样的，只不过该函数可以针对具体的某个元素的尺寸发生变化会才会触发函数
 * @param element dom元素
 * @param callback 回调函数
 */
function onResize(element, callback) {
  const resizeObserver = new ResizeObserver((entries) => {
    // 处理大小变化的回调函数
    entries.forEach((entry) => {
      // entry.target 是发生大小变化的元素 entry.contentRect 包含元素的新大小信息
      if (!entry.target.firstResize) {
        //优化:第一次不执行
        entry.target.firstResize = true
        return
      }
      callback.call(element, entry.contentRect)
    })
  })
  resizeObserver.observe(element)
}



