import { defineConfig } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("plugin:react/recommended", "plugin:@typescript-eslint/recommended"),

    plugins: {
        "@typescript-eslint": typescriptEslint,
        react,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 2015,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "@typescript-eslint/no-var-requires": "off",  // To avoid of error: "Require statement not part of import statement", if ES modules are used
        semi: ["error", "always"],
        quotes: ["error", "double"],
        indent: "off",
        "no-fallthrough": "off",   // disallow fallthrough of case statements

        "no-multiple-empty-lines": [1, {
            max: 2,
        }],   // disallow multiple empty lines (off by default)

        "no-nested-ternary": 1,  // disallow nested ternary expressions (off by default)
        eqeqeq: 2,  // require the use of === and !==
        "react/prop-types": "off", // Prevent missing props validation in a React component definition
    },
}]);