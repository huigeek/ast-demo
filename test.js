const compile = require('./index')

const code = `
  function bigger (a, b){
    console.log(a, b)
    console.log(a > b)
    return a > b ? a : b
  }
  bigger(10,23)
`

let result = compile(code)
console.log(result)
