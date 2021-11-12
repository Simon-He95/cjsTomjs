module.exports = function turnSJS(template) {
  let tag = false
  let hav = false
  template.replace(/export *default()/g, () => hav = true) // 如果页面存在export default就不转换了
  if (hav) {
    return
  }
  template = template.replace(/module.exports *=/, () => {
    tag = true
    return 'export default'
  })

  template = template.replace(/(var|let|const) *(\w{1,}) *= *require\([',"](\S{1,})[',"]\)/g, (e, w, r, q) => {
    return `import ${r} from "${q.replace('.wxs', '.sjs')}"`
  })
  if (tag) {
    template.replace(/module.exports.(\w{1,}) *= *(.*)/g, (e, r, q) => {
      template = template.replace(/export default {/, (e, _r) => {
        return `export default {\n  ${r}:${q},`
      })
      return template
    })
    template = template.replace(/module.exports.(\w{1,}) *= *(.*)/g, (e, r, q) => {
      return ''
    })
  } else {
    const _export = {}
    template = template.replace(/module.exports.(\w{1,}) *= *(.*)/g, (e, r, q) => {
      _export[r] = JSON.parse(q)
      return ''
    }) + `export default ${JSON.stringify(_export)}`
  }
  return template
}