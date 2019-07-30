# JavaScript and DOM

The `document` object in DOM is the door to the DOM structure. It allows access to the root node of the DOM tree.

## Tweak an Element

To access and set the contents of an element use `.innerHTML` property.

## Select and Modify Elements

The DOM interface allows us to access a specific element with CSS selectors. _CSS selectors_ define the elements to whiche a set of CSS rules apply. We can use them to select elements in JS by using `.querySelector()` method.

If you want to select an element by ID specifically there's a method called `.getElementById()`.

## Style an element

We can apply inline style to an element by chaning it's `.style` property.

## Create and Insert Elements

If we want to create a DOM element, we use `.createElement(tagName)` method. But it doesn't add an element to DOM, just creates it. To add it to DOM we need to use `.appendChild()` method.

## Remove an Element

To remove an element use `.removeChild()` method.

If we want to just hide an element, we can use `.hidden = true` instead.

## Interactivity with onclick

We can add a function to `onclick` property to add interactivity to an element.

## Traversing the DOM

Each DOM element node as a `.parentNode` and `.children` property. The property will return a list of children or `null` if there are none.

The `.firstChild` property grants access to the first child of the node.
