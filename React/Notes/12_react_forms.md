# React Forms

We want our App to know about changes user makes in the form. We can do this by making component react to user input and save the input in its state.

## Input onChange

We create a handler for onChange event to store the value in the state of the component.

## Controlled vs Uncontrolled

> An _uncontrolled component_ is a component that maintains its own internal state.
>
> A _controlled component_ is a component that doesn't maintain any internal state.

Since controlle component has no internal state, it must be controlled by someone else.

Most React components are _controlled_.

Initially `input` is not controlled - it stores its internal state. But if you give `input` a `value` attribute and set it yourself - `input` becomes controlled and stops using its internal storage.
