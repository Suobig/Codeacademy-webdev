# Browser Compatibility and Transpilation

## Introduction

This lessons focuses on how developers address the gap between the new JavaScript syntax that they use and the JavaScript syntax that web browsers recognize.

This became a major concern after ES6 release in 2015.

There's 2 important tools that address compatibility issues:

* [caniuse.com](https://caniuse.com) - A website that provides data on web browser compatibility for HTMS, CSS and JavaScript features.
* Babel - A JavaScript library that you can use to convert new, unsupported JavaScript (ES6), into an older version (ES5) that is recognised by most modern browsers.

## caniuse.com

The website [caniuse.com](https://caniuse.com) is the best resource for finding browser compatibility information.

## Why ES6

There're 3 main reasons for updating from ES5 to ES6:

* Readability and economy of code — new syntax is often easier to understand and requires less characters to create the same functinality.
* Addresses sources of ES5 bugs — some parts of ES5 cause common types of bugs to happen. ES6 addressed those parts.
* Similarity to other programming languages — ES6 syntax is more similar to other object-oriented languages.

Ecma knew that there would be compatibility issues so they made ES6 changes backwards-compatible, meaning you can map ES6 code into ES5.

## Transpilation With Babel

Babel is a JavaScript library that _transpiles_ ES6 JavaScript to ES5.

> Transpilation is the process of converting one programming language to another.

To use Babel, first we need to install it:

```bash
npm install babel-cli
npm install babel-preset-env
```

Then we can use Babel:

```bash
npm run build
```

For this code to run, we first need to set up our project.

## `npm init`

First we need to place our ES6 JavaScript into directory called `src`. So the project structure should look like this:

```bash
project
|_ src
|___ main.js
```

Then we need to set up or project to use _npm_ (node package manager). To do this execute

```bash
npm init
```

in the project root directory. This will create `package.json` file, that contains:

* Metadata - project title, description, authors etc.
* list of node packages required
* Key-value pairs of command line scripts.

## Install Node Packages

Then we need to install node packages (Babel in our case):

```bash
npm install babel-cli -D
npm install babel-preset-env -D
```

`-D` option means that those packages will be installed as `devDependencies`. Packages listed in `devDependencies` will be installed by running `npm install` on a clear project.

Babel packages and all their dependencies will be stored in `node_modules/` directory.

Next we need to specify the inital JavaScript version. We can do this inside a file `.babelrc` in the root directory of our project by adding:

```json
{
  "presets": ["env"]
}
```

"env" is a preset configuration we installed with `npm install babel-preset-env`.

## Babel Source Lib

Now we need to specify a script in `package.json` that initiates transpilation.

Under `"scripts"` key create a key-value pair:

```json
"scripts": {
    ...
    "build": "babel src -d lib"
}
```

It's a script that instructs babel to build code from `src` directory into `lib` directory (`-d` options stands for "directory").

## Build

Now we can use

```bash
npm run build
```

to run babel transpilation.
