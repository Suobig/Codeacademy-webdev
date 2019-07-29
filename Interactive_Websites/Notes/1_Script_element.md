# Script element

## The `<script>` tag

We use script tag to _embed_ JavaScript code.

## The `src` attribute

We use src attribute to provide a path to an external JavaScript file.

## How are scripts loaded

When  HTML parser wintnesses a `<script>` elements, it stops parcing the document an parses and executes JavaScript code. If one script is dependant on another script, the should be placed in a proper order.

## Defer attribute

_defer attribute_ specifies scripts should be executed after HTML file is completely parsed.

Defer is useful when a script contains functionality that requires interaction with the DOM.

## Async attribute

The `async` attribute loads and executes the script asyncronously with the rest of the webpage.

Async is useful for scripts that are independent of other scripts in order to function accordingly, so it doesn't matter when the script starts executing.
