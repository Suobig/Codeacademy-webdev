# CSS Color

## Introduction to Color

Colors in CSS can be described in 3 different ways:

* _named colors_ like `white`, `red`, `green`
* _RBG_ - numeric values that describe a mix of red, blue, green
* HSL - numeric values that describe a mix of hue, saturation and lightness

## Foreground and Background

`color` changes foreground color, `background-color` changes background color.

## Hexadecimal

We can use _hexadeciamal_ syntax to specify colors. Those colors are called _hex colors_: `color: #8AF64D;` or `color: #FFF;`

## RGB colors

Another syntax is `color: rgb(23, 45, 23);`

## Hex and RGB

We can use both Hex and RGB colors, but fo consistency it's better to stick to one of those systems.

## Hue, Saturation and Lightness

RGB system is convenient because that's close to how computer renders colors. The alternative is _HSL_ system. Syntax is `color: hsl(120, 60%, 70%);`.

First number - _hue_ represents degrees on a _hue circle_:

![hue cirlce](https://s3.amazonaws.com/codecademy-content/courses/learn-css-color/color_wheel_4_background.svg)

Second is _saturation_ or _purity_ of a color.

Third is _lightness_. 50% is normal lightness, lower is darker, higher is lighter.

## Opacity and Alpha

Use `rgba` and `hsla` to set up _alpha_ or _opacity_ of an element. Third parameter takese values in range `[0, 1]` and determines how transparent the element is.
