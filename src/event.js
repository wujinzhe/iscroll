import iscroll from './iscroll'

iscroll.prototype.initEvent = function (elm) {
  let touchStart = 0,
      touchMove = 0,
      oldPageX = 0, // 计算每次16毫秒前的X坐标偏移量
      start,
      v = 0, // 瞬时速度
      time = 0 // 定时器

  /** 发出某个事件 */
  this.emit = function (eventName, obj) {
    // 当如果有注册了这个事件的话 则执行注册这个事件的方法
    if (this.event[eventName] instanceof Function) this.event[eventName](obj)
  }

  elm.addEventListener('touchstart', (e) => {
    this.isTouch = true
    touchStart = e.changedTouches[0].pageX
    oldPageX = e.changedTouches[0].pageX // 触碰时候的X坐标
    start = this.X
  })

  elm.addEventListener('touchmove', (e) => {
    if (this.isTouch) {
      touchMove = e.changedTouches[0].pageX - touchStart
      this.X = start + touchMove

      // 进行函数节流 每16毫秒执行一次下面的，求出瞬时速度（其实是16毫秒内的平均速度）
      if (time) return

      time = setTimeout(() => {
        // 在16毫秒内走的距离 求出瞬时速度
        v = (e.changedTouches[0].pageX - oldPageX) / 16
        // 将oldPageX 设置为当前偏移量，以便于下一个16毫秒使用
        oldPageX = e.changedTouches[0].pageX
        // console.log('v', v)
        time = 0
      }, 16)
    }
  })

  elm.addEventListener('touchend', () => {
    this.isTouch = false
    this.emit('slide', {
      v
    })
  })
}

/** 注册某个事件 */
iscroll.prototype.on = function (eventName, cb) {
  this.event[eventName] = cb
}
