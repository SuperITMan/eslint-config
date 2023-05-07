module.exports = {
	extends: ["../typescript"],
	rules: {
		"@angular-eslint/component-selector": "off",
		"@typescript-eslint/explicit-function-return-type": [
			"error",
			{
				allowExpressions: false,
				allowTypedFunctionExpressions: false,
				allowHigherOrderFunctions: false,
				allowDirectConstAssertionInArrowFunctions: true,
				allowConciseArrowFunctionExpressionsStartingWithVoid: true
			}
		],
		// FIXME why error only for spec files and not all of them ??
		// Documentation is usually not present in spec files but in the code itself
		"jsdoc/check-indentation": "error",
		"jsdoc/newline-after-description": "error",
		// FIXME Why using `no-useless-constructor` for spec files and not `@typescript-eslint/no-useless-constructor` ?
		"no-useless-constructor": "error",
		"@typescript-eslint/no-useless-constructor": "off"
	}
};
