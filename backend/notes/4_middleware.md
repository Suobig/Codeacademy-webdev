# Middleware

_Middleware_ in backend development is the code that executes between a server receiving a request and sending a response.

## DRYing code with Functions

Good code avoids repeating itself. In JavaScript it can be to some extent achieved by using functions.

## DRYing Routes With app.use()

To register a middleware we call `app.use()` passing it a middleware function:

```javascript
app.use((req, res, next) => {
    // Your middleware code goes here
})
```

Express application is basically a series of middleware function calls.

The problem is - routing method will stop a this middleware function as it considers routing complete.

## next()

After we successfully executed our middleware function, we need to tell the routing method that the job is not done yet and it should continue looking for a proper router. We can do this by invoking `next()` - a third arugment the function takes, - in our middleware funtion.

## Request and Response Parameters

Routes is just a special case of a middleware function, meaning that all middleware functions can work with request and response parameters.

We can also provide `path` argument for middleware functions so that they will trigger only for specific paths.

## Control Flow with `next()`

We can test user permissions for accessing certaing parts of information. `next()` will help us doing this as we can make a middleware function just not pass control forward but return 403 (FORBIDDEN) code instead.

## Multiple Paths

`app.use()` can take an array of paths as a `path` argument.

## Middleware Stacks

Since `app.use()`, `app.get()`, `app.post()`, `app.put()` and `app.delete` can use multiple middleware functions as arguments, we can create middlware stacks that look like this:

```javascript
app.get(
    '/items',
    authenticate,
    getItems
);
app.get(
    '/items/:id',
    authenticate,
    checkItemExists,
    getItem
);
app.post(
    '/items',
    authenticate,
    validateItemData,
    createItem
);
app.put(
    '/items/:id',
    authenticate,
    checkItemExists,
    validateItemData,
    updateItem
);
```

## Open-Source Middleware

### Logging

[morgan](https://github.com/expressjs/morgan) is an opensource Express.js middleware for logging information about HTTP requres-responce cycle in a server application.

invoking `morgan()` will return a middleware function. Then we pass an argument stating how thorough our logging should be.

### Body Parsing

For body parsing there's [body-parser](https://github.com/expressjs/body-parser#body-parser).

### Error Handling Middleware

Sometimes problem handle in the application and we want to communicate the user about the problem.

Error handling middleware should be the last `app.use()` in the application. That's because error passes through stacks as they are called, so error handling should happen last.

If we anticipate that the operation might fail, we can pass an error object into `next()` call. When called with error as a parameter, `next()` will route to the first error handler middleware it finds.
