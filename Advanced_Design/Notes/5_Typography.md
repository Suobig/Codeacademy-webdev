# Typography

_Typography_ is the art of arranging text on a page.

## Font Family

_There already was a lesson about font families._

## Font Weight

We can assign a number to `font-weight` property. Valid values are multiplies of 100 in a range `[100, 900]`.

Some default weights:

* `400` - `normal`
* `700` - `bold`
* `300` - `light`

## Word Spacing

By setting `word-spacing` property we can change space between words. Usually the default value is `0.25em`

This property isn't commonly used for styling, but sometimes it's necessary to increase text readability.

## Letter spacing

`letter-spacing` property is used to adjust space between letter. It's not commonly used, but sometimes is used to increase readability of uppercase text.

## Text Transformation

We can make text all uppercase or all lowercase by using `text-transform: uppercase` and `text-transform: lowercase`.

## Text Alignment

By default text always apper at the left side of its content block. To change this we can use `text-align`. Possible values are `left`, `right` and `center`.

## Line Height

`line-height` sets up the height of each line of text (not matter how big the text itself is). Difference between line height and font size it called _leading_.

There're two ways to set up line heigth:

1. as a unitless number: `1.2`. In this case it'll be a ratio of the font size.
2. in units such as `12px`.

## Serif and Sans-Serif

These are two different font styles.

## Fallback Fonts

When you use a fancy font, but it didn't load or a computer doesn't support it, it's a good idea to provide fallback fonts. Like this:

```css
font-family: "Garamond", "Times", serif;
```

This means

> User 'Garamond'. If it's not available, use 'Times'. If they both aren't available, use any serif font installed.

## Linking Fonts

Since it's impossible to have all of the thousands avaliable fonts to be installed on each computer, it's a good idea to provide an external link for used fonts. One good font directory is [Google Fonts](https://fonts.google.com)

## Font Face

Instead of using HTML `<link>` we can add fonts directly into CSS using `@font-face` property. To do this, paste link URL directly into browser and copy appropriate CSS ruleset.

You can provide local font faces by providing urls like this:

```css
@font-face {
  font-family: "Roboto";
  src: url(fonts/Roboto.woff2) format('woff2'),
       url(fonts/Roboto.woff) format('woff'),
       url(fonts/Roboto.tff) format('truetype');
}
```

By providing multiple font formats we can ensure that most browsers will be able to display our fonts. `woff2` is the best format, but it's support is around 87% (compared to 97% for `truetype`).
