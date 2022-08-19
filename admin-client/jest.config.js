const nextJext = require("next/jest");

const createJestConfig = nextJext({ dir: "./" });

const customJestConfig = {
  testEnvironment: "jsdom",
  clearMocks: true,
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};

module.exports = createJestConfig(customJestConfig);
