# CSS SETUP AND SELECTORS

## Intro to CSS

CSS or _Cascade Style Sheets_, is a language used to _style_ the HTML content on a web page.

## Inline styles

It's possible to write CSS code directly into HTML using _inline styles_.

To do that we need to use `style` attribute on an element we want to apply CSS to.

## The `<style>` tag

Inline styles has their own limitation - you can't apply styling to multiple element. To overcome those limitations we can create a style section using `<style>` tags. This section must be placed in the `<head>` element.

## The .css file

While it's not uncommon to use both HTML and CSS in one file, it's usually a good idea to separate them by creating a separate .css file.

## Linking the CSS file

For the CSS file to work, it must be linked to the HTML file. It can be done by using a _link element_ (`<link>`) to link files together. `<link>` is a void element, it doesn't require closing tag.

Link element has following attributes:

* `href` - path to the css file;
* `type` - document type (`text/css` for css files);
* `rel` - relationship between the HTML file and linking file (`stylesheet` for css files);

## Tag Name

CSS can select HTML elements by _tag name_. Tag name is a text between angle brackets in element's opening tag.

The mechanism that's used to select a proper element is called _CSS selector_. All styles for the element must be put in the curly brackets after the tag name.

## Class name

CSS selector can select elements by their attributes. One common attribute is `class` attribute. To select an element by it's class use a period `.` followed by a class name.

## Multiple classes

It's possible to add more than one class to an HTML element's `class` attribute. Classes are separated by space.

## ID name

If an element needs to be styled uniquely we can add an `id` attribute to the element. We can select elements by id by using `#` followed by id value in selector.

We can technically apply the same id to multiple elements, but it's considered bad practice and has to be avoided.

## Classes and IDs

We can select HTML elements by their tags, classes and IDs. To decide whether we should use class or id, we should understand their purpose.

Classes are meant to be used over many elements.

IDs are ments to be used on a single element. Styles, applied by ID override all others, so they need to be used sparingly.

## Specifity

_Specifity_ is the order by whiche the browser decides which CSS styles will be displayed. The best practice is to use the lowest possible level of specifity so the element can easily be restyled in the future.

Specifity order is: `id > class > tag`.

## Chaining Selectors

It's possible to require and element to have 2 or more CSS selectors at the same time. It's done by combining multiple selectors, which is called _chaining_.

Chained selectors have higher specifity than simple class selectors, but lower than the id selector.

## Nested Elements

It's possible to select elements that are nested in other selected elements. It's done by nesting elements - writing them down from highers to lowest level of nesting separated by space.

It's not recomened to have more than 3 levels of nesting for selectors.

## Chaining and Specificity

Nesting elements makes selector more specific.

## Important

There's one thing that's more specific than IDs - `!important`. We can apply it to a style and it will override _any_ other style, no matter how specifit it is.

Using `!important` is a bad practice and it indicates that you need to reogranize your code.
