module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/strict",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"],
  },
  env: {
    es6: true,
    browser: true,
  },
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  settings: {
    "svelte3/typescript": require("typescript"),
    // ignore style tags in Svelte because of Tailwind CSS
    // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
    "svelte3/ignore-styles": () => true,
  },
  plugins: ["svelte3", "@typescript-eslint"],
  ignorePatterns: ["node_modules", ".eslintrc.js", "jest.config.js", "rollup.config.js"],
  rules: {
    quotes: "off",
    "@typescript-eslint/quotes": ["error"],
    semi: "off",
    "@typescript-eslint/semi": ["error"],
  },
};
