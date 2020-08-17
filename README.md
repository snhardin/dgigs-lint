# eslint-config-dgigs

Scott's opinionated eslint config, common between most of his projects.

## Usage

* **Note:** It's assumed that you are using `jest` for testing for now.

Generate linting configs by running the following:

```shell
npx dgigs-lint <angular/typescript/javascript>
```

This will result in a `.eslintrc.json` file and, if using the angular configuration, a `.htmlhintrc` file.

Then run ESLint and HtmlHint (if applicable).
