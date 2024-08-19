// eslint-disable-next-line no-undef
module.exports = {
  // existing configuration
  extends: [
    // "expo",
    "eslint:recommended",
    "plugin:react/recommended", // if you're using React
    "plugin:@typescript-eslint/recommended", // if you're using TypeScript
    "prettier", // Add Prettier last to override conflicting rules
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error", // Shows Prettier errors as ESLint errors,
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react/jsx-key": "off",
    // other custom rules
  },
};
