const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,

  {
    files: ["js/src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script"
    },
    rules: {
      semi: ["warn", "always"],
      eqeqeq: "warn",
      "no-var": "warn",
      "prefer-const": "warn",
      "no-unused-vars": "warn",
      "no-redeclare": "off",
      complexity: ["warn", 4]
    }
  },

  {
    files: ["js/spec/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        Item: "readonly",
        update_quality: "readonly",
        items: "writable"
      }
    },
    rules: {
      semi: ["warn", "always"],
      eqeqeq: "warn",
      "no-var": "warn",
      "prefer-const": "warn",
      "no-unused-vars": "warn"
    }
  }
];