# Intro to JSX

## Why React

React.js is a JavaScript library developed by Facebook engineers.

Here are few ways to use React:

* _fast_
* _modular_
* _scalable_
* _flexible_
* _popular_

## Hello World

consider code like this:

```javascript
const h1 = <h1>Hello world</h1>;
```

That looks like a mix between JS a HTML. But it's actually JS with an extended syntax. The `<h1>` is something called _JSX_.

## What is JSX

JSX is a syntax extension for JavaScript. It was written to be used with React.

So it's not a valid JavaScript, Web browser can't read it.

If a JavaScript contains JSX code, it will be _compiled_ by _JSX compiler_ before it reaches web browser.

## JSX ELements

A basic unit of JSX is called a JSX _element_.

Here's an example:

```javascript
<h1>Hello world</h1>
```

## JSX Elements and Their Surroundings

JSX elements are treated as JS expressions. Meaning they can be saved to a variable, passed to or returned from a function, stored in object or array, etc.

## Attributes in JSX

JSX elements can have _attributes_, just like HTML elements:

```javascript
const title = <h1 id="title">Introduction to React.js: Part I</h1>;
const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;
```

## Nested JSX

We can _nest_ JSX elements inside other JSX elements just like we can do with HTML elements:

```javascript
const theExample = <a href="https://www.example.com"><h1>Click me!</h1></a>;
```

If we want to make it more readable we can add HTML-style line breaks, but in this case we have to wrap this expression into parenthesis:

```javascript
const theExample = (
    <a href="https://www.example.com">
        <h1>Click me!</h1>
    </a>
);
```

## JSX Outer Elements

A JSX expression **must** have exactly **one** outermost element. So this is this is illegal:

```javascript
const paragraphs = (
  <p>I am a paragraph.</p>
  <p>I, too, am a paragraph.</p>
);
```

but this is OK:

```javascript
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
```

## Rendering JSX

To _render_ JSX element means to make it appear onscreen.

Syntax:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello World</h1>, document.getElementById('app'));
```

## `ReactDOM.render()`

`ReactDOM` is the name of JS library that contains several React-specific methods that deal with the DOM.

`ReactDOM.render()` is the most common way to redner JSX expressions. It takes to arguments:

1. JSX expression to render
2. _container_ — a DOM element it should be appended to.

## Passing a Variable to ReactDOM.render()

First argument should _evaluate_ to a JSX expression, so we can use a variable or function call that evaluates to JS expression.

## The Virtual DOM

ReactDOM.render() only updates DOM elements that have changed.

So if you render the same element twice in a row, nothing will happen at the second time.

This feature greatly increase React performance and is achieved by using somethin that is called _Virtual DOM_ — a virtual representation of a real DOM that consntatly compare iteself to the real version and update only things that different.

Whenever you render a JSX element, the entire virtual DOM is updated. It takes little to no time, because objects in DOM are very light-weight compared to their "concrete" versions. Once the vDOM is updates, it compares itself to a previous version of vDOM called _snapshot_ and figures out what elements have changed. This prossess is called _diffing_. Once vDOM figured out which elements have changed, it updates only those elements in real DOM.
