# Modules

JS _modules_ are reusable pieces of code that can be exported from one program and imported for use in another program.

## `module.exports`

Every JavaScript file run in Node has a local `module` object with an `exports` property used to define what should be exported from the file.

We can export any collection of data and functions with `exports` by combining them in an object.

## `require()`

To import a module we use `require()` function:

```javascript
const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();
```

## `export default`

In ES6 there're 2 distinct techniques: _default export_ and _named export_.

`export default` syntax:

```javascript
let Menu = {};

export default Menu;
```

`export default` uses the JavaScript `export` statement to export JavaScript objects, functions, and primitive data types.

Node.JS doesn't support `export default` so it's usually used in front-end development, while node.js developers use `module.export`.

## `import`

Also ES6 introduces `import` statement. Syntax:

```javascript
import Menu from './menu';
```

## Named Exports

Named exports allow to export data by using variables. Example:

```javascript
let specialty = '';
function isVegetarian() {
};
function isLowSodium() {
};

export { specialty, isVegetarian };
```

Named export can be exported as soon as they're declared by placing `export` in front of variable delcaration:

```javascript
export let specialty = '';
export function isVegetarian() {
};
```

We can change names of variables we export:

```javascript
export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };
```

We can combine multiple variants of export together.

## Named Import

If the module uses named export we can import specific data we need. Example:

```javascript
import { specialty, isVegetarian } from 'menu';
```

We can create an alias for the whole module we imort:

```javascript
import * as Carte from './menu';

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium();
```
