const standard = require('../')
const test = require('tape')

test('api: lintFiles', async (t) => {
  t.plan(2)
  const [result] = await standard.lintFiles(['test/mockFile.js'])
  t.equal(typeof result, 'object', 'result is an object')
  t.equal(result.errorCount, 1, 'no semicolons')
})

test('api: do not allow case declarations', async (t) => {
  t.plan(3)
  const [result] = await standard.lintFiles(['test/mockCaseDeclarationFile.js'])
  t.equal(typeof result, 'object', 'result is an object')
  t.equal(result.errorCount, 1, 'has error')
  const { messages } = result
  t.equal(messages[0].ruleId, 'no-case-declarations', 'case declarations is not allowed')
})

test('api: comma dangle', async (t) => {
  t.plan(6)
  const [result] = await standard.lintFiles(['test/mockCommaDangleFile.js'])
  t.equal(typeof result, 'object', 'result is an object')
  t.equal(result.errorCount, 4, 'has error')
  const { messages } = result
  t.equal(messages[0].ruleId, 'prettier/prettier', 'should insert ,')
  t.equal(messages[1].ruleId, 'comma-dangle', 'comma dangle on multiline')
  t.equal(messages[2].ruleId, 'prettier/prettier', 'should insert ,')
  t.equal(messages[3].ruleId, 'comma-dangle', 'comma dangle on multiline')
})

test('api: allow "camelcase" on react unsafe lifecycle methods', async (t) => {
  t.plan(2)
  const [result] = await standard.lintFiles(['test/mockReactComponentFile.js'])
  t.equal(typeof result, 'object', 'result is an object')
  t.equal(result.errorCount, 0, 'has no error')
})

test('api: object-shorthand always', async (t) => {
  t.plan(3)
  const [result] = await standard.lintFiles(['test/mockObjectShorthandFile.js'])
  t.equal(typeof result, 'object', 'result is an object')
  t.equal(result.errorCount, 1, 'has no error')
  const { messages } = result
  t.equal(
    messages[0].ruleId,
    'object-shorthand',
    'complains when not using object shorthand'
  )
})

test('api: do not allow not assigning default value for not required props', async (t) => {
  t.plan(3)
  const [result] = await standard.lintFiles([
    'test/mockReactComponentFileWithoutDefaultProps.js',
  ])
  t.equal(typeof result, 'object', 'result is an object')
  t.equal(result.errorCount, 1, 'has error')
  const { messages } = result
  t.equal(
    messages[0].ruleId,
    'react/require-default-props',
    'has no corresponding defaultProps declaration'
  )
})

test('api: lintText', async (t) => {
  t.plan(2)
  const [result] = await standard.lintText('console.log("hi there")')
  t.equal(typeof result, 'object', 'result is an object')
  t.equal(result.errorCount, 1, 'should have used single quotes')
})

test('custom rules', async (t) => {
  t.plan(2)
  const [result] = await standard.lintText('let a = 1')
  t.equal(typeof result, 'object', 'result is an object')
  t.equal(result.errorCount, 3, 'no unused & prefer const')
})
