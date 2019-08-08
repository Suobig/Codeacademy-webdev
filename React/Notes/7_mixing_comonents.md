# Stateless Components from Stateful Components

This lesson discusses a _programming pattern_. This pattern uses 2 types of components:

* _stateful_ - components that have a `state` property
* _stateless_ - components that don't.

It this pattern components pass their state to _stateless_ components via props.

## Updating State

While we can pass state through props, child component **should never** update its props. Then can only be changed by a different component!

To update its state, stateful component `A` passes a handler to a stateless component `B`. Component `B` calls that handler whenever it needs to update `A`'s state.

When we need to pass a value (or values) to the state-changing function from an event, we need to create a wrapper function to take those values from event's target:

```javascript
class Stateful extends Component {
    constructor(props) {
        ...
    }

    handleChangeName(e) {
        const newName = e.target.value;
        this.changeName(newName);
    }

    changeName(newName) {
        this.state({ name: newName })
    }
}
```

## Displaying State

To display the state of stateful component use a different stateless component.
