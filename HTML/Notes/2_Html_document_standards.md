# HTML Document Standards

## Preparing for HTML

HTML files require certain elements to set up the document properly. You can inform a browser that you're using HTML by starting the document with _document type declaration_.

It looks like this:

```html
<!DOCTYPE html>
```

This declaration is an instruction and it must be the first line of code in the document. Browser will assume that `html` refers to HTML5 as it is the current standard.

Also, html code should be always saved to a file with a **.html** extension.

If this line is missing (or used incorreclty), the browser will assume that it's an older, non-stardardized version of HTML.

## The `<html>` tag

The `<!DOCTYPE html>` tag provides browser with the information about document type and html version, but it doesn't provide any content. For this we need to use `<html>` tags. Everything within those tags will be interpreted as HTML code.

## The Head

Now we need to give browser some information about the document itself. We can do this by adding `<head>` element.

This element contains the _metadata_ for a web page. It's information about the webpage that isn't displayed directly.

The heading has hight influence on how search robots evaluate your page. Your page will rank very high if the title of your page matches the search request.

The _World Wide Web Consortium_ (W3C) recomends the page title to be less than 64 characters long.

> W3C is the main international standards organization in the World Wide Web. It's founded and led by Tim Berners-Lee and consists of 444 members. It's main goal is developing standards for the WWW, but it also engages in education and outreach, develops software and servers as an open forum for discussion about the Web.

## Page titles

One metadata to add to a `<head>` element is page's title that will display in the browser tab. Use `<title>` tag for this.

## Linking to Other Web Pages

You can add a link to another webpage by creating an _anchor_ element `<a>` and including the text of the link between the tags. You add the URL of the link to a `href` attribute. `href` stands for _hyperlink reference_.

## Opening Links in a New Window

To specify how the link should be open we can use `target` attribute.

For a link to open in a new window the `target` attribute requires value `"_blank"`. In modern browsers `target="_blank"` will open a link in a new tab, not a new window.

There're 4 different `target` values:

* `_self` - _default_ open in a current tab.
* `_blank` - open in a new tab
* `_parent` - open in a parent tab. If there's no parent tab, will act like `_self`
* `_top` - open in a top level browsign context. If there's no parent, acts like `_self`

## Linking to Relative Page

If we want to link a file at the same web server, we can use relative path instead of absolute. For example, we can use `./contacts.html` to search for the contacts file in the current folder.

## Linking at Will

Not only text, nearly any element can become a link if you wrap it into an anchor element.

## Linking to the same page

You can link to the element on the same page by it's id. For example `<a href="#top">Top</a>` will navigate you an element with `id="top"`

## Whitespace and Indentation

Since position of the element in browser  is indepenent of the amount of whitespaces and indentations in the HTML file, those 2 intruments are being used to make the code more readable.

For indentation it's recomended to use 2 spaces.

## Comments

Everything between `<!--` and `-->` tags is considered to be comments and is ignored by a browser. Comments can help you to describe your code or to temporarily disable some parts of code during development.
