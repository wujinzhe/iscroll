import lib from './lib'
import IScroll from '../src/index'

lib.generateTag(10).forEach(item => document.querySelector('#app').appendChild(item))

const iscroll = new IScroll({
  elm: document.querySelector('#app')
})

iscroll.on('slide', (date) => {
  console.log('slide', date.v)
})