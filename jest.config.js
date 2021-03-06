module.exports = {
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).js"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  globalTeardown: "./test-teardown.js",
  moduleNameMapper: {
    "@root": "<rootDir>",
  },
};
