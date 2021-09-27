#!/usr/bin/env node

const stylelint = require('stylelint')
stylelint.lint({
  files: './src/**/*.js'
})