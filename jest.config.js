module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
  },
  transformIgnorePatterns: ['/node_modules/(?!react-native)/.+'],
  setupFiles: ['./jestSetup.js'],
  // Load setup-tests.js before test execution
  setupFilesAfterEnv: ['<rootDir>setup-tests.js'],
  modulePathIgnorePatterns: ['<rootDir>/(build|android|ios|node_modules|e2e)/'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}',
    '!<rootDir>/(build|android|ios|node_modules|coverage|__mocks__|src/__snapshots__|e2e)/',
    '!<rootDir>/(index.js|serviceWorker.js)',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  // ...
};
