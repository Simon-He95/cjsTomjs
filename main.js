const readFile = require('./utils/index')

readFile('./demo', '.js', [], (res) => {
  console.log(res)
})