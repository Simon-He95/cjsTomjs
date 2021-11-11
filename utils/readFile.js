const fs = require('fs')
const path = require('path')
const excluder = require('./filter');
module.exports = function readFilter(_path, endsWith, exclude = [], result = []) {
  fs.readdirSync(_path, 'utf-8').filter((item) => {
    const _path_ = path.resolve(_path, item)
    const stat = fs.lstatSync(_path_)
    const is_direc = stat.isDirectory() // true || false 判断是不是文件夹
    if (excluder(item, exclude)) {
      return
    }
    if (is_direc) {
      readFilter(_path_, endsWith, exclude, result)
    } else if (_path_.endsWith(endsWith)) {
      result.push(_path_)
    }
  })
  return result
}