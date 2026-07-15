# telnyx-cypress-tests

This is a project for web automation testing of the [Telnyx](https://telnyx.com/) website, built using **JavaScript** and **Cypress**.

On the architecture side, the project follows the **Page Object Model (POM)** pattern. Each page (`main.page.js`, `contactUs.page.js`) extends a shared `base.page.js`, and locators are exposed as functions while action methods (fill, click, submit) live in the page classes. Reusable UI parts that appear across pages (like the navigation bar and footer) are extracted into their own components under `pages/components`. Test data is generated randomly per run using `@faker-js/faker`, and fixed valid values (form dropdown options, social link URLs) are kept in JSON fixtures instead of being duplicated across specs.

The project currently covers two areas:

- **Main page** — navigation menu across viewports, "Explore the Stack" interactive layers, AI model switching, AI chat message sending (empty/valid), Speech-to-Text options, use-case tab panels, and footer social icons.
- **Contact Us page** — empty-form validation and full valid-form submission with generated user data.

## Requirements

- [Node.js](https://nodejs.org/en/) version 18 or higher.
- npm (comes bundled with Node.js).
- Git, to clone the repository.

## Installing

These instructions will help you get the project running on your local machine.

1. Clone the repository:

```
git clone https://github.com/Verssax/telnyx-cypress-tests
```
> **Note** The project will be cloned into whichever folder your terminal is currently pointed at. Navigate to your desired location first using `cd`.

2. Navigate into the project folder and open it in your code editor of choice (e.g. Visual Studio Code).

3. Open a terminal in the project root and install all dependencies:

```
npm install
```

This installs `cypress`, `@faker-js/faker`, and `cypress-mochawesome-reporter`.

## How to run the tests

- Open Cypress in interactive mode (visible browser, test runner UI):

```
npm run cy:open
```

- Run all tests in headless mode:

```
npm test
```

- Run all tests explicitly headless (same as above, more explicit):

```
npm run test:headless
```

- Run all tests headless in Chrome specifically:

```
npm run test:chrome
```

- Run a single spec file directly:

```
npx cypress run --spec "cypress/e2e/main.spec.cy.js"
```

## How to generate the report

This project uses **cypress-mochawesome-reporter** for reporting, wired into `cypress.config.js`.

The report is generated automatically as part of a headless run — no separate build step is required.

1. Run the tests:

```
npm run report
```

2. Open the generated HTML report:

```
open cypress/reports/html/index.html      # macOS
xdg-open cypress/reports/html/index.html  # Linux
start cypress/reports/html/index.html     # Windows
```

The report includes pass/fail counts, per-test duration, and screenshots attached inline for any failed test.

## Project structure

```
├── cypress/
│   ├── e2e/
│   │   ├── main.spec.cy.js
│   │   └── contactUs.spec.cy.js
│   ├── pages/
│   │   ├── base.page.js
│   │   ├── main.page.js
│   │   ├── contactUs.page.js
│   │   └── components/
│   │       ├── navBar.js
│   │       └── footer.js
│   ├── helper/
│   │   ├── userGenerator.js
│   │   └── utills.js
│   ├── configs/
│   │   └── viewports.js
│   ├── fixtures/
│   │   ├── contactForm.json
│   │   └── socialLinks.json
│   ├── support/
│   │   └── e2e.js
│   └── reports/          # generated, not committed
├── cypress.config.js
├── package.json
└── README.md
```

## Built with

- [Cypress](https://www.cypress.io/) — end-to-end testing framework.
- [@faker-js/faker](https://fakerjs.dev/) — random test data generation.
- [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) — test reporting.
