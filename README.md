# eslint-config-dgigs

Scott's opinionated eslint config, common between most of his projects.

## Usage

* **Note:** It's assumed that you are using `jest` for testing for now.

Install peer dependencies for the package:
* @typescript-eslint/eslint-plugin (>= 3.9.0)
* @typescript-eslint/parser (>= 3.9.0)
* eslint (>= 7.7.0)
* eslint-plugin-import (>= 2.22.0)
* eslint-plugin-jest (>= 23.20.0)
* eslint-plugin-jsdoc (>= 30.2.3)
* htmlhint (>= 0.14.1)

### ESLint

Simply extend the desired configuration:

```javascript
module.exports = {
    'extends': './node_modules/dgigs-lint/javascript',
    // Or...
    'extends': './node_modules/dgigs-lint/typescript',
    // Or...
    'extends': './node_modules/dgigs-lint/angular',
};
```



### HTMLHint

HTMLHint does not support rule extension functionality yet. Generate HTMLHint linting configs by using the following command:

```shell
npx dgigs-lint html
```

This will result in `.htmlhintrc` file being generated.
