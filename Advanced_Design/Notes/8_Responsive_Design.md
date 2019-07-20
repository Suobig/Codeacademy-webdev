# Responsive Design

## Relative Measurements

_Responsive design_ refers to the ability of  a website to resize and reorganize its content based on:

1. The size of other content on the website.
2. The size of the screen

To do this we need to measure content not in _pixels_ that are absolute units of measurement, but in _relative measurement_ instead.

## Em

Em represents size based on used font size. Default font size in many browsers is 16px, so if no font size is specified, 16px = 1em, 32px = 2em.

## Rem

`rem` stands for _root em_ meaning that it checks root element for font size, not a parent element.

It's useful when you want all elements to have the same base to measure their size.

## Percentages: Height & Width

Percentages are used when we need to size element relative to its parent elements.

## Percentages: Padding & Margin

When we use percentages to set margins and paddings, they only take into account the _width_ of the parent element.

## Width: Minimum & Maximum

`min-width` ensures minimum width of an element.
`max-width` ensures maximum width of an element.

Same with height.

## Scaling Images and Videos

First, we need to ensure that images don't overflow from the container, so we set a CSS rule `overflow: hidden;` for a container.

Then we decide what dimension is more important to show:

* if it's `width` we set

```css
max-width: 100%;
height: auto;
```

if it's `height` we set

```css
max-height: 100%;
width: auto;
```

Also we set `display: block` for images to occupy whole line (default is `display: inline-block`).

## Scaling Background Images

There're certain properties to control background images:

1. `background-image`. Take a `url()` value.
2. `background-repeat` - how to repeat an image:
   * `repeat-x` - repeat only on x-axis. Same as `repeat no-repeat`
   * `repeat-y` - repeat only on y-axis. Same as `no-repeat repeat`
   * `repeat` - repeat on box axies. Same as `repeat repeat`
   * `space` - repeat without cutting image. If there's space - distribute it evenly between images.
   * `round` - repeat without cutting as much as possible, then stretch image to fill all the space.
   * `no-repeat` - don't repeat image.

3. `background-position` - how to position image. Possible values:
   * `top`
   * `left`
   * `right`
   * `bottom`
   * `center`
   * `X% Y%`
   * `bottom Xpx rigth Ypx`
   * `rigth X% bottom Y%`

4. `background-size` - how to size image. Possible values:
   * `cover` - size image to cover as much space as possible without stretching
   * `contain` - stretch the image as large as possible without stretching or cutting it.
   * `px`, `em`, `rem`, `%` stretch the image by `X` or `Y` axis (first argument - `X` second - `Y`) to fit specific size.
