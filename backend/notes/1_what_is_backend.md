# What is Backend

> Simply speaking _front-end_ is the part of a webapp that a visitor can interact with and see.

Front-end is built mostly of HTML, CSS and other _static assets_

> _Static assets_ are files that don't change

Sometimes front-end development is refered to as _client-side development. In this case "client" is not a human, but a program that request the content (usually - web browser).

The back-end cosists of all the behind-the-scenes processes and data that make a website function and send resources to the client.

## The Web Server

Static files (HTML, CSS, JS, images, etc.) come from a web server.

> A _web server_ is a process running on a computer that listens for incoming requests for information over the internet and sends back responses. Every web site has at least one web server - the one that sent him the initial HTML page.

The specific format for request is called _protocol_. One of the most popular protocols is HTTP (HTTPS lately) - _HyperText Transfer Protocol_. To retrieve data from server, clients make _HTTP request_ for the resources they need for the website.

If the client makes a single request for the page, the page is called _static_ - because data it consists of doesn't change over time.

## Application Server

When the clients request a webpage, a lot happens on the server. If it sends _dynamic content_, it requires a specific logic to build this content.

Collections of programming logic that deliver dynamic content, manage securty, process payments etc. is sometimes known as "application" or _application server_.

## Storing Data

Backend of most modern web applications include some sort of _database_. There're 2 types of databases:

* Relational (MySQL, PostreSQL)
* NoSQL (MongDB, Redis)

> SQL stands for **S**tructured **Q**uery **L**anguage. It's a programming language of accessing and changing data stored in relational databases.

## API

In roder to have consistend ways of interacting with data, a back-end will often include a _web API_.

> API stands for **A**pplication **P**rogram **I**nterface

_Web API_ is a collection of predefined ways of, or rules for, interacting with a web applicaton's data, often through HTTP request-response cycle.

Some web APIs are open to the public.

## Authorization and Authentication

> _Authentication_ is the process of validating the identity of a user.

One way of authenticating a user is by using login/password pairs. Nowadays oAuth authentication is also popular.

_Authorization_ controls which users have access to which resourses and actions.

## Backend Stacs

Backed can be written on many languages:

* PHP (Larave)
* JavaScript (Express.js)
* Ruby (Ruby on Rails)
* Java (Spring, JSF)
* Python (Flask, Django)

The collection of technologies used to create the front-end and back-end of a web application is referred to as _stack_.

For example, **MEAN** stack contains of:

* **M**ongoDB - database
* **E**xpress.js - back-end framework
* **A**ngular.js - front-end framework
* **N**ode.js - back-end environment

while **LAMP** stack contains of:

* **L**inux
* **A**pache
* **M**ySQL
* **P**HP
