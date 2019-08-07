# Setting Up React App

## Installing React

If you don't have React installed in your environment, install it with npm:

```bash
npm install -g create-react-app
```

## Creating the Boilerplane Application

In your projects folder, run

```bash
create-react-app <name-of-app>
```

## Useful scripts

* `npm start` - starts the developer server
* `npm run build` - bundles the app into static files for production
* `npm test` - stats the test runner
* `npm run eject` - removes this tool and copies build dependencies, configuration files and scripts into the app directory. This command is irreversible!

## React App Structure

### `.gitignore`

This file automatically create all the stuff in the boilerplate app that are not supposed to go into version control system (like `node_modules`).

### `package.json`

This file outlines all the settings for the React app.

* `name` - name of your app.
* `version` - current version
* `"private": true` - a failsafe setting to avoid accidentally publishing your app into npm.
* `dependencies` - all the required node modules and their versions.
* `devDependencies` - modules for using in development environment.
* `scripts` - aliases for react scripts.

### `node_modules`

This directory contains dependencies and sub-dependencies of packages used in current app.

### `package-lock.json`

This file contains exact dependency tree installed in `node_modules/`

### `public`

This directory contains asssets that will be served directly without additional processing by webpack.

### `src`

This contains the JavaScript that will be processed by webpack and is the head of React app.

### Custom directories

As the project grows, it's common to add `components/` directory to organize components and component related files.

Also there's usually `views/` directory to organize React views and view releated files.
