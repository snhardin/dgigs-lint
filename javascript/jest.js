module.exports = {
    'jest/consistent-test-it': ['error', {                       /* Enforces usage of `test` over `it` inside and outside of `describe` blocks. */
        'fn': 'test',
        'withinDescribe': 'test',
    }],
    'jest/expect-expect': ['error', {                            /* Enforce that there is at least one `expect` within each test. */
        'assertFunctionNames': ['expect'],
    }],
    'jest/lowercase-name': ['error'],                            /* Enforce that all test names are lowercase. */
    'jest/no-alias-methods': ['error'],                          /* Require usage of non-alias test methods. */
    'jest/no-commented-out-tests': ['warn'],                     /* Warn on commented out tests. */
    'jest/no-conditional-expect': ['error'],                     /* Enforce that `expect`s are not conditional in code. */
    'jest/no-deprecated-functions': ['error'],                   /* Disallow use of deprecated functions. */
    'jest/no-disabled-tests': ['warn'],                          /* Warn on disabled tests. */
    'jest/no-duplicate-hooks': ['error'],                        /* Disallow duplicate setup and teardown hooks. */
    'jest/no-export': ['error'],                                 /* Disallow using `export`s in files containing tests. (Results in duplicate code run.) */
    'jest/no-focused-tests': ['error'],                          /* Disallow focused tests. */
    'jest/no-hooks': 'off',                                      /* If enabled, this would disable setup and teardown hooks. */
    'jest/no-identical-title': ['error'],                        /* Disallow identical titles on two separate tests. */
    'jest/no-if': ['error'],                                     /* Disallow conditional logic. */
    'jest/no-interpolation-in-snapshots': ['error'],             /* Disallow string interpolation inside snapshopts. */
    'jest/no-jasmine-globals': ['error'],                        /* Disallow Jasmine globals. */
    'jest/no-jest-import': ['error'],                            /* Disallow importing Jest. */
    'jest/no-large-snapshots': ['warn'],                         /* Warns on large Jest snapshots. */
    'jest/no-mocks-import': ['error'],                           /* Disallow manually importing from `__mocks__`. (Results in duplicate mocks.) */
    'jest/no-restricted-matchers': 'off',                        /* Disallow specific matchers and modifiers. */
    'jest/no-standalone-expect': ['error'],                      /* Disallow using `expect` outside of `it` or `test` blocks. */
    'jest/no-test-callback': ['error'],                          /* Disallow using a callback in async tests. */
    'jest/no-test-prefixes': ['error'],                          /* Requires usage of `.only` or `.skip` to skip tests (over the old `f` and `x` prefixes). */
    'jest/no-test-return-statement': ['error'],                  /* Disallow explicitly returning from tests. */
    'jest/prefer-called-with': ['error'],                        /* Requires usage of `toBeCalledWith()` or `toHaveBeenCalledWith()` over `toBeCalled()`. */
    'jest/prefer-expect-assertions': ['error'],                  /* Requires usage of `expect.assertions()` or `expect.hasAssertions()` at the beginning of each test. */
    'jest/prefer-hooks-on-top': ['error'],                       /* Requires hooks to be defined before any test cases. */
    'jest/prefer-spy-on': 'off',                                 /* If enabled, this would suggest using `jest.spyOn()` vs. `jest.fn()`. */
    'jest/prefer-strict-equal': ['error'],                       /* Enforces usage of `toStrictEqual()` over `toEqual()`. */
    'jest/prefer-to-be-null': ['error'],                         /* Enforces usage of `toBeNull()` over `toBe(null)`, `toEqual(null)`, or `toStrictEqual(null)`. */
    'jest/prefer-to-be-undefined': ['error'],                    /* Enforces usage of `toBeUndefined()` over `toBe(undefined)`, `toEqual(undefined)`, or `toStrictEqual(undefined)`. */
    'jest/prefer-to-contain': ['error'],                         /* Enforces usage of `toCintain()` over `toBe()`, `toEqual()`, or `toStrictEqual()`. */
    'jest/prefer-to-have-length': ['error'],                     /* Enforces usage of `toHaveLength()` over `toBe()`, `toEqual()`, or `toStrictEqual()`. */
    'jest/prefer-todo': ['warn'],                                /* Warn and suggest `test.todo` if an empty test is detected. */
    'jest/require-to-throw-message': 'off',                      /* If enabled, this would require a message to expect for each `toThrow()` call. */
    'jest/require-top-level-describe': ['error'],                /* Enforces that all test cases and hooks are inside a `describe` block. */
    'jest/valid-describe': ['error'],                            /* Enforces that each `describe` callback is not async, does not have any parameters, and does not contain a `return` statement. */
    'jest/valid-expect': ['error', {                             /* Enforces valid `expect()` usage. */
        'alwaysAwait': true,
        'minArgs': 1,
        'maxArgs': 1,
    }],
    'jest/valid-expect-in-promise': ['error'],                   /* Enforces having a return statement when testing with promises. */
    'kest/valid-title': ['error', {                              /* Enforces valid titles. */
        'ignoreTypeOfDescribeName': false,
    }],
};
