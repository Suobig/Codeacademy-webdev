# Stateless Functional Components

If you have a component, that contains only a `render()` function (like a presentational component from lesson 9), you can rewrite it as a function.

Components written as a function are called _stateless functional components_.

Stateless function component:

```javascript
export const MyComponentClass = (pros) => {
  return <h1>Hello World!</h1>;
}
```

Statless function component with props:

```javascript
export const MyComponentClass = (props) => {
  return <h1>{props.title}</h1>;
}
```
