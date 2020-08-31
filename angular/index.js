const ts = require('../typescript');
const overrides = require('./overrides');

module.exports = Object.assign({ }, ts, {
	env: {
		'browser': true,
		'es6': true,
		'jest/globals': true,
		'node': false,
	},
	rules: {
		...ts.rules,
		...overrides,
	},
});
