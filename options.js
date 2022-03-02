var eslint = require('eslint')
var path = require('path')
var pkg = require('./package.json')

module.exports = {
	cmd: 'bro',
  version: pkg.version,
  homepage: pkg.homepage,
	eslint: eslint,
	eslintConfig: {
		overrideConfigFile: path.join(path.resolve('./'), '.eslintrc.json')
	}
}
