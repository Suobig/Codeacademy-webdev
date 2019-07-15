# CSS Display and Positioning

## Flow of HTML

A browser will render the elements of an HTML document that has no CSS from left to right and from top to bottom. This is called the _flow_ of elements in HTML.

There're ways to change how browser positions elements:

* `position`
* `z-index`
* `display`
* `float`
* `clear`

## Position

Block-level elements (like `div`s) create a _block_ the full width of their parent elements and prevent other elements from appearing at the same horizontal space. This default positioning of block elements can be changed by setting their `position` property. These are values the property can take:

* `static` - this is default value;
* `relative`
* `absolute`
* `fixed`

## Position: Relative

This allows to position element _relative_ to its default statis position. There're 4 different _offset properties_:

* `top` - moves the element down
* `bottom` - moves the element up
* `right` - moves the element left
* `left` - moves the element right.

## Position: Absolute

When the element's position is set to `absolute` all other elements on the page will _ignore_ the element and act like it's not present on the page. The element will be positioned to its closes positioned parent element.

## Position: Fixed

When the element's position is set to `fixed` it won't scroll with the rest of the page.

## Z-index

The z-index property controls how far "back" or how far "forward" an elemet should appear on the web page when elements overlap. This can be thought of the _depth_ of elements, with deeper elements appearing behind shallower elements.

The bigger the value, the more "forward" the element appears.

## Inline Display

Every HTML element has a default `display` value that dictates if it can share horizontal space with other elements. There're 3 values from `display` property:

* `inline`
* `block`
* `inline-block`

Blocks like `<em>`, `<strong>`, `<a>`, `<span>` have default value set to `inline`. Their size is set by its conent and can't be changed through CSS.

## Block Display

_Block elements_ have no content in the same line with them. These are by default heading elements (`<h1>` to `<h6>`), `<p>`, `<div>`, and `<footer>`.

## Inline-Block Display

Combines features of both inline and block elements.

## Float

The `float` property can take 2 values:

* `left` - move element as far left as possible
* `right` - move element as far right as possible.

## Clear

The `clear` property specifies how elements should behave when they "bump" into each oher on the page. It can take following values:

* `left` - the left side of the element won't touch any other element within the same container
* `right` - the right side of the element won't touch any other element within the same container
* `both` - neither side will touch other elements
* `none` - default. Elements can touch either sides.
