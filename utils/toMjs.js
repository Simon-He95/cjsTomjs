module.exports = function turnSJS(template) {
  // 如果页面存在export default就不转换了
  if (/export *default/.test(template)) {
    return template
  }
  return [
    'const exports = {}',
    'const module = {exports}',
    template.replace(/(?:var|let|const) *(\w+) *= *require\(['"](\S+)['"]\)/g, (e, r, q) => {
      return `import ${r} from "${q.replace(/.wxs$/, '.sjs')}"`
    }),
    'export default module.exports'
  ].join('\n')
}