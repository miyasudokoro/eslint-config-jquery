# jQuery ESLint config

## Usage

```sh
npm install --save-dev eslint-config-jquery
```

Version 4.0.0 or newer work with ESLint version 9.0.0 or newer and require using the flat config. Use version 3.x for older ESLint versions.

In your `eslint.config file`, import it and add it to your flat config array.

```javascript
import jquery from "eslint-config-jquery";

export default [
    // ... any other configurations,
    jquery,
    // ... any other configurations
];

```

## Updating fixtures

To update the fixtures for testing this configuration from jQuery source code, run script `copy-fixtures`. 
This should be done whenever updating the version of jQuery that is found in the devDependencies.

## Status

This config follows the spirit of the jQuery [code style](https://contribute.jquery.org/style-guide/js/), does not violate it and extends it.

## Semver policy

Same approach as in ESLint, see https://github.com/eslint/eslint#user-content-semantic-versioning-policy.
