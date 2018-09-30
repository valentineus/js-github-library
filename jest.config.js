module.exports = {
    browser: true,
    clearMocks: true,
    setupFiles: [ "./jest.setup.js" ],
    testEnvironment: "jsdom",
    transform: { "^.+\\.js$": "<rootDir>/jest.transform.js" }
};
