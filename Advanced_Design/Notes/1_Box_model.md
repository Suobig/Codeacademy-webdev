# The Box model

## The Box Model

The box model comprises the set of properties:

* _width_ and _height_ - width and height of the content area;
* _padding_ - the amount of space between the content area and the border;
* _border_ - thickness and style of the border;
* _margin_ - amount of space between the border and the outside edge of the element.

## Heigth and Width

`width` and `height` can be measured in different units. `px` - pixels are the same on all devices and screen widths.

## Borders

Borders have specific properties:

1. `width` - thickness. Can be set in pixels or with keywords: `thin`, `medium`, `thick`.
2. `style` - The design of a border. There're [10 different styles](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#Values) including `none`, `dotted` and `solid`.
3. `color` - the color of the border.

The default border is `medium none color` where `color` is the current color of the element.

To set borders to certain sides of an element use:

* `border-top`
* `border-right`
* `border-bottom`
* `border-left`

## Border Radius

We can modify the corners of an element's border box with `border-radius` property.

You can target specific corners:

* `border-top-left-radius`
* `border-top-rgith-radius`
* `border-bottom-left-radius`
* `border-bottom-right-radius`

## Padding

The `padding` property is often used to expand the background color and make content look less cramped.

To be more specific with the amout of padding there're poperties:

* `padding-top`
* `padding-right`
* `padding-bottom`
* `padding-left`

You can specify padding differently:

* `padding: <top> <right> <bottom> <left>`
* `padding: <top & bottom> <rigth & left>`

## Margins

There're 4 ways to set up margins:

* `margin: 20px` - sets up margins for all for sides
* `margin: 20px 10px` - sets up margins for top-bottom and left-rigth sides
* `margin: 10px 20px 30px 40px` sets up margins on each side in 1 line;
* `margin-top: 10px;`, `margin-bottom: 20px;`, `margin-left: 30px;`, `margin-right: 40px;` - sets up margins for each individual side on different line;

## Auto

`0 auto` margin value instructs to center the element in it's container (but only if it has a set width).  

## Margin Collapse

Horizontal margins of elements add together, but vertical margins collapse so the largest of 2 magrins sets up the distance.

## Minimum and Maximum Height and Width

Sometimes it's useful to set up minimum and maximum height of width for the element in case it's size is changing based of the screen size.

## Overflow

`overflow` controls what happens to the content that spills, over _overflows_ outside its box. In can be set to one of the following values:

* `hidden` - hide overflow from view
* `scroll` - add scrollbar to the box
* `visible` - default value, show overflowing content.

## Resetting Defaults

All major web browsers have a default stylesheet known as _user agent stylesheet_ ("user agent" is a technical term for a browser). Many developers reset default values using

```css
* {
    margin: 0;
    padding: 0;
}
```

## Visibility

The `visibility` property can be set to `visible` or `hidden`.

`display: none` will completely remove the element from web page, but `visibility: hidden` will hide only the content of the element, still reserving it's space on the web page.
