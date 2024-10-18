
import stylistic from "@stylistic/eslint-plugin-js";

export default {
	plugins: {
		"@stylistic/js": stylistic
	},
	rules: {
		"no-unsafe-negation": "error",
		"no-cond-assign": [ "error", "except-parens" ],
		"curly": [ "error", "all" ],
		"@stylistic/js/object-curly-spacing": [ "error", "always" ],
		"@stylistic/js/computed-property-spacing": [ "error", "always" ],
		"@stylistic/js/array-bracket-spacing": [ "error", "always" ],
		"eqeqeq": [ "error", "smart" ],
		"no-unused-expressions": "error",
		"no-sequences": "error",
		"no-nested-ternary": "error",
		"no-unreachable": "error",
		"@stylistic/js/wrap-iife": [ "error", "inside" ],
		"no-caller": "error",
		"@stylistic/js/quotes": [ "error", "double" ],
		"no-undef": "error",
		"no-unused-vars": [
			"error",
			{
				args: "all",
				argsIgnorePattern: "^_",
				caughtErrors: "none"
			}
		],
		"@stylistic/js/operator-linebreak": [ "error", "after" ],
		"@stylistic/js/comma-style": [ "error", "last" ],
		"camelcase": [
			"error",
			{
				properties: "never"
			}
		],
		"dot-notation": [
			"error",
			{
				allowPattern: "^[a-z]+(_[a-z]+)+$"
			}
		],
		"@stylistic/js/max-len": [
			"error",
			{
				code: 100,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreRegExpLiterals: true
			}
		],
		"@stylistic/js/no-mixed-spaces-and-tabs": "error",
		"@stylistic/js/no-trailing-spaces": "error",
		"no-irregular-whitespace": "error",
		"no-multi-str": "error",
		"@stylistic/js/comma-dangle": [ "error", "never" ],
		"@stylistic/js/comma-spacing": [
			"error",
			{
				before: false,
				after: true
			}
		],
		"@stylistic/js/space-before-blocks": [ "error", "always" ],
		"@stylistic/js/space-in-parens": [ "error", "always" ],
		"@stylistic/js/keyword-spacing": [ 2 ],
		"@stylistic/js/template-curly-spacing": [ "error", "always" ],
		"@stylistic/js/semi": [ "error", "always" ],
		"@stylistic/js/semi-spacing": [
			"error",
			{

				// Because of the `for ( ; ...)` requirement
				// before: true,
				after: true
			}
		],
		"@stylistic/js/no-extra-semi": "error",
		"@stylistic/js/space-infix-ops": "error",
		"@stylistic/js/eol-last": "error",
		"@stylistic/js/lines-around-comment": [
			"error",
			{
				beforeLineComment: true
			}
		],
		"@stylistic/js/linebreak-style": [ "error", "unix" ],
		"no-with": "error",
		"@stylistic/js/brace-style": "error",
		"@stylistic/js/space-before-function-paren": [ "error", "never" ],
		"no-loop-func": "error",
		"@stylistic/js/function-call-spacing": [ "error", "never" ],
		"@stylistic/js/key-spacing": [
			"error",
			{
				beforeColon: false,
				afterColon: true
			}
		],
		"@stylistic/js/space-unary-ops": [
			"error",
			{
				words: false,
				nonwords: false
			}
		],
		"@stylistic/js/no-multiple-empty-lines": 2
	}
};
