module.exports = {
	/* ECMAScript 6 rules: */
	'arrow-body-style': ['error', 'as-needed'],                  /* Require braces around arrow function bodies only where needed. */
	'arrow-parens': ['error', 'as-needed'],                      /* Require parentheses around arrow function arguments where needed. */
	'arrow-spacing': ['error'],                                  /* Enforce consistent spacing before and after the arrow in arrow functions. */
	'constructor-super': ['error'],                              /* Require `super()` calls in constructors. */
	'generator-star-spacing': ['error'],                         /* Enforce consistent spacing around `*` operators in generator functions. */
	'no-class-assign': ['error'],                                /* Disallow reassigning class members. */
	'no-confusing-arrow': ['error'],                             /* Disallow arrow functions where they could be confused with comparisons. */
	'no-const-assign': ['error'],                                /* Disallow reassigning `const` variables. */
	'no-dupe-class-members': ['error'],                          /* Disallow duplicate class members. */
	'no-duplicate-imports': ['error', {                          /* Disallow duplicate module imports. */
		'includeExports': true
	}],
	'no-new-symbol': ['error'],                                  /* Disallow `new` operators with the `Symbol` object. */
	'no-restricted-exports': 'off',                              /* Disallow specified names in exports. */
	'no-restricted-imports': 'off',                              /* Disallow specified modules when loaded by `import`. */
	'no-this-before-super': ['error'],                           /* Disallow `this` / `super` before calling `super()` in constructors. */
	'no-useless-computed-key': ['error', {                       /* Disallow unnecessary computed property keys in objects and classes. */
		'enforceForClassMembers': true,
	}],
	'no-useless-constructor': ['error'],                         /* Disallow unnecessary constructors. */
	'no-useless-rename': ['error'],                              /* Disallow renaming import, export, and destructured assignments to the same name. */
	'no-var': ['error'],                                         /* Require `let` or `const` instead of `var`. */
	'object-shorthand': ['error', 'always'],                     /* Require or disallow method and property shorthand syntax for object literals. */
	'prefer-arrow-callback': 'off',                              /* Require using arrow functions for callbacks. */
	'prefer-const': ['error'],                                   /* Require `const` declarations for variables that are never reassigned after declared. */
	'prefer-destructuring': ['error'],                           /* Require destructuring from arrays and/or objects. */
	'prefer-numeric-literals': ['error'],                        /* Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexidecimal literals. */
	'prefer-rest-params': ['error'],                             /* Require rest paramters instead of `arguments`. */
	'prefer-spread': ['error'],                                  /* Require spread operators instead of `.apply()`. */
	'prefer-template': ['error'],                                /* Require template literals instead of string concatenations. */
	'require-yield': ['error'],                                  /* Require generator function to contain `yield`. */
	'rest-spread-spacing': ['error', 'never'],                   /* Enforce spacing between rest and spread operators and their expressions. */
	'sort-imports': ['error', {                                  /* Enforce sorted import declarations within modules. */
		'ignoreCase': true,
		'ignoreDeclarationSort': false,
		'ignoreMemberSort': false,
		'memberSyntaxSortOrder': [
			'none',
			'single',
			'multiple',
			'all',
		],
		'allowSeparatedGroups': false,
	}],
	'symbol-description': ['error'],                             /* Require symbol descriptions. */
	'template-curly-spacing': ['error', 'never'],                /* Disallow spacing around embedded expressions of template strings. */
	'yield-star-spacing': ['error'],                             /* Require or disallow spacing around the `*` in `yield*` expressions. */
};
