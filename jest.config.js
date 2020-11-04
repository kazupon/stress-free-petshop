module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest"
  },
  moduleNameMapper: {
    "^@\\/(.+)": "<rootDir>/src/$1"
  },
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  setupFilesAfterEnv: ["./test/setup.js"]
};
