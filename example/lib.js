import faker from 'faker/locale/zh_CN'
faker.locale = 'zh_CN'

export default {
  /** 随机生成颜色 */
  randomColor () {
    return faker.internet.color()
  },
  generateTag (n) {
    let tagList = []
    
    for (let i = 0; i < n; i++) {
      let tagElm = document.createElement('div')
      tagElm.style.color = 'white'
      tagElm.style.fontSize = '13px'
      tagElm.setAttribute('class', 'tag')
      tagElm.style.background = faker.internet.color()
      tagElm.innerText = faker.name.firstName() + faker.name.lastName()
      tagList.push(tagElm)
    }

    return tagList
  }
}