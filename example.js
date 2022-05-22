ebnf = require('ebnf')

grammar = `
str          ::= '"' (unsafe | SAFE)* '"'
SAFE         ::= #x21 | [#x24-#x5A] | [#x5E-#x7A] | #x7C | #x7E
unsafe       ::= ESCAPE #x22
ESCAPE       ::= #x5C
`
rules = ebnf.Grammars.W3C.getRules(grammar)
parser = new ebnf.Parser(rules)

str = String.raw`"stringwith\"escapes"`
console.log(str)
ast = parser.getAST(str)
console.log(ast)