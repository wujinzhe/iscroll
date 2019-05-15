const DIRECTION_VERTICAL = 'direction_vertical' // 垂直方向
const DIRECTION_HORIZONTAL = 'direction_horizontal' // 水平方向
const DIRECTIONRIGHT = 'direction_right'
const DIRECTIONLEFT = 'direction_left'

class IScroll {
  constructor (options = {}) {
    let opt = options

    if (!opt.elm) throw new Error('elm参数不能为空')

    this.elm = this.initElement(opt.elm) // 元素
  }

  init () {

  }

  // 水平偏移量
  x = 0

  // 垂直偏移量
  y = 0

  get X () {

  }

  set X (val) {

  }

  get Y () {

  }

  set Y (val) {
    
  }

  event = {
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

  /** 新生成一个dom，并且将元素dom移动到这个新的dom元素中 */
  initElement (dom) {
    let wrap = document.createElement('div')
    wrap.setAttribute('class', 'content-wrap')
    dom.setAttribute('class', 'content')
    dom.parentNode.insertBefore(wrap, dom)
    wrap.appendChild(dom)

    return wrap
  }

  initEvent (dom) {
    dom.addEventListener('touchstart', () => {

    })

    dom.addEventListener('touchmove', () => {
      
    })

    dom.addEventListener('touchend', () => {
      
    })
  }
}

export default IScroll

    
window.onload = function () {
  function move (el, distance) {
    el.style.transform = `translateX(${distance}px)`
  }

  function calcDistance (s, initV, a, t, cb) {
    console.log('init', initV)
    let x = initV * t + 0.5 * a * t * t
    console.log('x', x)
    console.log('s', s)
    let v1 = initV + a * t
    console.log('v1', v1)
    // debugger
    x = s + x
    console.log(x)

    if (x <= -maxDistance || x >= 0) return

    cb(x)

    if (v1 === 0) return

    setTimeout(() => {
      calcDistance(x, v1, a, t + 16, cb)
    }, 16)
  }

  const DIRECTIONRIGHT = 'direction_right'
  const DIRECTIONLEFT = 'direction_left'

  const Wrap = document.querySelector('.content-wrap')
  var X = 0
  var startX = X
  var moveX = 0
  var isTouch = false
  var initVelocity = 0
  var startTime, endTime
  // 阻力
  var resistance = 0
  // 达到边界时候的阻力
  var maxResistance = 10

  var maxDistance = document.querySelector('.content').clientWidth - document.querySelector('.content-wrap').clientWidth

  Wrap.addEventListener('touchstart', function (e) {
    e.stopPropagation()
    X = e.changedTouches[0].pageX
    startTime = new Date().getTime()
    isTouch = true
  })

  Wrap.addEventListener('touchmove', function (e) {
    e.stopPropagation()
    if (isTouch) {
      moveX = e.changedTouches[0].pageX - X
      move(this.children[0], moveX + startX)
    }
  })

  Wrap.addEventListener('touchend', function (e) {
    e.stopPropagation()
    startX = moveX + startX
    isTouch = false
    endTime = new Date().getTime()
    // 计算初速度
    initVelocity = moveX / (endTime - startTime)
    console.log('startX', startX)

    calcDistance(startX, initVelocity, -resistance, 0, (x) => {
      move(this.children[0], x)
      startX = x
    })

    // calcDistance(initVelocity, -resistance, 0, (x) => {
    //   move(this.children[0], x)
    // })

    // setInterval(() => {

    // }, 16)
  })
}
