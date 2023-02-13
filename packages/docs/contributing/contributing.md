---
sidebar_position: 1
---

# Contributing

Bonfhir is open to all contributions in order to enrich the ecosystem!

You can contribute in different ways:

- [enrich / fix this documentation](https://bonfhir.dev)
- [submit and fix bugs](https://github.com/bonfhir/bonfhir/labels/bug)
- [submit feature requests and new ideas](https://github.com/bonfhir/bonfhir/discussions/categories/ideas)
- submit brand new packages to add new features

Please do not hesitate to [reach out and discuss your contributions](https://github.com/bonfhir/bonfhir/discussions) before starting any work!

Please make sure that your contributions align with the [project orientations](/docs/orientations).

## Running locally

All Bonfhir packages are running in a [monorepo](https://github.com/bonfhir/bonfhir).
This is how you can setup your local development environment.

### Pre-requisites

The solution is configured to run in a [Development Container](https://containers.dev/).

- [Docker](https://www.docker.com/) up and running
  - [See this page](https://code.visualstudio.com/docs/devcontainers/containers#_system-requirements) for more precise requirements on Docker
- [Visual Studio Code](https://code.visualstudio.com/download) installed
- [VS Code Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) is installed

### Open the solution

- Clone the repo: https://github.com/bonfhir/bonfhir
- Open in Visual Studio Code and run the [`Dev Containers: Open Folder in Container...`](https://code.visualstudio.com/docs/devcontainers/containers#_quick-start-open-an-existing-folder-in-a-container) command

Verify that this is working properly by running the following commands:

```bash
node ➜ /workspace (main ✔) $ yarn build

node ➜ /workspace (main ✔) $ yarn checks

node ➜ /workspace (main ✔) $ yarn test
```

### Organization

The monorepo uses [lerna](https://lerna.js.org/) and [yarn workspaces](https://yarnpkg.com/features/workspaces).

Individual packages can be found in the [packages](https://github.com/bonfhir/bonfhir/tree/main/packages) directory.

Each package should expose a list of standard [scripts](https://yarnpkg.com/configuration/manifest/#scripts):

- `yarn build`: Create a production build of the code
- `yarn check`: Run quality checks: [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) and [type checking](https://www.typescriptlang.org/docs/handbook/compiler-options.html#using-the-cli)
- `yarn clean`: Clean artifacts related to the build process; may be invoked automatically by the `build` script
- `yarn codegen`: Run the [code generation](codegen) on the package source files, to generate source code
- `yarn format`: Automatically format the code (using Prettier & ESLint); if you use the devcontainer this should be done automatically by VSCode
- `yarn package:create`: Package the build to create a local NPM package
- `yarn package:publish`: Package the build and publish to the NPM registry
- `yarn test`: Run automated tests
