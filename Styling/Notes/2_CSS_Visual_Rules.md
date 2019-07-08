# CSS Visual Rules

## CSS Structure

* Everything before curly brackets is called _CSS selector_
* Everything inside curly brackets is called _selector's body_
* Separate instructions ending with semicolon are called _CSS declarations_
* Declaration consists of a _property_ and a _value_ separated by colon.
* CSS selector with it's body are called _CSS rule_

## Font Family

Font you're typing with in a word processor is technically called _typeface_ or _font family_.

To change the font in CSS use `font-family` property.

Keep this in mind:

1. Specific font needs to be installed on a user's computer for that font to display.
2. The default typeface is `Times New Roman`.
3. Web page shouldn't have more than 2-3 different typefaces.
4. When the name of a typeface has more than one word, it's a good practice to enclose it into quotes: `"Courier New"`

We can provide a link to the font family we want to use. For example [google fonts](https://fonts.google.com/) has a lot of fonts and provides html link elements to import them into our project.

## Font Size

Often _font size_ is used to highlight certain sections of a website. To set font size use `font-size` property.

## Font Weight

_Font weight_ controls how bold or thin text appears. To change it use `font-weight` property.

Font weight has certain values:

* `bold`
* `normal`

## Text Align

By default text always appears on the left side of the browser. To change that, use `text-align` property. It has following values:

* `left` - align to the left side of its parent element
* `right` - align to the right side of its parent element
* `center` - align to the center of its parent element

This property aligns _all_ the content of the element. So you can use it to align blocks as well as text.

## Color

There're to different colors:

* Foreground color - color of the element itself, changed with `color` property.
* Background color - color of the element's background, changed with `background-color` property.

## Opacity

Opacity is the measure of how transparent an element is. It's measured from 0 to 1, when 100% is fully visible and 0 is fully transparent.

It can be used to create nice looking overlay effects.

## Background Image

CSS provides an option to set image as a background. It's done through CSS property `background-image`. Provided value should look like this: `url('url_string);`
