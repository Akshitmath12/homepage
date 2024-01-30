
  module.exports = {
    testEnvironment: "jsdom",
    testRegex: "(/__tests__/.*|(\.|/)(test|spec))\.(jsx?|tsx?)$",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    transform: {
      "^.+\.(jsx?|tsx?)$": "babel-jest",
    },
    moduleNameMapper: {
      "\.(scss|css)$": "identity-obj-proxy",
      "\.(jpg|jpeg|png|gif|svg)$": "identity-obj-proxy",
       "^components/(.*)$": "<rootDir>/src/components/$1",
"^pages/(.*)$": "<rootDir>/src/pages/$1",
"^skeleton/(.*)$": "<rootDir>/src/skeleton/$1",
"^utils/(.*)$": "<rootDir>/src/utils/$1",
"^widgets/(.*)$": "<rootDir>/src/widgets/$1",
    },
    transformIgnorePatterns: ["/node_modules/"],
  };
  