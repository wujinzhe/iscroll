import iscroll from './iscroll'

/** 初始化transform */
iscroll.prototype.initStyle = function () {
  this.style.transform = `translate3d(0, 0, 0)`
}

iscroll.prototype.changeStyle = function (pos) {
  this.style.transform = `translate3d(${pos.x || 0}px, ${pos.y || 0}px, 0)`
}

/** 新生成一个dom，并且将元素dom移动到这个新的dom元素中 */
iscroll.prototype.initElement = function (dom) {
  let wrap = document.createElement('div')
  wrap.setAttribute('class', 'content-wrap')
  dom.setAttribute('class', 'content')
  dom.parentNode.insertBefore(wrap, dom)
  wrap.appendChild(dom)

  return wrap
}

iscroll.prototype.move = function (v) {
  let x = initV * t + 0.5 * this.$a * t * t
}
