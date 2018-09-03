var eslint = require('eslint')
var path = require('path')
var pkg = require('./package.json')

module.exports = {
  version: pkg.version,
	cmd: 'bro',
  homepage: pkg.homepage,
	eslint: eslint,
	eslintConfig: {
		configFile: path.join(__dirname, 'eslintrc.json')
	},
	tagline: 'A bro will lint and prettify your code'
}
