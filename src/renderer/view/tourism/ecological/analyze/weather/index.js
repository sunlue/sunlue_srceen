/*eslint-disable*/
import option from './option.js'

const methods = function () {}

methods.prototype.air = function (params) {
  return new Promise((resolve, reject) => {
    resolve(option.air(params))
  })
}
methods.prototype.tem = function (params) {
  return new Promise((resolve, reject) => {
    resolve(option.tem(params))
  })
}
methods.prototype.humidity = function (params) {
  return new Promise((resolve, reject) => {
    resolve(option.humidity(params))
  })
}
methods.prototype.weather = function (params) {
  return new Promise((resolve, reject) => {
    resolve(option.weather(params))
  })
}
methods.prototype.hours = function (params) {
  return new Promise((resolve, reject) => {
    resolve(option.hours(params))
  })
}
export default new methods()
