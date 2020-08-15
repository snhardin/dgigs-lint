module.exports = {
    '@typescript-eslint/brace-style': ['error', '1tbs', {                       /* Enforce consistent brace style for blocks. */
        'allowSingleLine': false,
    }],
    '@typescript-eslint/comma-spacing': ['error'],                              /* Enforce consistent comma spacing. */
    '@typescript-eslint/default-param-last': ['error'],                         /* Enforce default parameters to be last in method signature. */
    '@typescript-eslint/dot-notation': ['error', {                              /* Enforce dot notation whenever possible. */
        'allowPrivateClassPropertyAccess': 'off',
    }],
    '@typescript-eslint/function-call-spacing': ['error', 'never'],             /* Disallow spacing between function identifiers and their invocations. */
    '@typescript-eslint/indent': ['error', 'tab', {                             /* Enforce consistent indentation. May be buggy. */
        'SwitchCase': 1,
        'VariableDecorator': 1,
        'outerIIFEBody': 1,
        'MemberExpression': 1,
        'FunctionDeclaration': {
            'body': 1,
            'parameters': 2,
        },
        'FunctionExpression': {
            'body': 1,
            'parameters': 2,
        },
        'CallExpressions': {
            'arguments': 1,
        },
        'ArrayExpression': 1,
        'ObjectExpression': 1,
        'ImportDeclaration': 1,
        'flatTernaryExpressions': true,
        'offsetTernaryExpressions': false,
        'ignoreComments': false,
    }],
    '@typescript-eslint/init-declarations': 'off',                              /* Require or disallow initialization in variable declarations. */
    '@typescript-eslint/keyword-spacing': ['error', {                           /* Require consistent spacing before and after keywords. */
        'after': true,
        'before': true,
    }],
    '@typescript-eslint/lines-between-class-members': ['error', 'always', {     /* Require empty lines between class members (except for single line members). */
        'exceptAfterSingleLine': true,
    }],
    '@typescript-eslint/no-array-constructor': ['error'],                       /* Disallow generic Array constructors. */
    '@typescript-eslint/no-empty-function': ['error', {                         /* Warn if empty function is defined. */
        allow: ['constructors'],
    }],
    '@typescript-eslint/no-dupe-class-members': ['error'],                      /* Disallow duplicate class members. */
    '@typescript-eslint/no-extra-parens': 'off',                                /* Restricts the use of parentheses to only where they are necessary. */
    '@typescript-eslint/no-extra-semi': ['error'],                              /* Disallows unnecessary semicolons. */
    '@typescript-eslint/no-invalid-this': ['error'],                            /* Disallow `this` keyword outside of classes or class-like objects. */
    '@typescript-eslint/no-loss-of-precision': ['warn'],                        /* Disallow literal numbers that lose precision. */
    '@typescript-eslint/no-magic-numbers': 'off',                               /* Disallow magic numbers. */
    '@typescript-eslint/no-unused-expressions': ['error'],                      /* Disallow unused expressions. */
    '@typescript-eslint/no-unused-vars-experimental': ['error'],                /* Disallow unused variables and arguments using TypesScript compiler. */
    '@typescript-eslint/no-unused-vars': 'off',                                 /* Disallow unused variables and arguments. */
    '@typescript-eslint/no-use-before-define': 'off',                           /* Disallow use of variables and functions before they're defined. (Must disable this as we have defined a mandatory alphabetical order to definitions.) */
    '@typescript-eslint/no-useless-constructor': ['error'],                     /* Disallow unnecessary constructors. */
    '@typescript-eslint/require-await': ['error'],                              /* Disallow async functions which have no `await` expression. */
    '@typescript-eslint/return-await': 'off',                                   /* If turned on, this would enforce consistent returning of awaited values. */
    '@typescript-eslint/semi': ['error', {                                      /* Require semicolons. */
        'omitLastInOneLineBlock': false,
    }],
    '@typescript-eslint/space-before-function-paren': ['error', 'always', {     /* Require a space before function parenthesis. */
        'anonymous': 'always',
        'named': 'always',
        'asyncArrow': 'always',
    }],
};
