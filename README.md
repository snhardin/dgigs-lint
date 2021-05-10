# eslint-config-dgigs

Scott's opinionated eslint config, common between most of his projects.

## Usage

* **Note:** It's assumed that you are using `jest` for testing for now.

Install peer dependencies for the package:
* @typescript-eslint/eslint-plugin (^4.22.1)
* @typescript-eslint/parser (^4.22.1)
* eslint (^7.26.0)
* eslint-plugin-import (^2.22.1)
* eslint-plugin-jest (^24.3.6)
* eslint-plugin-jsdoc (^33.1.1)
* htmlhint (^0.14.1)

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
