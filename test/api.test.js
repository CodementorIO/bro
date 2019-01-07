const standard = require('../')
const test = require('tape')

test('api: lintFiles', (t) => {
  t.plan(3)
  standard.lintFiles(['mockFile.js'], { cwd: 'test' }, (err, result) => {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 1, 'no semicolons')
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
