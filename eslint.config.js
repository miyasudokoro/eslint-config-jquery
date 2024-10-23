import jquery from "./index.js";
import globals from "globals";

export default [
    jquery,
	{
		"files": [ "test/**" ],
		"languageOptions": {
			"globals": {
				...globals.amd,
				...globals.browser
			}
		}
	}
];
