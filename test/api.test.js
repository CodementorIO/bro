const standard = require('../')
const test = require('tape')

test('api: lintFiles', (t) => {
  t.plan(3)
  standard.lintFiles(['test/mockFile.js'], (err, result) => {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 1, 'no semicolons')
  })
})

test('api: do not allow case declarations', (t) => {
  t.plan(4)
  standard.lintFiles(['test/mockCaseDeclarationFile.js'], (err, result) => {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 1, 'has error')
    const [{ messages }] = result.results
    t.equal(messages[0].ruleId, 'no-case-declarations', 'case declarations is not allowed')
  })
})

test('api: comma dangle', (t) => {
  t.plan(7)
  standard.lintFiles(['test/mockCommaDangleFile.js'], (err, result) => {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 4, 'has error')
    const [{ messages }] = result.results
    t.equal(messages[0].ruleId, 'prettier/prettier', 'should insert ,')
    t.equal(messages[1].ruleId, 'comma-dangle', 'comma dangle on multiline')
    t.equal(messages[2].ruleId, 'prettier/prettier', 'should insert ,')
    t.equal(messages[3].ruleId, 'comma-dangle', 'comma dangle on multiline')
  })
})

test('api: allow "camelcase" on react unsafe lifecycle methods', (t) => {
  t.plan(3)
  standard.lintFiles(['test/mockReactComponentFile.js'], (err, result) => {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 0, 'has no error')
  })
})

test('api: object-shorthand always', (t) => {
  t.plan(4)
  standard.lintFiles(['test/mockObjectShorthandFile.js'], (err, result) => {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 1, 'has no error')
    const [{ messages }] = result.results
    t.equal(messages[0].ruleId, 'object-shorthand', 'complains when not using object shorthand')
  })
})

test('api: do not allow not assigning default value for not required props', (t) => {
  t.plan(4)
  standard.lintFiles(['test/mockReactComponentFileWithoutDefaultProps.js'], (err, result) => {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 1, 'has error')
    const [{ messages }] = result.results
    t.equal(messages[0].ruleId, 'react/require-default-props', 'has no corresponding defaultProps declaration')
  })
})

test('api: lintText', (t) => {
  t.plan(3)
  standard.lintText('console.log("hi there")', (err, result) => {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 1, 'should have used single quotes')
  })
})

test('custom rules', (t) => {
  t.plan(2)
  standard.lintText('let a = 1', (err, result) => {
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 3, 'no unused & prefer const')
  })
})
