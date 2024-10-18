import jquery from "./index.js";
import globals from "globals";

export default [
    {
        "languageOptions": {
            "globals": {
                ...globals.amd,
                ...globals.browser
            }
        }
    },
    jquery
];
