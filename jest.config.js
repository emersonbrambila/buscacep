module.export = {
    clearMocks: true,
    preset: "tes-jest",
    projects: ["<rootDir>/app/**/jest.config.js"],
    testEnvironment: "node",
    testMatch: ["*.spec.ts", "*.spec.tsx"]
}