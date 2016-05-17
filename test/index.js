/**
 * Imports
 */

const test = require('tape')
const zip = require('..')
const fs = require('mz/fs')
const co = require('co')
const {join} = require('path')
const prosh = require('prosh')

/**
 * Tests
 */

test('should work', co.wrap(function * (t) {
  yield zip('function', 'lambda.zip', {cwd: __dirname})
  yield prosh('rm lambda.zip', {cwd: __dirname})
  t.ok(true)
  t.end()
}))
