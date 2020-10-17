const parser = require('@babel/parser')
const generator = require('@babel/generator')
const traverse = require('@babel/traverse')
const types = require('@babel/types')

module.exports = function compile(code) {
  let output
  // parse
  const ast = parser.parse(code, {
    sourceType: 'module'
  })

  // traverse
  const visitor = {
    CallExpression(path) {
      const {
        callee
      } = path.node
      if (types.isMemberExpression(callee) &&
        callee.object.name === 'console' &&
        callee.property.name === 'log') {
        path.remove()
      }
    }
  }

  traverse.default(ast, visitor)

  // generate
  output = generator.default(ast, {}, code)

  return output.code
}
