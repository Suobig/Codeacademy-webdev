# Flexbox

_Flexbox_ is a new tool added in CSS3 that simplifies how to position elements.

There're 2 main components: _flex items_ and _flex containers_. Flex container is an element that contains flex items. All direct childs of flex container are flex items.

To create a flex container, set `display` property to `flex` or `inline-flex`. Then there're properties to determine how the children will behave:

* `justify-content`
* `align-items`
* `flex-grow`
* `flex-shrink`
* `flex-basis`
* `flex`
* `flex-wrap`
* `align-content`
* `flex-flow`

Flexbox was not intended to be used for the whole page as a grid system, only for certain elements.

## display: flex

`display: flex` converts an element into a flex container and all its direct children into flex items. Default values for flex properties are:

* `flex-direction: row;`
* `justify-content: flex-start;`
* `flex-shrink: 1;`
* `flex-grow: 0;`
* `align-items: stretch;`
* `flex-basis: auto;`
* `flex-wrap: nowrap;`

## inline-flex

A value for flex container `display` property. Use if you want flex container to be an inline element (it's block by default).

## justify-content

A flex container property. Determines how the items will be positioned inside the container along the major axis_. Possible values:

* `flex-start` - (default) all flex items will start at the beginning of a container
* `flex-end` - all flex items will start at the end of a container
* `center` - all flex items will be positioned in the center
* `space-around` - all items will be positioned with equal space befor and after the element, resulting in double the space between.
* `space-between` - all items will be positioned with equal space between elements, but no extra space before the first and after the last one.

## align-items

A flex container property. Determines how items will be positioned along the _cross axis_. Possible values:

* `flex-start`
* `flex-end`
* `center`
* `baseline` - the bottom of all items will be aligned with each other
* `stretch` - (default) if possible, all items will be stretched from top to bottom.

## flex-grow

A flex item property. Determines how the element should stretch relative to others when the container grows in size. Default value: 0.

## flex-shrink

A flex item property. Determies how the element will behave when the container shrinks in size relative to other elements (the bigger the number - the more it will shrink). Default value: 1.

## flex-basis

A flex item property. Determies the default size of a flex element along the major axis. The default is width (or height, based on major axis direction) value of an element, or the size of its content if it's not set.

## flex

A flex item property that combines flex-grow, flex-shrink and flex-basis. Syntax is: `flex: <flex-grow value> <flex-shrink value> <flex-basis value>`

## flex-wrap

A flex container property. Wraps elements to the next line if they don't fit. Possible values:

* `wrap`
* `wrap-reverse`
* `nowrap` (default)

## align-content

A flex container property. Determines how to position elements along cross-axis if there're multiple rows of elements. Possible values:

* `flex-start`
* `flex-end`
* `center`
* `space-between`
* `space-around`
* `stretch` - (default)

## flex-direction

Flex container property. Swaps major axis and cross-axis. Possible values:

* `row` (default)
* `row-reverse`
* `column`
* `column-reverse`

## flex-flow

Flex containter property. Combines flex-wrap and flex-direction properties. Syntax is: `flex-flow: <flex-direction> <flex-wrap>`. We can use a single value.

## Nested flexboxes

We can put flex containers inside flex containers.
