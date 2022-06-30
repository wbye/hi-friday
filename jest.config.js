module.exports = {
  moduleNameMapper: {
    // '^/common/(.*)': ['<rootDir>/src/common/$1'],
    // '^/services/(.*)': ['<rootDir>/src/services/$1'],
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testEnvironment: 'node',
};
