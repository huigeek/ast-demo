## AST Demo

> 一个小demo，移除 js 源代码里的 `console.log`

正常的 js 语法并不适合计算机程序的理解和运行，浏览器的编辑器会把源代码转化为 AST（Abstract Syntax Tree，抽象语法树），然后进行进一步的分析来进行其他操作。

前端的很多框架和工具，比如Babel、Webpack、vue-cli 和 eslint 等，它们的核心都是通过AST来实现对代码的检查、分析等操作的。

`@babel/parser` 将源代码解析成 AST
`@babel/traverser` 对AST节点进行递归遍历，生成一个便于操作、转换的path对象
`@babel/generator` 将AST解码生成 js 代码
`@babel/types` 通过它，对具体AST节点进行增、删、改、查

可以在[线上的AST转换器](https://astexplorer.net/)测试和查看 ast 的结构
