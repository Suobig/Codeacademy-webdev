# Introduction to HTML

HTML is the skeleton for all pages. It provides structure to the content appearing on a webstie, such as images, text, or videos.

## What is HTML

HTML stands for HyperText Markup Language:

* a _markup_ language is a computer language that defines the structure and presentation of raw thext.
* In HTML, the computer can interpret _raw text_ that is wrapped in HTML elements.
* _HyperText_ is text, displayed on a computer or device that provides access to other text through links, also known as _hyperlinks_.

## HTML anatomy

HTML is composed of _elements_. They structure the webpage and define it's conent.

```html
<p>Hello World!</p>
```

The paragraph element is made up of one _opening tag_ (`<p>`), the content ("Hello World!" text), and a _closing tag_ (`</p>`).

Different elements can have different content. Some can contain only text (like `<p>` element), some may contain other elements (like `<div>` element), some may contain any content at all (self-closing elements like `<img>`).

Some elements introduce content inbetween opening and closing tags, while other - self-closing - elements introduce content differently.

## The Body

`<body></body>` element is one of the key HTML elements. Only content within this element will be displayed on the screen.

## HTML Structure

When an element is contained inside another element it's considered the _child_ of that element. The child is _nested_ inside of the _parent_ element.

This relationship is known as _hierarchy_.

If two elements are on the same level of hierarhy and have the same parent, they're considered _siblings_.

## Headings

Headings can be used for various purposes, like titling sections, articles or other forms of content.

## Divs

It's one of the most popular HTML elements. It's short of "division", thus it's purpose is to divide a page into sections. `div`s can contain any text or other HTML elements.

## Attributes

Attributes are content added to the opening tag of and element. Can be used for providing information or changing styling. Attributes consist of two parts:

* _name_ of the attribute
* _value_ of the attribute

## Displaying Test

If you want to display text, you can use _paragraph_ or _span_

* _Paragraphs_ (`<p>`) contain a block of plain text
* _Spans_ (`<span>`) contain short pieces of text or other HTML. They're used to separate _inline_ pieces of text. We can think of `<span>` as an inline `<div>`

## Styling text

You can stylize text using HTML tags. `<em>` tag emphasizes text, while `<strong>` tag highlights important text.

* The `<em>` tag will generally render as _italic_
* The `<strong>` tag will generally render as **bold**

## Line Breaks

Addign breaks in the HTML code won't affect the positioning in the browser. If you want to modify spacing in the browser, you can use HTML _line break_ element `<br>`

**Note this:** `<br>` element has no closing tag.

`<br>` is rarely used for spacing HTML elements because of the principle called _separation of concerns_ which guides us to separate HTML structure and it's presentation in browser.

## Unordered lists

_Unordered list_ tag `<ul>` is used to create a list of items in no particular order. The lists outlines individual _list items_ with a bullet point.

The `<ul>` element shouldn't contain raw text and won't automatically format raw text into list items. You must use `<li>` tags for individual list items.

**Note this:** `<li>` element should _never_ exist on it's own and should always be nesten in `<ul>` or `<ol>` elements.

## Ordered lists

_Ordered lists_ `<ol>` are similar to unordered lists except each item is numbered.

## Images

The `<img>` tag is used to add images to a web page. `<img>` is _Void element_, it doesn't require closing tag.

The `<img>` tag as a _required_ attribute called `src`. This attribute must be set to the image's _source_ or location of the image, for example, a _uniform resource locator_ (URL) of the image.

## Image Alts

There're means to help make a webpage more accessible for people using assisting technologies, such as web readers.

The `alt` attribute brigns meaning to mages on the site. It serves several purposes:

* It shows if an image fails to load
* It's being read by screen reading software
* it plays part in _Search Engine Optimization_ (SEO), improving your site's rating.

## Videos

`<video>` tag is used to add a video to the web page. It requires `src` tag. Unlike `<img>` it's not self-closing and requires a closing `</video>` tag.

Video element has few other attributes:

* `width` and `height` to set size of the video
* `controls` to add basic video controls - play, pause, skip. It's _boolean attribute_ and doesn't need a value (including attributes signifies that it's value is true, while omitting it meand that it's false)

Element's body contains content that will be displayed if the browser is unable to load the video.

## Extra

HTML is different from JS. HTML is a declarative (as an alternative to a imperative) programming language, meaning it's _describing the final result_ , not the steps _how to achieve it_. So writing HTML code you're telling the browser.

If you use headings, you should keep their hierarchy for the sake of accessibility because search engines and screen readers are using those headings as navigation points.

We should use HTML semantically, meaning that we should really care about meaning of tags, not their presentation.

When we see certain HTML elements (like `<h1>` or `<li>`) being formatted in the browser - it's inner browser CSS that is doing this.

It's important to have your HTML well structured, because it helps readability of your HTML code, accessibility of your page and makes it easier to apply styles.
