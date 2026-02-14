import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,   // règles ESLint de base
  {
    languageOptions: {
      globals: {
        ...globals.browser,  // définit window, document, etc.
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": "error", // interdit les variables non utilisées
      "no-undef": "error",        // interdit les variables non définies
      "semi": ["error", "always"] // force le point-virgule
    },
  },
];
