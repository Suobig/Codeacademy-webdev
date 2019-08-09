# What is REST

## REpresentational State Transfer

REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called _RESTful systems_, are characterized by following features:

* stateless
* separation of concerns between client and server

## Separation of Client as Server

Client and server should be seaparated, meaning that we can replace one client with another and one server with another and everything should work properly as long as they follow the communicational protocol.

Different clients, using the same REST endpoints and performing the same actions should receive the same result.

## Statelessness

Neither client nor server should have any prior knowledge about the state of each other to be able to perform operations through REST interface. This means, for example, that every message sent through REST interface should make sense by itself, without needing to know any previous messages.

This is achieved by using _resources_ rather than _commands_.  Resources are the nouns of the Web - they describe any object, document or _thing_ that may be stored or sent to other service.

Because REST systems interact through standard operations on resources, they do not need to rely on a concrete implementation of interfaces.

This constaints help RESTful appications achieve reliability, high performance and scailability, as components can be managed, updated and reused without affecting the system as a whole.

## Communication Between Server and Client

In REST architecture, clients send requests to retrieve or modify resources, and servers send responses to these requests.

### Making Request

A request generally consists of:

* A HTTP verb, which defines what kind of operation is going to be performed
* a _header_, with meta-information — information about the request
* a path to a resource
* an optional message body containing data.

#### HTTP verbs

There're 4 basic HTTP verbs to interact with resources in a REST system:

* GET - retrieve a specific resource (by id) or a collection of resources
* POST - create a new resource
* PUT - update a specific resource (by id)
* DELETE - delete a specific resource (by id)

To learn more about those HTTP verbs read this article: [What is CRUD?](https://www.codecademy.com/articles/what-is-crud)

#### Headers and Accpet parameters

In the header of the request a client sends what type of content he's able to accept from the server. This is called an `Accpet` field. It ensures that a server doesn't send information, that the client can't understands. The options for types of content are MIME Types.

> MIME stands for Multipurpose Internat Mail Extensions, more on them [in MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

MIME types consist of `type` and `subtype` separated by a slash `/`.

For example, file containing HTML will have `text/html` MIME type. Plain text is `text/plain` type.

Some other commonly used MIME types:

* `image` - `image/png`, `image/jpeg`, `image/gif`
* `audio` - `audio/wav`, `audio/mpeg`
* `video` - `video/mp4`, `video/ogg`
* `application` - `application/json`, `application/pdf`, `application/xml`, `application/octet-stream`

For example, a client requesting article with id 23 may send this request:

```bash
GET /article/23
Accept: text/html, application/xhtml
```

#### Paths

Requests must contain a path to a resource (or collection of resources) that the operation should be performed on. In RESTful APIs paths should be designed to help the client know what is going on.

Conventionally, the first part of the path should be the plural form of the resource. This keeps nested paths simple to read and easy to understand.

For example, when we see the path `fashionbutique.com/customers/223/orders/12`, we can see that an order with id=12 is requested for customer with id=223.

### Sending Responses

### Content Types

In cases where a server is sending a data payload to a client, it must provide a header with `content-type`. This content type is a MIME type that indicates, what type of content is being sent. This type should be one of the types a client sent in request's `accept` field.

### Response Codes

Responses from server contain information about the status of the operation the client requested. They're called _status codes_. These are some common ones:

* 200 (OK) - successfull HTTP request
* 201 (CREATED) - request resulted in an item being successfully created.
* 204 (NO CONTENT) - response for successful request that contains no body
* 400 (BAD REQUEST) - response can't be processed because of bad syntax, excessive size or some other client error
* 403 (FORBIDDEN) - the client doesn't have permission to access requests resource
* 404 (NOT FOUND) - the resouce wasn't found
* 500 (INTERNAL SERVER ERROR) - generic answer for unexpected failure when no additiona information could be provided.

For each HTTP verb there're standard status codes:

* GET - 200 (OK)
* PUST - 201 (CREATED)
* PUT - 200 (OK)
* DELETE - 204 (NO CONTENT)
