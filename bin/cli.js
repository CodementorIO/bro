#!/usr/bin/env node

const opts = require('../options.js')
const sgf = require("staged-git-files")
const stylelint = require('stylelint')

require('standard-engine').cli(opts)

sgf((err, results) => {
  if (err) {
    console.error(err)
    process.exit(2);
  }

  const stagedFiles = results
    .filter(res => res.filename.startsWith('src/') && res.filename.endsWith('.js'))
    .map(res => res.filename)

  stylelint.lint({
    files: stagedFiles,
    formatter: 'string',
    cache: true,
  }).then(function ({ output, errored }) {
    console.log(output);
    if (errored) {
      process.exit(2);
    }
  });
});