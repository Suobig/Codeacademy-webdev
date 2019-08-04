# Requests

There 4 common types of HTTP request:

* GET
* POST
* PUT
* DELETE

## HTTP requests

JS is non-blocking - it's an _asynchronous_ language.

Javascript uses _event loop_ to handle asynchronous function calls.

## XHR GET Requests

Asynchronous JavaScript and XML (AJAX) enables requests to be made after the initial page load. Not it uses JSON instead of XML. As well as XML Http Request (XHR) is better suted for JSON.

XHR syntax:

```javascript
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        renderResponse(xhr.response);
    }
}

xhr.open('GET', endpoint);
xhr.send();
```

## POST Request

POST request requires additional information to be sent through the request. This additional infromation is sent in the _body_ of the post request.

## Requests in ES6

ES6 introduced promises and a new way to handle HTTP requests - `fetch()` function. This function returns a promise, so using `async ... await` might be a good idea.

## `fetch()` GET request

The `fetch()` function:

* creates a request object that contains relevant information that an API needs.
* Sends that request object to the API endpoint provided.
* Returns a promise that ultimately resloves to a response object, which contains the status of the promise with information the API sent back.

Boilerplate code for fetch GET request:

```javascript
fetch('https://api-to-get.com/endpoint')
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request Failed');
}, networkError => {
    console.log(networkError.message);
})
.then(responseJson => {
    return responseJson;
});
```

## `fetch()` POST request

If we want to create a POST request, we need to pass into `fetch()` second parameter: an object:

```javascript
{
    method: "POST",
    headers: {headers},
    body: {request body},
}
```

## async `fetch()` GET response

async `fetch()` GET response boilerplate:

```javascript
const getFunction = async () => {
    try {
        const response = await fetch('https://api-to-get.com/endpoint');
        if (response.ok) {
            const jsonResponse = await (response.json());
            return jsonResponse;
        }
        throw new Error('Request failed!');
    } catch(error) {
        console.log(error);
    }
}
```

## async `fetch()` POST request

Same as `.then` version.
