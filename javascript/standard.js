module.exports = {
	// Possible Errors
	'for-direction': ['error'],                                  /* Enforce "for" loop update clause moving the counter in the right direction. */
	'getter-return': ['error'],                                  /* Enforce `return` statements in getters. */
	'no-async-promise-executor': ['error'],                      /* Disallow using an async function as a Promise executor. */
	'no-await-in-loop': 'off',                                   /* If enabled, this would disallow `await` inside of loops. */
	'no-compare-neg-zero': ['error'],                            /* Disallow comparing against -0. */
	'no-cond-assign': ['error', 'except-parens'],                /* Disallow assignment operators in conditional statements. */
	'no-console': ['error'],                                     /* Disallow the use of `console`. */
	'no-constant-condition': ['error'],                          /* Disallow constant expressions in conditions. */
	'no-control-regex': ['error'],                               /* Disallow control characters in regular expressions. */
	'no-debugger': ['error'],                                    /* Disallow the use of `debugger`. */
	'no-dupe-args': ['error'],                                   /* Disallow duplicate arguments in `function` definitions. */
	'no-dupe-else-if': ['error'],                                /* Disallow duplicate conditions in `if-else-if` chains. */
	'no-dupe-keys': ['error'],                                   /* Disallow duplicate keys in object literals. */
	'no-duplicate-case': ['error'],                              /* Disallow a duplicate case label. */
	'no-empty': ['error', {                                      /* Disallow empty block statements. */
		'allowEmptyCatch': true,
	}],
	'no-empty-character-class': ['error'],                       /* Disallow empty character classes in regular expressions. */
	'no-ex-assign': ['error'],                                   /* Disallow reassigning exceptions in `catch` clauses. */
	'no-extra-boolean-cast': ['error', {                         /* Disallow unnecessary boolean casts. */
		'enforceForLogicalOperands': false,
	}],
	'no-extra-parens': 'off',                                    /* Disallow unnecessary paretheses. */
	'no-extra-semi': ['error'],                                  /* Disallow unnecessary semicolons. */
	'no-func-assign': ['error'],                                 /* Disallow reassigning `function` declarations. */
	'no-import-assign': ['error'],                               /* Disallow assigning to imported bindings. */
	'no-inner-declarations': ['error', 'functions'],             /* Disallow variable or `function` declarations in nested blocks. */
	'no-invalid-regexp': ['error'],                              /* Disallow invalid regular expression strings in `RegExp` constructors. */
	'no-irregular-whitespace': ['error', {                       /* Disallow irregular whitespace. */
		'skipStrings': true,
		'skipComments': false,
		'skipRegExps': false,
		'skipTemplates': false,
	}],
	'no-loss-of-precision': ['warn'],                            /* Warn for number literals that lose precision. */
	'no-misleading-character-class': ['error'],                  /* Disallow characters which are made with multiple code points in character class syntax. */
	'no-obj-calls': ['error'],                                   /* Disallow calling global object properties as functions. */
	'no-promise-executor-return': ['error'],                     /* Disallow returning values from Promise executor functions. */
	'no-prototype-builtins': ['error'],                          /* Disallow use of Object.prototypes builtins directly. */
	'no-regex-spaces': ['error'],                                /* Disallow multiple spaces in regular expressions. */
	'no-setter-return': ['error'],                               /* Disallow returning values from setters. */
	'no-sparse-arrays': ['error'],                               /* Disallow sparse arrays. */
	'no-template-curly-in-string': ['error'],                    /* Disallow template literal placeholder syntax in regular strings. */
	'no-unexpected-multiline': ['error'],                        /* Disallow confusing multiline expressions. */
	'no-unreachable': ['error'],                                 /* Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements. */
	'no-unreachable-loop': 'off',                                /* If enabled, this would disallow loops with a body that allows only one iteration. */
	'no-unsafe-finally': ['error'],                              /* Disallow control flow statements in `finally` blocks. */
	'no-unsafe-negation': ['error', {                            /* Disallow negating the left operand of relational operators. */
		'enforceForOrderingRelations': false,
	}],
	'no-useless-backreference': 'off',                           /* Disallow useless backreferences in regular expressions. */
	'require-atomic-updates': 'off',                             /* Disallow assignments that can lead to race conditions due to usage of `await` or `yield`. Seems prone to false positives? */
	'use-isnan': ['error', {                                     /* Require calls to `isNaN()` when checking for `NaN`. */
		'enforceForSwitchCase': true,
		'enforceForIndexOf': true,
	}],
	'valid-typeof': ['error', {                                  /* Enforce comparing `typeof` expressions against valid strings. */
		'requireStringLiterals': true,
	}],

	// Best Practices
	'access-pairs': 'off',                                       /* If enabled, this would enforce getter and setter pairs in objects and classes. */
	'array-callback-return': ['error', {                         /* Enforces return statements in callbacks of array's methods. */
		'allowImplicit': false,
		'checkForEach': true,
	}],
	'block-scoped-var': ['error'],                               /* Enforce the use of variables within the scope they are defined. */
	'class-methods-use-this': 'off',                             /* If enabled, this would enforce that class methods utilize `this`. */
	'complexity': 'off',                                         /* If enabled, this would enforce a maximum cyclomatic complexity allowed in a program. */
	'consistent-return': ['error', {                             /* Require `return` statements to always specify consistent values. */
		'treatUndefinedAsUnspecified': false,
	}],
	'curly': ['error', 'all'],                                   /* Enforce consistent brace style for all control statements. */
	'default-case': 'off',                                       /* If enabled, this would require `default` cases in `switch` statements. */
	'default-case-last': ['error'],                              /* Enforce default clauses in switch statements to be last. */
	'default-param-last': ['error'],                             /* Enforce default parameters to be last. */
	'dot-location': ['error', 'property'],                       /* Enforce consistent newlines before dots. */
	'dot-notation': ['error', {                                  /* Enforce dot notation whenever possible. */
		'allowKeywords': true,
	}],
	'eqeqeq': ['error'],                                         /* Require the use of `===` and `!==`. */
	'grouped-accessor-pairs': ['error', 'getBeforeSet'],         /* Require grouped accessor pairs in object literals and classes. */
	'guard-for-in': 'off',                                       /* If enabled, this would require `for-in` loops to include an `if` statement. */
	'max-classes-per-file': 'off',                               /* If enabled, this would enforce a maximum number of classes per file. */
	'no-alert': 'off',                                           /* If enabled, this would disallow the use of `alert`, `confirm`, and `prompt`. */
	'no-caller': ['error'],                                      /* Disallow the use of `arguments.caller` or `arguments.callee`. */
	'no-case-declarations': ['error'],                           /* Disallow lexical declarations in case clauses. */
	'no-constructor-return': ['error'],                          /* Disallow returning value from constructor. */
	'no-div-regex': 'off',                                       /* If enabled, this would disallow division operators explicitly at the beginning of regular expressions. */
	'no-else-return': ['error', {                                /* Disallow `else` blocks after `return` statements in `if` statements. */
		'allowElseIf': false,
	}],
	'no-empty-function': ['error', {                             /* Disallow empty functions. Empty constructors are allowed. */
		'allow': ['constructors'],
	}],
	'no-empty-pattern': ['error'],                               /* Disallow empty destructuring patterns. */
	'no-eq-null': ['error'],                                     /* Disallow `null` comparisons without type-checking operators. */
	'no-eval': ['error', {                                       /* Disallow the use of `eval()`. */
		'allowIndirect': true,
	}],
	'no-extend-native': 'off',                                   /* If enabled, this would disallow extending of native types. This is disabled because of Angular polyfills. */
	'no-extra-bind': ['error'],                                  /* Disallow unnecessary calls to `.bind()`. */
	'no-extra-label': 'off',                                     /* If enabled, this would disallow unnecessary labels. This is disabled because we're disabling labels globally anyways. */
	'no-fallthrough': ['error'],                                 /* Disallow fallthrough of `case` statements. */
	'no-floating-decimal': ['error'],                            /* Disallow leading or trailing decimal points in numeric literals. */
	'no-global-assign': ['error'],                               /* Disallow assignments to native objects or read-only global variables. */
	'no-implicit-coercion': ['error', {                          /* Disallow shorthand type conversions. */
		'boolean': true,
		'number': true,
		'string': true,
	}],
	'no-implicit-globals': ['error', {                           /* Disallow declarations in the global scope. */
		'lexicalBindings': false,
	}],
	'no-implied-eval': ['error'],                                /* Disallow the use of `eval()`-like methods. */
	'no-invalid-this': ['error', {                               /* Disallow `this` keywords outside of classes or class-like objects. */
		'capIsConstructor': true,
	}],
	'no-iterator': 'off',                                        /* If enabled, this would disallow the use of the `__iterator__` property. Probably will never be an issue. */
	'no-labels': ['error', {                                     /* Disallow labeled statements. */
		'allowLoop': false,
		'allowSwitch': false,
	}],
	'no-lone-blocks': 'off',                                     /* If enabled, this would disallow unnecessary nested blocks. Probably will never be an issue. */
	'no-loop-func': ['error'],                                   /* Disallow function declarations that contain unsafe references inside loop statements. */
	'no-magic-numbers': 'off',                                   /* If enabled, this would disallow magic numbers. */
	'no-multi-spaces': ['error', {                               /* Disallow multiple spaces. */
		'ignoreEOLComments': true,
		'exceptions': {
			'Property': true,
		},
	}],
	'no-multi-str': ['error'],                                   /* Disallow multiline strings using a lesser-documented method. */
	'no-new': 'off',                                             /* If enabled, this would disallow `new` operators outside of assignments or comparisons. */
	'no-new-func': ['error'],                                    /* Disallow `new` operators with the `Function` object. */
	'no-new-wrappers': ['error'],                                /* Disallow `new` operators with the `String`, `Number`, and `Boolean` objects. */
	'no-octal': ['error'],                                       /* Disallow octal literals. Don't really agree with this, but if it's deprecated in ES5, then so be it. */
	'no-octal-escape': ['error'],                                /* Disallow octal escape sequences in string literals. */
	'no-param-reassign': ['error', {                             /* Disallow reassigning `function` parameters. */
		'props': false,
	}],
	'no-proto': 'off',                                           /* If enabled, this would disallow the use of the `__proto__` property. Probably will never be an issue. */
	'no-redeclare': ['error', {                                  /* Disallow variable redeclaration. */
		'builtinGlobals': true,
	}],
	'no-restricted-properties': 'off',                           /* Disallow certain properties on certain objects. */
	'no-return-assign': ['error', 'always'],                     /* Disallow assignment operators in `return` statements. */
	'no-return-await': 'off',                                    /* If enabled, this would disallow unnecessary `return await`. */
	'no-script-url': ['error'],                                  /* Disallow `javascript:` urls. */
	'no-self-assign': ['error', {                                /* Disallow assignments where both sides are exactly the same. */
		'props': true,
	}],
	'no-self-compare': ['error'],                                /* Disallow comparisons where both sides are exactly the same. */
	'no-sequences': ['error'],                                   /* Disallow comma operators. */
	'no-throw-literal': ['error'],                               /* Disallow throwing literals as exceptions. */
	'no-unmodified-loop-condition': ['error'],                   /* Disallow unmodified loop conditions. */
	'no-unused-expressions': ['error', {                         /* Disallow unused expressions. */
		'allowShortCircuit': false,
		'allowTernary': false,
		'allowTaggedTemplates': false,
	}],
	'no-unused-labels': ['error'],                               /* Disallow unused labels. */
	'no-useless-call': ['error'],                                /* Disallow unnecessary calls to `.call()` and `.apply()`. */
	'no-useless-catch': ['error'],                               /* Disallow unnecessary `catch` clauses. */
	'no-useless-concat': ['error'],                              /* Disallow unnecessary concatentation of literals or template literals. */
	'no-useless-escape': ['error'],                              /* Disallow unnecessary escape characters. */
	'no-useless-return': ['error'],                              /* Disallow redundant return statements. */
	'no-void': ['error', {                                       /* Disallow `void` operators. */
		'allowAsStatement': true,                                /* Must be true for compatibility with @typescript-eslint/no-floating-promises void exception. */
	}],
	'no-warning-comments': 'off',                                /* If enabled, this would disallow specified warning terms in comments. */
	'no-with': ['error'],                                        /* Disallow `with` statements. */
	'prefer-named-capture-group': 'off',                         /* If enabled, this would enforce using named capture group in regular expressions. */
	'prefer-promise-reject-errors': ['error', {                  /* Require using Error objects as Promise rejection reasons. */
		'allowEmptyReject': false,
	}],
	'prefer-regex-literals': ['error', {                         /* Disallow use of the `RegExp` constructor in favor of regular expression literals. */
		'disallowRedundantWrapping': true,
	}],
	'radix': 'off',                                              /* Enforce the consistent use of the radix argument when using `parseInt()`. */
	'require-await': ['error'],                                  /* Disallow async functions which have no `await` expression. */
	'require-unicode-regexp': ['error'],                         /* Enforce the use of `u` flag on RegExp. */
	'vars-on-top': 'off',                                        /* Require `var` declarations to be placed at the top of their containing scope. */
	'wrap-iife': ['error', 'outside', {                          /* Require parentheses around immediate `function` invocations. */
		'functionPrototypeMethods': false,
	}],
	'yoda': ['error', 'never', {                                 /* Require or disallow "Yoda" conditions. */
		'exceptRange': false,
		'onlyEquality': false,
	}],

	// Strict Mode
	'strict': 'off',                                             /* If enabled, this would require or disallow strict mode directives. */

	// Variables
	'init-declarations': 'off',                                  /* If enabled, this would require or disallow initializations in variable declarations. */
	'no-delete-var': ['error'],                                  /* Disallow deleting variables. */
	'no-label-var': ['error'],                                   /* Disallow labels that share a name with a variables. */
	'no-restricted-globals': ['error', {                         /* Disallow specified global variables. */
		'name': 'fdescribe',
		'message': 'Use "describe" instead.',
	},
	{
		'name': 'xdescribe',
		'message': 'Use "describe" instead.',
	},
	{
		'name': 'fit',
		'message': 'Use "it" instead.',
	},
	{
		'name': 'xit',
		'message': 'Use "it" instead.',
	}],
	'no-shadow': ['error', {                                     /* Disallow variable declarations from shadowing variables declared in the outer scope. */
		'builtinGlobals': true,
		'hoist': 'functions',
	}],
	'no-shadow-restricted-names': ['error'],                     /* Disallow identifiers from shadowing restricted names. */
	'no-undef': ['error', {                                      /* Disallow unused variables. */
		'typeof': false,
	}],
	'no-undef-init': ['error'],                                  /* Disallow initializing variables to `undefined` explicitly. */
	'no-undefined': ['error'],                                   /* Disallow the use of `undefined` as an indentifier. */
	'no-unused-vars': ['error', {                                /* Disallow unused variables. */
		'vars': 'all',
		'args': 'after-used',
		'ignoreRestSiblings': false,
		'caughtErrors': 'all',
	}],
	'no-use-before-define': 'off',                               /* If enabled, this would disallow the use of variables before they are used. We cannot use this as we have rules enforcing alphabetical order for declarations. */

	// Stylistic Issues
	'array-bracket-newline': 'off',                              /* If enabled, this would enforce linebreaks after opening and before closing array brackets. */
	'array-bracket-spacing': ['error', 'never', {                /* Enforce consistent spacing inside array bracket. */
		'singleValue': false,
		'objectsInArrays': false,
		'arraysInArrays': false,
	}],
	'array-element-newline': 'off',                              /* If enabled, this would enforce line breaks between array elements. */
	'block-spacing': ['error', 'always'],                        /* Enforce spaces inside of blocks after opening block and before closing block. */
	'brace-style': ['error', '1tbs'],                            /* Enforce consistent brace style for blocks. */
	'camelcase': ['warn', {                                      /* Enforce camelcase naming convention. There are lots of libraries that don't follow this convention that require input in snake case, so this is a warning. */
		'properties': 'always',
		'ignoreDestructuring': true,
		'ignoreImports': true,
		'ignoreGlobals': true,
	}],
	'capitalized-comments': 'off',                               /* If enabled, this would enforce or disallow capitalization of the first letter of a comment. */
	'comma-dangle': ['error', 'only-multiline'],                 /* Require trailing commas on on multiline. Disallow trailing commas on single line. */
	'comma-spacing': ['error', {                                 /* Enforce consistent spacing before and after commas. */
		'before': false,
		'after': true,
	}],
	'comma-style': ['error', 'last'],                            /* Enforce consistent comma style. */
	'computed-property-spacing': ['error', 'never'],             /* Enforce consistent spacing inside computed property brackets. */
	'consistent-this': 'off',                                    /* If enabled, this would enforce consistent naming when capturing the current execution context. */
	'eol-last': ['error', 'always'],                             /* Require newline at the end of files. */
	'func-call-spacing': ['error', 'never'],                     /* Disallow spacing between function identifiers and their invocations. */
	'func-name-matching': ['error', {                            /* Require function names to match the name of the variable or property to which they are assigned. */
		'considerPropertyDescriptor': false,
		'includeCommonJSModuleExports': false,
	}],
	'func-names': ['error', 'as-needed', {                       /* Require namemd `function` expressions as needed. */
		'generators': 'as-needed',
	}],
	'function-call-argument-newline': 'off',                     /* If enabled, this would enforce line breaks between arguments of a function call. */
	'function-paren-newline': 'off',                             /* If enabled, this would enforce consistent line breaks inside function parentheses. */
	'id-denylist': ['error', 'foo', 'bar'],                      /* Disallow specified identifiers. */
	'id-length': 'off',                                          /* If enabled, this would enforce minimum and maximum identifier lengths. */
	'id-match': 'off',                                           /* If enabled, this would require identifiers to match a specified regular expression. */
	'implicit-arrow-linebreak': ['error', 'beside'],             /* Enforce that the arrow function body is beside the arrow itself. */
	'indent': ['error', 'tab', {                                 /* Enforce consistent indentation. May be buggy. */
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
	'jsx-quotes': ['error', 'prefer-double'],                    /* Enforce the consistent use of either double or single quotes in JSX attributes. */
	'key-spacing': ['error', {                                   /* Enforce consistent spacing before and after keywords. */
		'beforeColon': false,
		'afterColon': true,
		'mode': 'strict',
	}],
	'line-comment-position': 'off',                              /* If turned on, this would enforce position of line comments. */
	'linebreak-style': ['error', 'unix'],                        /* Enforce consistent linebreak style. */
	'lines-around-comment': ['error', {                          /* Require empty lines around comments. */
		'beforeBlockComment': true,
		'beforeLineComment': true,
		'allowBlockStart': true,
		'allowBlockEnd': false,
		'allowClassStart': true,
		'allowClassEnd': false,
		'allowObjectStart': true,
		'allowObjectEnd': true,
		'allowArrayStart': true,
		'allowArrayEnd': true,
	}],
	'max-depth': 'off',                                          /* If enabled, this would enforce a maximum depth that blocks can be nested. */
	'max-len': ['error', {                                       /* Enforce a maximum line length. */
		'code': 150,
		'tabWidth': 4,
		'ignoreComments': false,
		'ignoreTrailingComments': false,
		'ignoreUrls': false,
		'ignoreStrings': false,
		'ignoreTemplateLiterals': false,
		'ignoreRegExpLiterals': false,
	}],
	'max-lines': 'off',                                          /* If enabled, this would enforce a maximum number of lines per file. */
	'max-lines-per-function': 'off',                             /* If enabled, this would enforce a maximum number of lines of code in a function. */
	'max-nested-callbacks': 'off',                               /* If enabled, this would enforce a maximum depth that callbacks can be nested. */
	'max-params': 'off',                                         /* If enabled, this would enforce a maximum number of parameters in function definitions. */
	'max-statements': 'off',                                     /* If enabled, this would enforce a maximum number of statements allows in function blocks. */
	'max-statements-per-line': ['error', {                       /* Enforce a maximum number of statements allowed per line. */
		'max': 1,
	}],
	'multiline-comment-style': 'off',                            /* If enabled, this would enforce a particular style for multiline comments. */
	'multiline-ternary': 'off',                                  /* If enabled, this would enforce newlines between operands of ternary expressions. */
	'new-cap': 'off',                                            /* Require constructor names to begin with a capital letter. Prone to false positives. */
	'new-parens': ['error', 'always'],                           /* Require parentheses when invoking a constructor with no arguments. */
	'newline-per-chained-call': ['error', {                      /* Require a newline after each call in a method chain. */
		'ignoreChainWithDepth': 2,
	}],
	'no-array-constructor': ['error'],                           /* Disallow `Array` constructors. */
	'no-bitwise': 'off',                                         /* If enabled, this would disallow bitwise operators. */
	'no-continue': 'off',                                        /* If enabled, this would disallow `continue` statements. */
	'no-inline-comments': 'off',                                 /* If enabled, this would disallow inline comments after code. */
	'no-lonely-if': ['error'],                                   /* Disallow `if` statements as the only statement in `else` blocks. */
	'no-mixed-operators': ['warn', {                             /* Disallow mixed binary operators. */
		'allowSamePrecedence': true,
	}],
	'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],         /* Disallow mixed spaces and tabs for indentation. */
	'no-multi-assign': ['error'],                                /* Disallow use of chained assignment expressions. */
	'no-multiple-empty-lines': ['error', {                       /* Disallow multiple empty lines. */
		'max': 2,
		'maxEOF': 1,
		'maxBOF': 1,
	}],
	'no-negated-condition': ['error'],                           /* Disallow negated conditions on `if`-`else` blocks and ternary expressions. */
	'no-nested-ternary': ['error'],                              /* Disallow nested ternary expressions. */
	'no-new-object': ['error'],                                  /* Disallow `Object` constructors. */
	'no-plusplus': ['error', {                                   /* Disallow the unary operators `++` and `--` except in `for`-loops. */
		'allowForLoopAfterthoughts': true,
	}],
	'no-restricted-syntax': 'off',                               /* If enabled, this would, disallow specified syntax. */
	'no-tabs': ['error', {                                       /* Disallow all tabs except those used for indentation. */
		'allowIndentationTabs': true,
	}],
	'no-ternary': 'off',                                         /* If enabled, this would disallow all ternary operators. */
	'no-trailing-spaces': ['error', {                            /* Disallow trailing whitespace and the end of lines. */
		'skipBlankLines': false,
		'ignoreComments': false,
	}],
	'no-underscore-dangle': ['error', {                          /* Disallow dangling underscores in identifiers. */
		'allowAfterThis': true,
		'allowAfterSuper': false,
		'allowAfterThisConstructor': false,
		'enforceInMethodNames': true,
		'allowFunctionParams': false,
	}],
	'no-unneeded-ternary': ['error', {                           /* Disallow ternary operators when simpler alternatives exist. */
		'defaultAssignment': true,
	}],
	'no-whitespace-before-property': ['error'],                  /* Disallow whitespace before properties. */
	'nonblock-statement-body-position': 'off',                   /* If enabled, it would enforce the location of single-line statements. Single line statements are disabled, so this rule is not needed. */
	'object-curly-newline': 'off',                               /* If enabled, it would enforce consistent line breaks inside braces. */
	'object-curly-spacing': ['error', 'always', {                /* Enforce consistent spacing inside braces. */
		'arraysInObjects': false,                                /* Should probably be consistent with 'array-bracket-spacing'. */
		'objectsInObjects': true,
	}],
	'object-property-newline': ['error'],                        /* Enforce placing object properties on separate lines. */
	'one-var': 'off',                                            /* If enabled, it would enforce variables to be declared either together or separately in functions. `var` is disabled globally, so this is not needed. */
	'one-var-declaration-per-line': 'off',                       /* If enabled, it would require or disallow newlines around variable declarations. `var` is disabled globally, so this is not needed. */
	'operator-assignment': ['error', 'always'],                  /* Require operator shorthand where possible. */
	'operator-linebreak': ['error', 'before'],                   /* Enforce consistent linebreak style for operators. */
	'padded-blocks': 'off',                                      /* If enabled, this would require or disallow padding within blocks (newlines at the top or bottom of block). */
	'padding-line-between-statements': ['error', {               /* Require padding lines between statements (just before a return). */
		'blankLine': 'always',
		'prev': '*',
		'next': 'return',
	}],
	'prefer-exponentiation-operator': ['error'],                 /* Disallow the use of `Math.pow` in favor of the `**` operator. */
	'prefer-object-spread': 'off',                               /* If enabled, this would disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead. */
	'quote-props': ['error', 'as-needed', {                      /* Require quotes around object literal property names as needed. */
		'keywords': true,
		'unnecessary': true,
		'numbers': true,
	}],
	'quotes': ['error', 'single', {                              /* Enforce the consistent use of either backticks, double, or single quotes. */
		'avoidEscape': false,
		'allowTemplateLiterals': true,
	}],
	'semi': ['error', 'always', {                                /* Require semicolons instead of ASI. */
		'omitLastInOneLineBlock': false,
	}],
	'semi-spacing': ['error', {                                  /* Enforce consistent spacing before and after semicolons. */
		'before': false,
		'after': true,
	}],
	'semi-style': ['error', 'last'],                             /* Enforce location of semicolons. */
	'sort-keys': ['warn', 'asc', {                               /* Require object keys to be sorted. */
		'caseSensitive': true,
		'minKeys': 2,
		'natural': false,
	}],
	'sort-vars': 'off',                                          /* If enabled, this would require variables within the same declaration block to be sorted. */
	'space-before-blocks': ['error', 'always'],                  /* Enforce consistent spacing before blocks. */
	'space-before-function-paren': ['error', 'always', {         /* Enforce consistent spacing before `function` definition opening parenthesis. */
		'anonymous': 'always',
		'named': 'always',
		'asyncArrow': 'always',
	}],
	'space-in-parens': ['error', 'never'],                       /* Enforce consistent spacing inside parentheses. */
	'space-infix-ops': ['error', {                               /* Require consistent spacing around infix operators. */
		'int32Hint': false,
	}],
	'space-unary-ops': ['error', {                               /* Require consistent spacing before or after unary operators. */
		'words': true,
		'nonwords': false,
	}],
	'spaced-comment': 'off',                                     /* Enforce consistent spacing after the `//` or `/*` in a comment. Too finicky with JSDoc stuff. */
	'switch-colon-spacing': ['error', {                          /* Enforce spacing around colons of switch statements. */
		'after': true,
		'before': false,
	}],
	'template-tag-spacing': ['error', 'never'],                  /* Disallow spacing between template tags and their literals. */
	'unicode-bom': ['error', 'never'],                           /* Disallow Unicode byte order mark (BOM). */
	'wrap-regex': ['error'],                                     /* Require parentheses around regex literals. */
};
