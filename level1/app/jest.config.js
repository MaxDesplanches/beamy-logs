const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  testEnvironment: 'node',
  verbose: true,
  moduleNameMapper: {
    '@exmpl/(.*)': '<rootDir>/src/$1',
  },
  transform: tsjPreset.transform,
};
