# Style

## Inline Styles

Inline styles in JSX use double curly brackets:

```javascript
<h1 style={{ color: 'red' }}>Hello world</h1>
```

The reason is: first curly brackets say JSX that everything inside is Javascript, second curly brackets create an object literal, making `color: 'red'` a valid JS object.

## Make a Style Object Variable

When you want to add a lot of styles, it becomes hard to maintain. In this case you should create a `style` variable and assign your style object to it.

## Style Name Syntax

In regular JavaScript style names are written in hypenated-lowercase:

```javascript
const styles = {
  'margin-top':       "20px",
  'background-color': "green"
};
```

if JS though they are written in camelCase:

```javascript
const styles = {
  marginTop:       "20px",
  backgroundColor: "green"
};
```

## Style Value Syntax

In React if you write a style value as a number, then `px` is assumed. There're few styles that will not automatically put `px` for your, but they are styles that aren't very likely to go with `px` anyway.
