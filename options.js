var eslint = require('eslint')
var path = require('path')
var pkg = require('./package.json')

module.exports = {
  version: pkg.version,
	cmd: 'bro',
	eslint: eslint,
	eslintConfig: {
		configFile: path.join(__dirname, 'eslintrc.json')
	},
	tagline: 'Use Codementor lint Style'
}
