const ts = require('../typescript');

module.exports = Object.assign({ }, ts, {
	env: {
		'browser': true,
		'es6': true,
		'node': false,
	},
});
