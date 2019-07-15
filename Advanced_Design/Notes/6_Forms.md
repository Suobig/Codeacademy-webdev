# Forms

HTML `<form>` element is responsible for collecting information to send somwehere else.

## How a Form Works

In this code:

```js
<form action="/example.html" method="POST">
</form>
```

`action` determines where the form will send the information, and `method` sets up how to send this information.

## Text Input

To input some data into a form we need an `<input>` field. It has following attributes:

* `type` determines how to render input field on a web page and what kind of data it can accept. For example `text` value will set the field to accept text input
* `name` is an important attribute because witout it information within `<input>` won't be sent when the form is submitted.
* `value` is a way to prefill a form.

## Adding a label

`<label>` element is paired with `<input>` and is used to explain what that input is used for. To set a pair `<input>` shoud have an `id` attribute, and `<label>` should have `for` attribute set to that id.

## Password Input

Another possible value for `<input>` `type` is `password`. When it's set, all input characters are replaced with `*` or dots.

## Number Input

By setting `type="number"` we create a number input. It accepts only digits and "+", "-", "." symbols. We can additionally set `step` attribute to control up and down arrows.

## Range Input

If we need a slider, use `type="range"`. There're `min` and `max` attributes to assign minimum and maximum values and a `step` attribute to change smoothness.

## Checkbox Input

`type="checkbox"` creates a checkbox. To group checkboxes together use the same name for all of them. It's important to assign `value` attribute of a checkbox to identify it.

## Radio Button Input

`type="radio"` creates a radiobutton.

As in checkbox value attribute is used to identify the button and `name` attribute is used to group buttons together.

## Dropdown List

To create a dropdown list use `<select>` element, set up `id` and `name` attributes. Then create `<option>` element for each option of the list. Each `<option>` element should have `value` attribute.

## Datalist Input

Dropdown list is useful when we have 3-5 options. If there're 20 and more it becomes tedious to scroll through all of them. In this case we can use `<datalist>` element. It requires an `id` attribute and can be linked to a `<input type="text">` element by adding its id value to the `list` attribute.

## Textarea element

When you need multiple row input, use `<textarea>`. We can add `rows` and `cols` attributes.

## Submit Form

After we filled a form, we need to submit it. There's a special type of input: `<input type="submit">`. It looks like a button. Attribute `value` is used to display text inside a button.
