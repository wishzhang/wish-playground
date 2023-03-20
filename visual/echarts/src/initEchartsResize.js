export function initEchartsResize(option) {
  let {referVm, echartsInstance} = option
  if (!(referVm && echartsInstance)) {
    throw Error()
  }

  let referEl = referVm.$el
  let echartsEl = echartsInstance._dom
  let initReferWidth = referEl.clientWidth
  let initReferHeight = referEl.clientHeight
  let initEchartsWidth = echartsEl.clientWidth
  let initEchartsHeight = echartsEl.clientHeight
  let initDeltaWidth = initReferWidth - initEchartsWidth
  let initDeltaHeight = initReferHeight - initEchartsHeight

  // 监听根元素尺寸变化
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      let el = entries[0].target
      // 这里计算自适应宽高
      let w = el.clientWidth - initDeltaWidth
      let h = el.clientHeight - initDeltaHeight
      updateEcharts(echartsInstance, w, h)
    }
  });
  resizeObserver.observe(referEl)
}

function updateEcharts(echartsInstance, width, height) {
  echartsInstance.resize({
    width,
    height
  })
}
