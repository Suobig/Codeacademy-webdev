# Node.js

## Introduction

Node.js is JavaScript runtime environment invented by Ryan Dahl in 2009.

> A _runtime environment_ converts high-level human-readable code into a code that a computer can execute.

Node.js can be used to create web servers, commandline application and desktop applications.

Get node version:

```bash
$ node -v
v8.11.1
```

## The Node REPL

> REPL is **r**ead-**e**val-**p**rint-**l**oop. It's a program that _loops_ through three different states:
>
> * the _read_ state where the program _reads_ input from a user
> * the _eval_ state where the program _evaluates_ the user's input
> * the _print_ state where the program _prints_ out its evaluation to a console.

We can access REPLY by typing

```bash
$ node
>
```

The REPL will evaluate input line by line. If you want to type multiple lines, first type `.editor`. To exit editor type ^D.

Each REPL session has a shared memory, so you can save and call variables.

The Node environment contains a number of Node-specific global elements in addition to those built-in into JavaScript language. Every Node-specific global property is stored in `global` object. It's a replacement for JavaScript `Window` object, that Node.js doesn't have.

## Running a Program with Node

With Node you can run JavaScript programs directly on the computer, without a browser.

To run a file, type

```bash
node fileName.js
```

## Accessing the Process Object

In computer science, a _process_ is the instance of a computer program that is being executed.

Node has a global `process` object that stores information about current process running.

The `process.env` property is an object which stores and controls information about the environment in which the process is currently running. It can be useful to have some `if/else` logic in the program depending on current environment. One convention is to add a property `NODE_ENV` to `process.env` with a value of rather `production` or `development` and then check for it:

```javascript
if (process.env.NODE_ENV === 'development'){
  console.log('Testing! Testing! Does everything work?');
}
```

The `process.memoryUsage()` returns information on the CPU demands of the current process:

```javascript
{ rss: 21770240,
  heapTotal: 7684096,
  heapUsed: 5572120,
  external: 8637 }
>
```

_Heap_ in this case represents number of bytes of computer memory.

The `process.argv` holds an array of command line arguments provided when the current process was initiated. The first argument is always the absolute path to Node, which ran the process and the second element is the path to the file that 's running.

Check [documentation](https://nodejs.org/api/process.html) for more.

## Core Modules and Local Modules

> _Modularity_ is a software design technique where one program has distinct parts each providing a single piece of the overall functionality.

Modularity is essential for creating scalable programs. To import the module use `require()` functions and pass the path to the module:

```javascript
// Require in the 'events' core module:
let events = require('events');
```

Node.js comes with a bunch of core modules.

The require function will first check if the argument is a core module, and then move on to search a local module.

To export a module there's a special Node object `module.exports`. You assign to it an object that will contain all your exports.

## Node Package Manager

npm or **N**ode **P**ackage **M**anager gives access to third-party modules. It's downloaded automatically with Node.

## Event-Driven Architecture

Node is often described as having event-driven architecture.

When we create a website, we provide functionality but can't tell when and in what order it will be used. So it's driven by events. Node is built on the same principles.

Node provides an `EventEmitter` class in `events` module:

```javascript
// Require in the 'events' core module
let events = require('events');

// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();
```

Each EventEmitter has `.on()` method which assigns _listener callback_ function to a named event. The `.on()` method takes 2 arguments: event name and callback function:

```javascript
myEmitter.on('new user', newUserListener)
```

To emit and event use `.emit()` method. Pass event name to it.

## Asynchronous JavaScript with Node.js

Node is using [event loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/) like the one used in browser-based JavaScript execution. The _event loop_ enables asynchornous actions to be handled in a [non-blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/) way.

Node provides a number of APIs for performing asynchronous tasks that take a callback function as an argument. Under the hood these APIs trigger the subscription to and emission of events to signal the completion of operation. When the operation ends, the callback function is added to a queue of tasks waiting for execution. Those tasks will be executed when the current stack of synchronous tasks finish executing. This creates a problem that, if current stacks is never empty, those waiting callbacks will never execute. Consider following code:

```javascript
let keepGoing = true;

let callback = () => {
  keepGoing = false;
};

setTimeout(callback, 1000); // Run callback after 1000ms

while(keepGoing === true) {
  console.log(`This is the song that never ends. Yes, it just goes on and on my friends. Some people started singing it, not knowing what it was, and they'll continue singing it forever just because...`)
};
```

`setTimout` is an asynchronous task that is supposed to launch a callback function ater 1000ms. But the infinite loop of synchronous tasks that is coming after it will never let the callback to be called, because it fill always keep call stack occupied.

One way to avoid this problem is to use `setInterval()` API.

Modern node versions provide support of Promises instead of callbacks. Promises can be found in `util.promisify` library.

## User I/O

Node provide different ways of working with i/o. One way to output data is `console.log()` which is a _thin wrapper_ over `process.stdout.write()` function.

Node can receive input from user via `stdin` by using `process.stdin.on()`:

```javascript
process.stdin.on('data', (userInput) => {
  let input = userInput.toString()
  console.log(input)
});
```

`process.stdin` is an instance of `EventEmitter`, so we use `.on()` method, passing event name and a handler. The event is called `'data'`.

`userInput` argument is an instance of the [Node `Buffer` class](https://nodejs.org/api/buffer.html#buffer_buffer) so we convert it to string before using.

## Errors

The Node environment has all the standard JavaScript errors such as:

* `EvalError`
* `SyntaxError`
* `RangeError`
* `ReferenceError`
* `TypeError`
* `URIError`

as well as the JavaScript `Error` class for creating custom Errors.

We can use error handling techniques like `try...catch` statements.

Many async Node APIs support _error-first callback functions_ — callback functions that have an error as a first argument. If the error is thrown, it's passed to the callback function as the first argument. Otherwise the first argument is `undefined`:

```javascript
const errorFirstCallback = (err, data)  => {
  if (err) {
    console.log(`There WAS an error: ${err}`);
  } else {
     // err was falsy
      console.log(`There was NO error. Event data: ${data}`);
  }
}
```

It's useful, because normal `try...catch` method won't work with async methods.

All data on the computer is organized and accessed via _filesystem_. When running JavaScript in a browser it's important for a script to have only limited access to the filesystem. This technique is called _sandboxing_.

In the backend it's essential for the script to have les restrictive access to the server's filesystem.

Node provides a library `fs` to work with filesystem:

```javascript
const fs = require('fs');
```

Each fs method has a sycnhronous and an asynchronous version. Consider following code that invokes `fs.readFile()` method:

```javascript
let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file returned data: ${data}`)
  }
}

fs.readFile('file.txt', 'utf-8', readDataCallback);
```

`readDataCallback` - is error-first callback function.

`fs.readFile()` takes 3 arguments:

1. filepath
2. encoding
3. callback function

## Readable Streams

In the real world it's more realistic to get information in short pieces by what's called _stream_. Streaming data is preferable, because you don't need to store all the file data (that may be gigabytes) in RAM - you prosess it as you get it.

One of the simplest streams in Node.js is reading and writing to file line-by-line. `readline` Node library provides `createInterface` method for this:

```javascript
const fs = require('fs');
const readline = require('readline');

const myInterface = readline.createInterface({
  input: fs.createReadStream('text.txt'),
});

myInterface.on('line', (fileLine) => {
  console.log(fileLine);
})
```

`readline.createInterface` creates an instance of `readline.Interface` class that emits `'line'` events.

## Writable Streams

We can also create a writable stream:

```javascript
const fs = require('fs')

const fileStream = fs.createWriteStream('output.txt');

fileStream.write('This is the first line!');
fileStream.write('This is the second line!');
fileStream.end();
```

Unlike readable stream that closes once he runs out of data to read, writable streams can run until we close them.

## Create HTTP Server

Node was desinged with back end developers needs a top priority. So of course it's able to run a _web server_.

Web server instruments are stored in `'http'` library:

```javascript
const http = requre('http');
```

To run a server we execute `.createServer()` method and provide it with a callback function:

```javascript
const server = http.createServer(requestListener)
```

After that we set server to listen to a specific port. Each server on a computer is set to listen to its own port to let the incoming data be properly routed:

```javascript
server.listen(3000);
```

`requestListener` callback function takes two arguments: `request` and `response`. `request` is what the client sent and `response` is what will be sent back:

```javascript
const requestListener = (request, response) => {
  
}
```

In the body of `requestListener` we're supposed to mutate `response` object to return the data according to user request:

```javascript
let requestListener = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain' });
  response.write('Hello World!\n');
  response.end();
};
```
