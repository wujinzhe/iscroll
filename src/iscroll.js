
function IScroll (options = {}) {
  let opt = options

  if (!opt.elm) throw new Error('elm参数不能为空')

  this.elm = this.initElement(opt.elm) // 元素

  // 水平方向的偏移量和垂直方向的偏移量
  this.$x = this.$y = 0

  Object.setPrototypeOf(this, {
    get () {
      return this.$x
    },
    set (val) {
      this.$x = val
    }
  })
}

// IScroll.prototype.

export default IScroll
