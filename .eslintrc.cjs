module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["eslint-plugin-import-helpers", "@typescript-eslint", "react"],
  rules: {
    curly: ["error", "all"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-useless-fragment": [2, { allowExpressions: true }],
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    "import-helpers/order-imports": [
      "error",
      {
        alphabetize: {
          ignoreCase: true,
          order: "asc",
        },
        groups: [
          "/^react/",
          "/^vite/",
          "/^vitest/",
          "/^@testing-library/",
          "/^i18next/",
          "/^axios/",
          "/^msw/",
          "/^@api/",
          "/^@assets/",
          "/^@layout/",
          "/^@features/",
          "/^@providers/",
          "/^@router/",
          "/^@shared/",
          "/^@tanstack/",
          "/@aws-amplify/",
          [("parent", "sibling", "index")],
        ],
        newlinesBetween: "always",
      },
    ],
  },
};
