const es6 = require('./es6');
const jest = require('./jest');
const jsdoc = require('./jsdoc');
const standard = require('./standard');

module.exports = {
    env: {
        'jest/globals': true,
    },
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module',
    },
    plugins: [
        'jest',
        'jsdoc',
    ],
    rules: {
        ...standard,
        ...es6,
        ...jsdoc,
        ...jest,
    },
};
