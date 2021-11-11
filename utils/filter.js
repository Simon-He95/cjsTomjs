module.exports = function excluder(current, filters) {
  let result = false
  filters.forEach((filter) => {
    if (current.endsWith(filter)) {
      result = true
      return
    }
  })
  return result
} // 过滤数据类型