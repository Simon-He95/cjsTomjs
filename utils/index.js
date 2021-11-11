const readFile = require('./readFile')
const turnMjs = require('./toMjs')
const fs = require('fs')

module.exports = function (src, extension, excludeArr, callback) {
  try {
    readFile(src, extension, excludeArr).forEach((path) => {
      const content = fs.readFileSync(path, 'utf-8')
      const newContent = turnMjs(content) // 可以将cjs导出改成mjs导出
      fs.writeFileSync(path, newContent) // 写入newContent
    })
    callback('success')
  } catch (error) {
    callback('error')
  }

}