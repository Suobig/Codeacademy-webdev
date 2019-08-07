# Components

## Hello World

React applications are made of _components_.

> A component is a small, reusable chunk of code that is responsible for one job. Usually this job is to render some HTML.

This is the example of "Hello World" component:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```

## `import React`

This import is important, because each JSX expression is compiled into `React.createElement()` call. So `React` variable should be available everywhere we use JSX.

## `import ReactDOM`

ReactDOM variable is responsible for DOM interaction.

## Create a Component Class

Every React component must come from a _component class_. To create React component class we can extend base class React.Component.

React Component name **must be** capitalized.

## The Render Function

A component class is like a factory that builds components. Factory method in React classes is called `render()`.

Every class **has to** have a `render()` method.

## Create a Component Instance

After we created React Component class, we can use its name as JSX element tag. Capital letter in tag's name tells React that this is a React component, not a HTML tag.
