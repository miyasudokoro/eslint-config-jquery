import jquery from "./index.js";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";

export default [
	jquery,
	{
		files: [ "!test/**" ],
		plugins: {
			"@stylistic": stylistic
		},
		rules: {
			"@stylistic/indent": [ "error", "tab" ],
			"@stylistic/quote-props": [ "error", "as-needed" ]
		}
	},
	{
		files: [ "test/**" ],
		languageOptions: {
			globals: {
				...globals.amd,
				...globals.browser
			}
		}
	},
	{
		files: [ "test/fixtures/src/wrapper-*.js" ],
		rules: {
			"no-unused-vars": [ "off" ],
			"no-undef": [ "off" ]
		}
	}
];
