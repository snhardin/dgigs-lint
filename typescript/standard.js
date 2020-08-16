module.exports = {
    '@typescript-eslint/adjacent-overload-signatures': ['error'],               /* Require that member overloads be consecutive. */
    '@typescript-eslint/array-type': ['error', {                                /* Requires using T[] for arrays. */
        'default': 'array',
    }],
    '@typescript-eslint/await-thenable': ['error'],                             /* Disallows awaiting a value that is not a Promise. */
    '@typescript-eslint/ban-ts-comment': ['error'],                             /* Bans TypeScript directive comments from being used. */
    '@typescript-eslint/ban-tslint-comment': ['error'],                         /* Bans TSLint comments from being used. */
    '@typescript-eslint/ban-types': ['warn'],                                   /* Bans specific types from being used. */
    '@typescript-eslint/class-literal-property-style': ['error', 'getters'],    /* Ensures that literals on classes are exposed in a consistent style. */
    '@typescript-eslint/consistent-type-assertions': ['error', {                /* Enforces consistent usage of type assertions. */
        'assertionStyle': 'as',
        'objectLiteralTypeAssertions': 'never',
    }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],   /* Enforces consistent type definitions with `interface`. */
    '@typescript-eslint/explicit-function-return-type': ['warn', {              /* Require explicit return types on functions and class methods. */
        'allowExpressions': true,
        'allowTypedFunctionExpressions': true,
        'allowHigherOrderFunctions': true,
        'allowConciseArrowFunctionExpressionsStartingWithVoid': true,
    }],
    '@typescript-eslint/explicit-member-accessibility': ['error', {             /* Require explicit accessibility modifiers on class properties and methods. */
        'accessibility': 'explicit',
        'overrides': {
            'constructors': 'off',
        },
    }],
    '@typescript-eslint/explicit-module-boundary-types': ['error', {            /* Require explicit return types on functions and class methods. */
        'allowArgumentsExplicitlyTypedAsAny': true,
        'allowDirectConstAssertionInArrowFunctions': true,
        'allowHigherOrderFunctions': true,
        'allowTypedFunctionExpressions': true,
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {                    /* Require a specific member delimiter style for interfaces and type literals. */
        'multiline': {
            'delimiter': 'semi',
            'requireLast': true,
        },
        'singleline': {
            'delimiter': 'semi',
            'requireLast': false,
        },
    }],
    '@typescript-eslint/member-ordering': ['error', {                           /* Require a consistent member declaration order. */
        'default': {
            'memberTypes': [
                'private-field',
                'public-field',
                'private-constructor',
                'public-constructor',
                'private-method',
                'public-method',
            ],
            'order': 'alphabetically',
        },
    }],
    '@typescript-eslint/method-signature-style': ['error', 'property'],         /* Enforces using the property method signature syntax. */
    '@typescript-eslint/naming-convention': ['warn', {                          /* Enforces naming conventions for everything across a codebase. */
        'selector': 'typeLike',
        'format': ['PascalCase'],
    },
    {
        'selector': 'accessor',
        'format': ['PascalCase'],
    },
    {
        'selector': 'enumMember',
        'format': ['PascalCase'],
    },
    {
        'selector': 'variable',
        'format': ['camelCase', 'UPPER_CASE'],
    },
    {
        'selector': 'memberLike',
        'format': ['camelCase'],
        'filter': {
            'regex': '[- ]',
            'match': false,
        },
    },
    {
        'selector': 'default',
        'format': ['camelCase'],
    }],
    '@typescript-eslint/no-base-to-string': ['error'],                           /* Requires that `.toString() is only called on objects which provide useful information when stringified. */
    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],             /* Disallows non-null assertion in locations that may be confusing. */
    '@typescript-eslint/no-dynamic-delete': ['warn'],                            /* Warns on delete operator with computed key expressions. */
    '@typescript-eslint/no-empty-interface': ['error'],                          /* Disallow the declaration of empty interfaces. */
    '@typescript-eslint/no-explicit-any': ['warn'],                              /* Warns on usage of the `any` type. */
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],                 /* Disallow extra unnecessary non-null assertions. */
    '@typescript-eslint/no-extraneous-class': ['error'],                         /* Forbids the use of classes as namespaces. */
    '@typescript-eslint/no-floating-promises': ['error', {                       /* Requires Promise-like values to be handled appropriately. */
        'ignoreVoid': true,
        'ignoreIIFE': true,
    }],
    '@typescript-eslint/no-for-in-array': ['error'],                             /* Disallow iterating over an array with a for-in loop. */
    '@typescript-eslint/no-implied-eval': ['error'],                             /* Disallow the use of `eval()`-like methods. */
    '@typescript-eslint/no-inferrable-types': ['error'],                         /* Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean. */
    '@typescript-eslint/no-invalid-void-type': ['error', {                       /* Disallows usage of `void` type outside of generic or return types. */
        'allowInGenericTypeArguments': true,
    }],
    '@typescript-eslint/no-misused-new': ['error'],                             /* Enforce valid definition of `new` and `constructor`. */
    '@typescript-eslint/no-misused-promises': ['error', {                       /* Avoid using promises in places not designed to handle them. */
        'checkConditionals': true,
        'checkVoidReturn': true,
    }],
    '@typescript-eslint/no-namespace': ['error', {                              /* Disallow the use of custom TypeScript modules and namespaces. */
        'allowDeclarations': false,
        'allowDefinitionFiles': true,
    }],
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],        /* Disallows using a non-null assertion after an optional chain expression. */
    '@typescript-eslint/no-non-null-assertion': ['error'],                      /* Disallows non-null assertions using the `!` postfix operator. */
    '@typescript-eslint/no-parameter-properties': 'off',                        /* Allow the use of parameter properties in class constructors. */
    '@typescript-eslint/no-require-imports': ['error'],                         /* Disallows invocation of `require()`. */
    '@typescript-eslint/no-this-alias': ['error', {                             /* Disallow aliasing `this`. */
        'allowDestructuring': false,
    }],
    '@typescript-eslint/no-throw-literal': ['error'],                           /* Disallow throwing of anything that doesn't have the possibility to become an `Error`. */
    '@typescript-eslint/no-type-alias': 'off',                                  /* Allow the use of type aliases. */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error', {    /* Flags unnecessary equality comparisons against boolean literals. */
        'allowComparingNullableBooleansToTrue': true,
        'allowComparingNullableBooleansToFalse': true,
    }],
    '@typescript-eslint/no-unnecessary-condition': ['warn', {                   /* Warn on conditionals where the type is always truthy or always falsy. */
        'allowConstantLoopConditions': false,
    }],
    '@typescript-eslint/no-unnecessary-qualifier': ['error'],                   /* Bans namespace qualifiers that are unnecessary. */
    '@typescript-eslint/no-unnecessary-type-arguments': ['error'],              /* Enforces that type arguments will not be used if not required. */
    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],              /* Bans type assertions that do not change the type of an expression. */
    '@typescript-eslint/no-unsafe-assignment': ['warn'],                        /* Warn on assigning `any` to variables and properties. */
    '@typescript-eslint/no-unsafe-call': ['warn'],                              /* Warn on calling an `any` type value. */
    '@typescript-eslint/no-unsafe-member-access': ['warn'],                     /* Warn on member access of an `any` typed variable. */
    '@typescript-eslint/no-unsafe-return': ['warn'],                            /* Warn on returning `any` from a function. */
    '@typescript-eslint/no-var-requires': ['error'],                            /* Disallow the use of `require` statements except in `import` statements. */
    '@typescript-eslint/prefer-as-const': ['error'],                            /* Prefer usage of `as const` over literal type. */
    '@typescript-eslint/prefer-enum-initializers': 'off',                       /* Don't care if enums are initialized with specific values or inferred. */
    '@typescript-eslint/prefer-for-of': ['error'],                              /* Prefer a `for-of` loop over a standard `for` loop if the index is only used to access the array being iterated. */
    '@typescript-eslint/prefer-function-type': ['error'],                       /* Use function types instead of interfaces with a single call signature. */
    '@typescript-eslint/prefer-includes': ['error'],                            /* Enforce `includes` method over `indexOf` method. */
    '@typescript-eslint/prefer-literal-enum-member': ['error'],                 /* Require that all enum members be literal values to prevent unintended enum member name shadow issues. */
    '@typescript-eslint/prefer-namespace-keyword': 'off',                       /* If turned on, this would require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules. */
    '@typescript-eslint/prefer-nullish-coalescing': 'off',                      /* If turned on, this would enforce the usage of the nullish coalescing operator instead of logical chaining. */
    '@typescript-eslint/prefer-optional-chain': 'off',                          /* If turned on, this would require using concise optional chain expressions instead of chained logical ANDs. (Reports false positives.) */
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',                /* If turned on, this would require that function parameters be typed as `readonly` to prevent accidental mutation of inputs. */
    '@typescript-eslint/prefer-readonly': 'off',                                /* If turned on, this would require that private members be marked as `readonly` if they're never modified outside of the constructor. */
    '@typescript-eslint/prefer-reduce-type-parameter': ['error'],               /* Prefer using type parameter when calling `Array#reduce` instead casting. */
    '@typescript-eslint/prefer-regexp-exec': ['warn'],                          /* Warn when `String#match` is used instead of `RegExp#exec` if no global flag is provided. */
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',                 /* If turned on, this would require the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings. */
    '@typescript-eslint/prefer-ts-expect-error': 'off',                         /* If turned on, this would require using `// @ts-expect-error` over `// @ts-ignore`. We have these globally turned off. */
    '@typescript-eslint/promise-function-async': 'off',                         /* If turned on, this would require any function or method that returns a `Promise` to be marked as `async`. */
    '@typescript-eslint/require-array-sort-compare': 'off',                     /* If turned on, requires `Array#sort` calls to always provide a `compareFunction`. */
    '@typescript-eslint/restrict-plus-operands': ['error', {                    /* When adding two variables, operands must both be of type number or of type string. */
        'checkCompoundAssignments': true,
    }],
    '@typescript-eslint/restrict-template-expressions': 'off',                  /* Enforce template literal expressions to be of string type. */
    '@typescript-eslint/strict-boolean-expressions': 'off',                     /* If enabled, this would restrict the types allowed in boolean expressions. */
    '@typescript-eslint/switch-exhausitveness-check': 'off',                    /* If enabled, this would check to make sure all values are handled in a switch with a union type. */
    '@typescript-eslint/triple-slash-reference': ['error', {                    /* Disallows usage of triple slash directives. */
        'path': 'never',
        'types': 'never',
        'lib': 'never',
    }],
    '@typescript-eslint/type-annotation-spacing': ['error'],                    /* Require consistent spacing around type annotations. */
    '@typescript-eslint/typedef': 'off',                                        /* If enabled, this would require type annotations to exist. */
    '@typescript-eslint/unbound-method': ['warn', {                             /* Warns when unbound methods are called with their expected scope. */
        'ignoreStatic': false,
    }],
    '@typescript-eslint/unified-signatures': ['error'],                         /* Requires unification of any two overloads that could be unified into one by using a union or an optional/rest parameter. */
};
