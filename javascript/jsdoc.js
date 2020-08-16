module.exports = {
    'jsdoc/check-access': 'off',
    'jsdoc/check-alignment': ['error'],
    'jsdoc/check-examples': 'off',
    'jsdoc/check-indentation': 'off',
    'jsdoc/check-param-names': ['error'],
    'jsdoc/check-property-names': 'off',
    'jsdoc/check-tag-names': ['error'],
    'jsdoc/check-types': 'off',
    'jsdoc/implements-on-classes': 'off',
    'jsdoc/newline-after-description': ['error', 'never'],
    'jsdoc/no-types': ['error', { 'contexts': ['any'] }],
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-description': ['error'],
    'jsdoc/require-jsdoc': ['error', {
        'checkGetters': true,
        'checkSetters': true,
        'publicOnly': {
            'esm': true,
            'cjs': true,
            'window': true,
        },
        'require': {
            'ClassDeclaration': true,
            'FunctionDeclaration': true,
            'MethodDefinition': true,
        }
    }],
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
};
