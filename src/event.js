import iscroll from './iscroll'

iscroll.prototype.initEvent = function (elm) {
  let touchStart = 0,
      touchMove = 0,
      start

  // /** 注册某个事件 */
  // this.on = function (eventName, cb) {
  //   this.event[eventName] = cb
  // }

  /** 发出某个事件 */
  this.emit = function (eventName, obj) {
    // 当如果有注册了这个事件的话 则执行注册这个事件的方法
    if (this.event[eventName] instanceof Function) this.event[eventName](obj)
  }

  elm.addEventListener('touchstart', (e) => {
    this.isTouch = true
    touchStart = e.changedTouches[0].pageX
    start = this.X
  })

  elm.addEventListener('touchmove', (e) => {
    if (this.isTouch) {
      touchMove = e.changedTouches[0].pageX - touchStart
      this.X = start + touchMove
    }
  })

  elm.addEventListener('touchend', () => {
    this.isTouch = false
    this.emit('slide', {})
  })
}

/** 注册某个事件 */
iscroll.prototype.on = function (eventName, cb) {
  this.event[eventName] = cb
}

// /** 发出某个事件 */
// iscroll.prototype.emit = function (eventName, obj) {
//   // 当如果有注册了这个事件的话 则执行注册这个事件的方法
//   if (this.event[eventName] instanceof 'function') this.event[eventName](obj)
// }