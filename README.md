# Turborepo starter

This is an official Yarn v1 starter turborepo.

## Note

init project from cli and add parcel boilerplate app from this [repo](https://github.com/jungai/react-parcel-boilerplate) (but twin macro not working ???)

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `app1`: a [react with parcel](https://parceljs.org/recipes/react/) app
- `app2`: a [Next.js](https://nextjs.org) app
- `ui`: a stub React component library shared by both `app1` and `app2` applications (e.g. antd component)
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

### Why yarn workspaces

because of this [issue](https://github.com/parcel-bundler/parcel/pull/7265) parcel can't resolve module (maybe)
