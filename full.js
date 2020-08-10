const rules = require('./rules');

module.exports = {
    extends: [
        'eslint:recommended',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jest/recommended',
        'plugin:jsdoc/recommended',
    ],
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
    rules,
};
