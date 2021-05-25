module.exports = {
  preset: "jest",
  setupFiles: [
    "<rootDir>/node_modules/react-native/jest/setup.js",
    "<rootDir>/test/setup.ts",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/e2e"],
};
