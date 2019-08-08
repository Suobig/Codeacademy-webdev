# propTypes

`propTypes` are useful for 2 reasons:

1. _prop validation_ - ensuring that props are doing what they're supposed to do
2. _prop documentation_ - making it easier to understand what are props and component as a whole supposed to do.

## Apply propTypes

Syntax:

```javascript
MyComponentClass.propTypes = {
  message: React.PropTypes.string
};
```

If we add `.isRequired` we make this prop required and will get a console warning if it's not passed:

```javascript
MyComponentClass.propTypes = {
  message: React.PropTypes.string.isRequired
};
```

This techique can be used for stateless function components as well:

```javascript
const Example = (props) => {
    return <h1>{props.message}</h1>;
}

Example.propTypes = {
    message: React.PropTypes.string.isRequired,
}
```
