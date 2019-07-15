# Form Validation

_Validation_ means a concept of checking user's provided data against required data.

There're different kinds of validation. _Server-side validation_ happens on a server. _Client-side validation_ happens in a browser.

Client side validation has some benefits over server-side validation:

* saves user's time
* saves server's resources
* protects server from malicious data

## Requiring an Input

If we want to state that a field is not optional, we add `required` attribute to a field. It's a boolean attribute, so it doesn't need a value.

## Set Minimum and Maximum

We can set minimum and maximum for `number` or `range` typed fields. Use attributes `min` and `max` for it.

## Checking Text Length

For `text` typed inputs we can set `minlength` and `maxlength`. `maxlength` strictly limits input, not allowing ty type in more than set amount of characters.

## Matching a Pattern

We can match input with a reg exp using `pattern` attribute.
