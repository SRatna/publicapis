# Public APIs App

This is a simple web application powered by React with TypeScript that list all the public APIs using [public-apis](https://api.publicapis.org/) endpoint.

## Tech Stack

This app uses a number of third party open-source tools:

### Frontend
- [Vite](https://vitejs.dev/) for building the [React](https://reactjs.org/) frontend.
- [Antd](https://ant.design/) for the UI components.
- [Jest](https://jestjs.io/) along with [ts-jest](https://kulshekhar.github.io/ts-jest/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) for component testing.

## Getting started

### Requirements
You must install latest version of [NodeJS](https://nodejs.org/en/download/) to run this application.

### Up and Running
Run following commands from root directory of the project to run the application.
```shell
# install node packages
npm i
# start vite dev server
npm run dev
# perform test using jest
npm run test
```

### CI/CD
Github workflow configuration file for deployment to Netlify can be found [here](https://github.com/SRatna/publicapis/blob/main/.github/workflows/deploy.yml).

### Further Works
- Implement E2E tests using [Cypress](https://cypress.io).
- Add features like sorting and filtering to the Public APIs table.
- Add component testing to all components.