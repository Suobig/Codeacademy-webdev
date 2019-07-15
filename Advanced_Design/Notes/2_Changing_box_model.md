# Changing Box Model

## Why change box model

Using default box model it's sometimes difficult to determine exact size, because padding and border affect it. But there're ways to avoid this problem.

## Content-Box

In CSS the `box-sizing` property controls the type of box model. Deafult value is `content-box`

## Border-Box

By changing `box-sizing` to `border-box` we can change how the box-model is calculated. With `border-box` we set width of the whole box (content+padding+border) and content width and height are being calculated automatically.
