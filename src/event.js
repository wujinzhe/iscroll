import iscroll from './iscroll'

iscroll.prototype.initEvent = function (elm) {
  let touchStart = 0,
      touchMove = 0,
      start

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
  })
}

iscroll.prototype.on = function (eventName, cb) {

}