# DOM Events with JavaScript

## What is an Event

_Events_ on the web are user interactions and browser manipulations that you can program to trigger functionality.

You can create interactivity on a web page by assigning a function to respond to a specific event _firing_, or triggering.

## Event Handler Registration

JavaScript interprest registered events as _event objects_ with properties and methods. When you create an event handler function on a specific event, you create a property of the event object.

## Adding Event Handlers

It's best practice to create named event functions instead of anonymous functions.

Another way to register event handers is event listener method `.addEventListener()` that takes 2 arguments: event type as string and event handler function. This way we can create multiple event handlers for one event type.

## Removing Event Handlers

To unregister event hanlder we can  use `.removeEventListener()` that takes event type as string and event handler function.

## Event Object Properties

Js stores event as _event objects_ with their related data and functionatily as properties and methods. There're several useful properties:

* `.target` - element that triggered the event.
* `type` - name of the event.
* `timeStamp` - number of milliseconds between document load and event trigger.

## Event Types

Most events happen in DOM without being noticed because they have no handlers attached to them.

Like `load` event happend after website completely loads.

## Mouse Events

`mousedown` event is fired when the user presses a mouse buttonw down. It's different from `click` because it doesn't need to button to be released to fire.

`mouseup` event is fired when the user releases the mouse button. It's different, because it doesn't depend on the mouse button being pressed down to fire.

`mouseover` is fired when the mouse enters the content of an element.

`mouseout` is fired when the mouse leaves the content of an element.

## Keyboard Events

Keyboard events are triggered by user interaction with keyboard keys in the browser.

`keydown` event fires when a user pressed a key down.

`keyup` event fires when a user releases a key.

`keypress` fires when a user presses and releases a key.

Keybard events have inique properties assigned to their event objects.
