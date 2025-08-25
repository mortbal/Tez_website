import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Prettier integration - disable formatting rules that conflict
      "prettier/prettier": "error",
      // TypeScript strict mode rules
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/prefer-const": "error",
      // React/Next.js specific rules
      "react/no-unescaped-entities": "off",
      "react/jsx-curly-brace-presence": ["error", "never"],
    },
  },
  {
    plugins: ["prettier"],
    extends: ["prettier"],
  },
];

export default eslintConfig;
