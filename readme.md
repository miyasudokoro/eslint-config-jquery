# jQuery ESLint config

## Usage

```sh
npm install --save-dev eslint-config-jquery
```

Version 4.0.0 and above work for ESLint version 9.0.0 and above. Use version 3.0.2 for older ESLint versions.

In your eslint.config file, import it and add it to your flat config array.

```javascript
import jquery from "eslint-config-jquery";

export default [
    // ... any other configurations,
    jquery,
    // ... any other configurations
];

```

## Status

This config follows the spirit of the jQuery [code style](https://contribute.jquery.org/style-guide/js/), does not violate it and extends it.

## Semver policy

Same approach as in ESLint, see https://github.com/eslint/eslint#user-content-semantic-versioning-policy.

## Testing

To avoid a circular dependency, testing copies JQuery source code into the test directory before running linting for
this project. 

