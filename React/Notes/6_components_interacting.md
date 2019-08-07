# Components Interacting

## Rendering

React apps are made out of components, but what makes React apps special is how components _interact_.

Components can render other component instances.

If that component is in another JS file, you need to import it first.

## Passing Information

Every component has an object called `props`. It holds information about that component.

We can pass information to a component by setting this components' attributes.

If we want to pass a non-string value, we cover it into curly brackets.

Usually we pass a prop into a different component.

Some props are used to make decisions about how to render the component.

Sometimes we pass functions as props. Usually those are event handlers.

For passing event handlers the naming convetion is to name those functions `handeEventName` where `EventName` is the name of the even you're handling. For example `handeClick`, `handleKeyPress` etc. And the prop name should be named `onEventName`: `onClick`, `onKeyPress` etc.

One useful props property is `children`.

`this.props.children` will return everything between opening and closing tags.

For example, for this expression:

```javascript
<MyComponent>
    Hello World
</MyComponent>
```

`this.props.childer` of `MyComponent` instance will return `"Hello World"`.

We can set default values of props:

```javascript
MyComponent.defaultProps= { myProp: "propValue" }
```

## State

React components will often need _dynamic information_ in order to render properly.

> Dynamic information is information that can change.

There're 2 ways for a component to get dynammic information: `props` and `state`.

Unlike props, `state` is not passed from the outside. A component decides its own state.

To make a component have state we need to give the component a `state` property in the constuctor:

```javascript
class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { myKey: "myValue" };
    }

    render() { ... }
}
```

To change state, use `this.setState({ key: value });`

`.setState()` takes an Object and _merges_ it with `this.state` object.

The common way to call `this.setState()` is to wrap it into a function:

```javascript
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: 'sunny' };
    this.makeSomeFog = this.makeSomeFog.bind(this);
  }

  makeSomeFog() {
    this.setState({
      weather: 'foggy'
    });
  }
}
```

In this case `this.setState` is wrapped into `this.makeSomeFog()` function.

Notice `this.makeSomeFog = this.makeSomeFog.bind(this);` line. This line is necessary, because `this.makeSomeFog` uses `this` property.

You can't call `this.setState()` from inside of the `render()` functions (because changing state will cause the object to re-render thus causing an infinite loop).

`this.setState` automatically calls `this.render()` whenever it's called.
