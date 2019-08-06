# Advanced JSX

## `class` vs `className`

In JSX you can't use attribute `class`, you have to use `className` instead:

Wrong:

```javascript
<h1 class="big">Hey</h1>
```

Right:

```javascript
<h1 className="big">Hey</h1>
```

This is because JSX gets translated in JavaScript and `class` is a reserved word in JavaScript.

When JSX is _rendered_ `className` gets translated into `class`.

## Self-Closing Tags

In HTML you can use either

```html
<br />
```

or

```html
<br>
```

but in JSX you _have to_ use

```javascript
<br />
```

## JavaScript inside JSX

Code in curly brackets inside JSX expressions will be treated like normal JavaScript:

```javascript
ReactDOM.render(
    <h1>{2 + 3}</h1>,
  document.getElementById('app')
);
```

Will render the following HTML element:

```html
<h1>5</h1>
```

## Variables in JSX

Whenever your inject JS in to JSX it exists in the same environment as the rest of your JS code. Meaning you can access variables while inside JSX expression:

```javascript
// Declare a variable:
const name = 'Gerdo';

// Access your variable
// from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;
```

## Variable Attributes in JSX

It's common to set JSX attribute values as JS variables:

```javascript
// Use a variable to set the `height` and `width` attributes:

const sideLength = "200px";

const panda = (
  <img
    src="images/panda.jpg"
    alt="panda"
    height={sideLength}
    width={sideLength} />
);
```

## Event Listeners in JSX

JSX element can have _event listeners_, just like HTML elements.

Event listener attribute's _name_ should be a valid event name (see full list [here](https://reactjs.org/docs/events.html#supported-events)). Note that in HTML event names are written in lowercase (`onclick`, `onmouseover`), while in JSX they're written in camelCase (`onClick`, `onMouseOver`).

Event listener attribute's _value_ should be a valid function:

```javascript
function myFunc() {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}

<img onClick={myFunc} />
```

## JSX Conditionals

You _can not_ inject `if` statements into JSX. There're certain ways we can get around this limitation.

1. render different elements depending on condition:

    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';

    let message;

    if (user.age >= drinkingAge) {
    message = (<h1>Hey, check out this alcoholic beverage!</h1>);
    } else {
    message = (<h1>Hey, check out these earrings I got at Claire's!</h1>);
    }

    ReactDOM.render(
    message,
    document.getElementById('app')
    );
    ```

2. Use ternary operator:

    ```javascript
    const img = <img src={pics[x ? y : z]} />;
    ```

3. `&&` operator

    It's best suited for situations where we should show something on a certain condition:

    ```javascript
    const tasty = (
        <ul>
            <li>Applesauce</li>
            { !baby && <li>Pizza</li> }
            { age > 15 && <li>Brussels Sprouts</li> }
            { age > 20 && <li>Oysters</li> }
            { age > 25 && <li>Grappa</li> }
        </ul>
    );
    ```

## `.map()` in JSX

`.map()` is often used in JSX, for example when we need to turn an array into  unordered list:

```javascript
const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map(string => <li>{string}</li>);
const list = <ul>{listItems}</ul>
```

## Keys

Sometimes when you create a list in JSX you need to include something called `keys`:

```javascript
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
```

A `key` is a JSX attribute. The attribute value should be something unique, similar to an `id` attribute.

Keys don't do anything visible, but they're important for React to keep track of lists. A list needs keys if either of the following is true:

1. The list-items have _state_. For example, to-do list item should remember whether or not it was checked.
2. A lists's order might get shuffled. For example, a list of search results might get shuffled from one render to the next.

## `React.createElement()`

 You can write React code without JSX. The following JSX expression:

 ```javascript
 const h1 = <h1>Hello world</h1>;
 ```

is equivalent for this pure JS expression:

```javascript
const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);
```

More than that, when JSX is compiled the compile transforms the former expression into the latter form.
