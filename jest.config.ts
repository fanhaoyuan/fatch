import { Config } from '@jest/types';

const config: Config.InitialOptions = {
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverageFrom: ['packages/*/src/**/*.ts', "!packages/middleware-mock/src/serviceWorker/*.ts"],
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
};

export default config;
