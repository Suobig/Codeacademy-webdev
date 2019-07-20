# Media Queries

Media query consits of certain parts.

For example rule `@media only screen and (max-width: 480px) { ... }` has the following parts:

* `@media` - Keyword indicating the beginning of a media query rule.
* `only screen` - limit rule to use only on screens (not printers, audio etc.)
* `and (max-width: 480px)` - use only for screens of the width 480px and less.

## Range

If you want your media query to work only in a certain range of sizes, you can use one rule:

```css
@media only screen and (min-width: 320px) and (max-width: 480px) {
    /* ruleset for 320px - 480px */
}
```

or as 2 separate rules:

```css
@media only screen and (min-width: 320px) {
    /* ruleset for >= 320px */
}


@media only screen and (min-width: 480px) {
    /* ruleset for >= 480px */
}
```

## Dots Per Inch (DPI)

DPI restrictions are used to choose what file size to load for a user. If a user has low-DPI screen, there's no reason to load a high-resulotion file for him.

To make a media rule for hi-res screens use `min-resolution: Xdpi` in your media query definition.

## And Operator

We can use `and` operator to combine multiple media features in one query.

## Comma Separated Lists

Of only one of the features need to be met, they can be listed in a comma separated list:

```css
@media only screen and (min-width: 480px), (orientation: landscape) {
    /* CSS ruleset */
}
```

## Breakpoints

Breakpoints are points at which media queries are set. [This](https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-5/screen-sizes.png) is list of different screen sizes to create breakpoints.
