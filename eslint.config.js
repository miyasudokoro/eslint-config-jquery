import jquery from "./index.js";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin-js";

export default [
	jquery,
	{
		files: [ "!test/**" ],
		plugins: {
			"@stylistic/js": stylistic
		},
		rules: {
			"@stylistic/js/indent": [ "error", "tab" ],
			"@stylistic/js/quote-props": [ "error", "as-needed" ]
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
	}
];
