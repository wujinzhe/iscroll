
function IScroll (options = {}) {
  let opt = options

  if (!opt.elm) throw new Error('elm参数不能为空')

  this.elm = this.initElement(opt.elm) // 元素
  this.style = this.elm.querySelector('.content').style // 里面可滚动元素的样式
  this.initStyle()

  // 水平方向的偏移量和垂直方向的偏移量
  this.$x = this.$y = 0

  Object.defineProperty(this, 'X', {
    get () {
      return this.$x
    },
    set (val) {
      this.changeStyle({ x: val, y: this.Y })
      this.$x = val
    }
  })

  Object.defineProperty(this, 'Y', {
    get () {
      return this.$y
    },
    set (val) {
      this.changeStyle({ x: this.X, y: val })
      this.$y = val
    }
  })

  this.privateEvent = {
    /** 向左滑动事件 */
    slideLeft () {

    },
    /** 向右滑动事件 */
    slideRight () {},
    /** 向上滑动事件 */
    slideTop () {},
    /** 向下滑动事件 */
    slideRight () {}
  }

  this.event = {}

  this.isTouch = false // 是否触摸

  this.initEvent(this.elm)
}

// IScroll.prototype.

export default IScroll
