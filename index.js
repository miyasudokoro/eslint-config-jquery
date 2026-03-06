import stylistic from "@stylistic/eslint-plugin";

export default {
	plugins: {
		"@stylistic": stylistic
	},
	rules: {
		"no-unsafe-negation": "error",
		"no-cond-assign": [ "error", "except-parens" ],
		curly: [ "error", "all" ],
		"@stylistic/object-curly-spacing": [ "error", "always" ],
		"@stylistic/computed-property-spacing": [ "error", "always" ],
		"@stylistic/array-bracket-spacing": [ "error", "always" ],
		eqeqeq: [ "error", "smart" ],
		"no-unused-expressions": "error",
		"no-sequences": "error",
		"no-nested-ternary": "error",
		"no-unreachable": "error",
		"@stylistic/wrap-iife": [ "error", "inside" ],
		"no-caller": "error",
		"@stylistic/quotes": [ "error", "double" ],
		"no-undef": "error",
		"no-unused-vars": [
			"error",
			{
				args: "all",
				argsIgnorePattern: "^_",
				caughtErrors: "none"
			}
		],
		"@stylistic/operator-linebreak": [ "error", "after" ],
		"@stylistic/comma-style": [ "error", "last" ],
		camelcase: [
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
		"@stylistic/max-len": [
			"error",
			{
				code: 100,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreRegExpLiterals: true
			}
		],
		"@stylistic/no-mixed-spaces-and-tabs": "error",
		"@stylistic/no-trailing-spaces": "error",
		"no-irregular-whitespace": "error",
		"no-multi-str": "error",
		"@stylistic/comma-dangle": [ "error", "never" ],
		"@stylistic/comma-spacing": [
			"error",
			{
				before: false,
				after: true
			}
		],
		"@stylistic/space-before-blocks": [ "error", "always" ],
		"@stylistic/space-in-parens": [ "error", "always" ],
		"@stylistic/keyword-spacing": [ 2 ],
		"@stylistic/template-curly-spacing": [ "error", "always" ],
		"@stylistic/semi": [ "error", "always" ],
		"@stylistic/semi-spacing": [
			"error",
			{

				// Because of the `for ( ; ...)` requirement
				// before: true,
				after: true
			}
		],
		"@stylistic/no-extra-semi": "error",
		"@stylistic/space-infix-ops": "error",
		"@stylistic/eol-last": "error",
		"@stylistic/lines-around-comment": [
			"error",
			{
				beforeLineComment: true
			}
		],
		"@stylistic/linebreak-style": [ "error", "unix" ],
		"no-with": "error",
		"@stylistic/brace-style": "error",
		"@stylistic/space-before-function-paren": [ "error", {
			anonymous: "never",
			named: "never",
			asyncArrow: "never",
			catch: "always"
		} ],
		"no-loop-func": "error",
		"@stylistic/function-call-spacing": [ "error", "never" ],
		"@stylistic/key-spacing": [
			"error",
			{
				beforeColon: false,
				afterColon: true
			}
		],
		"@stylistic/space-unary-ops": [
			"error",
			{
				words: false,
				nonwords: false
			}
		],
		"@stylistic/no-multiple-empty-lines": 2
	}
};
