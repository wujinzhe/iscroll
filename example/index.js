import lib from './lib'
import IScroll from '../src/index'

lib.generateTag(10).forEach(item => document.querySelector('#app').appendChild(item))

const iscroll = new IScroll(document.querySelector('#app'))
