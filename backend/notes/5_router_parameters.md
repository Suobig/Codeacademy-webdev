# Router Parameters

When working with routes taht require parameters we might find ourselves in a position where multiple different routes require the same parameter and use it to identify the same piece of data.

## `router.param()`

Express has a method specifically for this issue.

```javascript
app.param('spellId', (req, res, next, id) => {
  spellBook.find(id, (err, spell) => {
    if (err) {
      next(err);
    } else if (spell) {
      req.spell = spell;
      next();
    } else {
      next(new Error('Your magic spell was not found in any of our tomes'));
    }
  });
});
```

In the code above we intercept any request to route handlers that pass `spellId` as a param and perform necessary operations that are needed to do. Then we add results of those operations to `req` object and invoke `next()`.

## Merge Parameters

When we create a router, we may pass options object:

```javascript
const familiarRouter = express.Router({mergeParams: true});
```

This means that `familiarRouter` should have access to parameters, passed into a parent router.
