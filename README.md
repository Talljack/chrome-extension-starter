# Chrome Extension Starter Template

This is a starter template for building a Chrome Extension. It includes a basic manifest file and a popup page.

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## Includes the following

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- Example Code
  - Storage
  - content script
  - background script
  - popup page
  - options page

## Getting Started

1. Use this template to create a new repository
2. Use Vscode to open the project
3. setup the project
   ```bash
    pnpm install
   ```

## Build

```bash
pnpm build
```

## Watch

```bash
pnpm run watch
```

## Load extension to Chrome

1. Open the Extension Management page by navigating to chrome://extensions.
2. Load `dist` directory

## Test

some test files in `/src/background/test` directory, you can write your owner tests.

```bash
pnpm test
```
