import '@testing-library/jest-dom';

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  // Other configuration options
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
};

export default config;
