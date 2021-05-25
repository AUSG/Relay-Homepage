module.exports = {
  moduleNameMapper: {
    "^@ausg/(.*)$": "<rootDir>/src/$1",
    "^@root/(.*)$": "<rootDir>/$1",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
};
