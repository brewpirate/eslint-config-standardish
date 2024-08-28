import { ESLint } from 'eslint'
import config from './index.js'

const eslint = new ESLint({
  overrideConfigFile: true,
  baseConfig: config
})

//   test('ensure we allow top level await', async function (t) {
const code = 'const foo = await 1\nconst bar = function () {}\nawait bar(foo)\n'
const [lintResult] = await eslint.lintText(code)
//     t.is(lintResult.errorCount, 0)
//   })

console.log(lintResult)
