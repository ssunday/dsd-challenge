module.exports = {
  resetMocks: true,
  automock: false,
  setupFilesAfterEnv: [
    "<rootDir>/__tests__/__config__/setup.js"
  ],
  moduleNameMapper: {
    "\\.(png|svg|otf)$": "<rootDir>/__tests__/__config__/stub.js"
  },
  moduleDirectories: [
    "node_modules",
    "app/javascript/src",
    "__tests__",
    "types",
    "<rootDir>"
  ],
  testRegex: "__tests__/.*\\.test\\.jsx?$",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/"
  ]
};
