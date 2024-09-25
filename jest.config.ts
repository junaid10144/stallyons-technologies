export default {
    roots: ['<rootDir>/src', '<rootDir>/tests'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    verbose: true,
    clearMocks: true,
    coverageDirectory: 'coverage',
  };
