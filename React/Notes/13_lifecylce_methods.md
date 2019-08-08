# LifeCycle Methods

> _Lifecycle methods_ are methods that get called at certain moment in a component's lyfe.

There're lifecycle methods that get called:

* right before a component renders for the first time
* right _after_ a component renders, every time _except_ for the first time
* etc.

## Mounting Lifecycle Methods

There're 3 categories of lifecycle methods:

* _mounting_
* _updating_
* _unmounting_

> A component _mounts_ when it renders for the first time.

There're 3 _mounting lifecycle methods_:

1. `componentWillMount`
2. `render`
3. `componentDidMount`

When the component mounts, it automatically calls all 3 of them in this order.

### `componentWillMount`

This method gets called right before render.

### `render`

Render belongs to 2 categories: mounting and updating methods.

### `componentDidMount`

`componentDidMount` is used a lot. It's a good place to fetch requests, connect to APIs and set timers.

## Updating Lifecycle Methods

The first time a component gets rendered, it does not update. It updates only starting with the second render.

There're 5 updating lifecycle methods:

1. `componentWillReceiveProps`
2. `shouldComponentUpdate`
3. `componentWillUpdate`
4. `render`
5. `componentDidUpdate`

When the component update, it automatically calls all 5 of them in this order.

### `componentWillReceiveProps`

It gets called before the rendering begins and only if the component receives props:

```javascript
// will get called here:
ReactDOM.render(
  <Example prop="myVal" />,
  document.getElementById('app')
);

// will NOT get called here, no props:
ReactDOM.render(
  <Example />,
  document.getElementById('app')
);
```

The method gets 1 argument: `nextProps`. It's a preview of upcoming `props` object the component will get.

The common use of this method is to preview the next props and decide what to render based on those information.

This method will run even if the props didn't change.

### `shouldComponentUpdate`

This method should return either `true` or `false`.

If the method returns `false` then the component will not update and non of the remaining lifecycle methods will get called.

This method receives 2 arguments: `nextProps` and `nextState`. It's typical to compare `nextProps` and `nextState` with `this.props` and `this.state` to make a decision whether the component should update at all.

### `componentWillUpdate`

This method receives 2 arguments: `nextProps` and `nextState`.

You can't call `this.setState()` from this method.

The main purpose of this method is to interact with things _outside_ of React architecture.

### `componentDidUpdate`

This method gets 2 arguments: `prevProps` and `prevState`.

This method is usually used to interact with things outside React, like API or browser.

## Unmounting Lifecycle Methods

A component's _unmounting_ period occurs when the component is _removed_ from DOM. This can happen if DOM get rerendered without the component or the user navigates to a different website or closes the browser.

`componentWillUnmount` is the only unmounting lifecycle method.

It gets called right before the component gets removed from DOM.

This method is used for cleanup.
