# Express Routes

Express is a powerful but flexible Javascript framework for creating web servers and APIs.

## Starting a Server

Express is a node module. To create a server, inovke `express()` function:

```javascript
const express = require('express');
const app = express();
```

In order to start responding, the server should start listening to a specific port:

```javascript
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
```

## Writing Your First Route

To tell our server how it should react to requests, we need to create _routes_. For example, when the server receives a GET request for items, it should return an item list:

```javascript
app.get('/items', (req, res, next) => {
    //Here we'll send items array as a response
})
```

`.get()` function means that we're registering a root for GET request, and the first argument specifies the path. The second argument is a function that will be invoked when the server will get this request.

First two arguments in a callback function represenet request and response.

If no root are provided for the request, the Express server will handle sending a `404 (NOT FOUND)` response.

## Serve static

There's a special command to serve static files in our `public` folder:

```javascript
app.use(express.static('public'));
```

## Sending a Response

HTTP follows a one request - one response cycle. Each client expects exactly one response for each of his requests.

Express servers send response by invoking `.send()` on response object. `.send()` will take any input and include it into response body.

If we want to specify that we're sending a `application/json` type response, we can use `.json()` function on response object. This function will accept any JavaScript object and convert it into JSON format.

## Matching Route Paths

Express searches through routes in the order taht they are registered in the code. The first one that is matched will be used.

_Matching_ means that the route is of corrent type (GET, POST, etc) and has a matching endpoint.

When the route is matched, the callback is invoked and it sends a response.

If there're no matches or Express server has not sent a response at the end of all matching routes, it will automatically send back a 404 (NOT FOUND) response.

## Getting a Single Expression

We can use routes dynamically by including named _route parameters_. Those parameters act as _wild cards_ matching any next at that path segment. For example `items/:id` will match `items/1` as well as `items/45`.

When Express parses parameters, it saves their values alongside with parameter names in `req.params` object. In case of `items/1` the object will be `{ id: 1 }`

The parameter will match any code (not matter of type) at that path level.

## Setting Status Codes

Express allows us to set status codes on responses before they're sent. Any `res.send()` has by default status code 200 (OK).

To create status codes, `res` object has a `.status()` method.

## Other HTTP Methods

Express provides methods for `GET`, `PUT`, `POST` and `DELETE` methods.

## Using Queries

For `PUT` and `POST` requests information can be provided in form of a _query string_.

> Query strings may appear at the end of each URL. They're indicated by `?` symbol and look like a `key=value` pairs separated by `&`.

Express provides `req.query` object that represents a query string in form of key-value pairs.

For example, query string `?name=item1&status=new` will result in

```javascript
{
    name: "item1",
    status: "new"
}
```

object.

## Creating an expression

`POST` requests doesn't end with a route parameter, but with a collection of resourses this new resouse should be added to.

## Using Routers

Routing can easily make the file unreadable. Luckily, there's a special class of objects - Routers, that can handle all needed functionality for routing.

### Express.Router

Creating Router:

```javascript
const express = require('express');
const app = express();

const itemsRouter = express.Router()
app.use('/items', itemsRouter);

itemRouter.get('/:id', (req, res, next) => {...})
```

We invoke `app.use()` (where `app` is our Express instance) to assing a Router to a route.

Note that routes for Router don't include the part it was assigned to (`/:id` instead of `/items/:id`).

### Using Multiple Routing Files

Generally, we keep each Router in its separate file and `require` them in the main application. This allows to keep the code clean and short.

### Nested Routers

We can nest Routers inside Routers to match our routing structure. We just use:

```javascript
parentRouter.use('/childRoute', childRouter);
```
