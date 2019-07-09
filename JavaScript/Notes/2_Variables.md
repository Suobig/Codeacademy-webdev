# Variables

## Var variables

Prior to ES6 developers used `var` to create a variable. Now there're also `let` and `const`.

Parts of a variable declaration `var myName = 'Arya';`:

1. `var` - short for _variable_ is a keyword that creates or _declares_ the variable.
2. `myName` - variable's name. JS is using _camelCasing_ for variable names.
3. `=` is the _assignment operator_.
4. `Arya` is _assigned value_.

There're few general rules for variable names:

* they can't start with numbers.
* they are case sensitive.
* they can't repeat _keywords_.

## Let variables

`let` keyword was introduced in ES6. `var` is global scope while `let` is scoped, but you can declare both without assigning a value (they'll both be assigned to `undefined` by default), and you can reassing values whenever you want.

## Const variable

`const` keyword was also introduced in ES6. It's short for _constant_. You can't reassing `const` variable and they _must_ be assigned a value when decleared.

## Mathematical Assignment Opeators

It allows to perform a math operation and an assignment operation at the same time by combining arithmetic operator (`+`, `-`, `*`, `/`, `%`) and assignment operatior `=`.

## The Increment and Decrement Operators

Sometimes we need to increase or decrease value by just 1. We can use increment `++` or decrement `--` operators for this, instead of using `foo += 1` we can use `foo++`, instead of `foo -= 1` - `foo--`.

## String Concatenation with Variables

You can use variables in string concatenation.

## String Interpoliation

In ES6 version of JS we can insert, or _interpolate_ variables into strings using _template literals_:

```javascript
const myPet = 'armadillo';
console.log(`I own a pet ${myPet});
```

## typeof operator

You can check data type of a variable's value by using `typeof` operator:

```javascript
const foo = 'foo';
console.log(typeof foo); //String
```


