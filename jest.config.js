module.exports = {
  moduleDirectories: ["node_modules", "frontend"],
  testMatch: ["<rootDir>/frontend/**/*.test.ts?(x)"],
  // globals: {
  //   "ts-jest": {
  //     tsConfig: "tsconfig.json",
  //     diagnostics: false,
  //   },
  // },
  testEnvironment: "jsdom",
  // preset: "ts-jest",
};
