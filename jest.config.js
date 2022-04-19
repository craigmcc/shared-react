/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['./src/setupTests.js'],
    testEnvironment: 'jsdom',
};
