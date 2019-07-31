# Handelbars

`Handlebars.js` is a _library_. A library is a collection of code that is laready written that makes development easier.

`Handlebars.js` is a templating engine which allows you to generate reusable HTML with JavaScript.

One way to use `Handlebars.js` is to create handlebar-templates and fill them with data in JS.

## How to use handlbars

1. Create a `script` element with some id and `type=text/x-handlebars-template`
2. Enter your template inside script element using `{}` double moustache syntax for parameters
3. in JS file, get template text from script's innerHTML accessing it by id
4. create template function using `Handlebars.compile(source)`
5. create `context` object with parameter names as keys and parameter values as values.
6. pass `context` into the template function, to create final HTML.
7. assing final HTML to an element of your choice.

## Handlebars `if` statements

Syntax is:

```javascript
{{#if argument}}
    // Code to include if provided argument is truthy
{{/if}}
```

## `else` section

Syntax is:

```javascript
{{#if argument}}
  // Code to include if the provided argument is truthy
{{else}}
  // Code to include if the provided argument is falsy
{{/if}}
```

## `each` and `this`

`each` syntax:

```javascript
{{#each someArray}}
  <p>{{this}} is the current element!</p>
{{/each}}
```

`{{this}}` acts as a placeholder for the element in the iteration. If it's an object, `this` also gives access to its properties: `{{this.property}}`.

We can combine `if` and `each` together
