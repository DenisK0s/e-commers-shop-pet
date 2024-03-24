const isStictCheck = mode => {
  return mode === "strict" ? 2 : 1;
};

module.exports = {
  root: true,
  plugins: ["@typescript-eslint", "no-comments"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [".eslintrc.js"],
  overrides: [],
  rules: {
    "@typescript-eslint/no-unused-vars": 1,
    "react/jsx-key": isStictCheck(process.env.LINT_MODE),
    "no-console": isStictCheck(process.env.LINT_MODE),
    "react/no-unused-prop-types": 1,
    "no-comments/disallowComments": [
      "error",
      {
        allow: ["TODO", "FIXME", "NOTE", "DEBUG"],
      },
    ],
  },
};
