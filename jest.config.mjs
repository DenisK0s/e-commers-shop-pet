import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: ".",
});

/** @type {import('jest').Config} */
const config = {
  collectCoverageFrom: [
    "src/app/**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/*.types.ts",
    "!**/node_modules/**",
  ],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/", "<rootDir>/.vscode/"],
};

export default createJestConfig(config);
