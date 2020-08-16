const j = require('../javascript');
const overrides = require('./eslint-overrides');
const extensions = require('./extensions');
const standard = require('./standard');

module.exports = {
    env: {
        'jest/globals': true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: [
        'jest',
        'jsdoc',
        '@typescript-eslint',
    ],
    rules: Object.assign({ }, j.rules, {
        ...overrides,
        ...extensions,
        ...standard,
    }),
};
