import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,

      },
      parserOptions: {
        ecmaVersion: 2021,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      js: pluginJs,
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-console": "warn",
      "react/react-in-jsx-scope": "off",
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
