# Container and Presentational Components

Sometimes a component has too many responsibilities, violating single responsibility principle. One way to deal with it is to separate components into _container_ and _presentational_ parts.

The idea is:

> If a component has to have `state`, make calculations based on `props` or manage any other complex logic, it shouldn't also have to render HTML-like JSX. Instead it should render another component.

## Presentational Components

_Presentational_ components don't render themeselves. They get rendered by _container_ components.

On other hand, presentational components don't have any other class properties and they don't redefine base constructor. They contain only render() property.

## Container Components

Container component `render()` function should return just a single line of JSX:

```javascript
return <MyPresentationsComponent props={value}/>;
```

It passes information needed for presentational component in props, while incapsulating all the logic of getting this information.
