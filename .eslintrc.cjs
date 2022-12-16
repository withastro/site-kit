module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-recommended",
  ],
  plugins: ["prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    extraFileExtensions: [".astro"],
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-redeclare": "warn",
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "no-useless-rename": "error",
    "object-shorthand": "error",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {},
    },
  ],
}
