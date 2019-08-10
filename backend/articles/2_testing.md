# Testing with Mocha and Chai

This article is a high-level overview of testing frameworks Mocha and Chai

## Introduction

### Why write tests for code

Tests are common in software engineering because they help to document the core functionality of the code and make sure that new features don't introduce breaking changes.

Having comprehensive tests lets engineers to confidently change or add to existing code knowing that their changes haven't broken other features or had unintended side effects somewhere else in the app.

### What is Unit Testing

> _Unit testing_ means testing the behavior of code in small, independent units.

Units are typically designed to be the smallest meaningful chunk of independently testable code. This is in comparison of integrational testing where units are being tested in groups.

Unit tests are mostly standard, while strategy for integrational testing vary from project to project.

### Mocha and Chai, Test Suites and Test Cases

Mocha and Chai are two JavaScript frameworks commonly used together for  unit testing.

_Mocha_ is a testing framework that provides functions that are executed according in a specific order, and then logs their results to the terminal window.

In Mocha tests keywords `describe` and `it` are commonly used. These keywords provide structure to the test by batching them into test suites and test cases.

> A _test suite_ is a collection of test all related to a single functionality or behavior.
> 
> A _test case_ or a _unit test_ is a single description about the desired behavior of the code that either passes or fails.

Test suites are batched underneath `describe` keyword and test cases - underneath `it` keyword.

Additionally, Mocha provides tools for cleaning the state of the software being tested in order to insure that test cases are being run independently of each other. There're other tools that allow to _stub_ or _mock_ the desired behavior of other units. _Independence of testing_ is a key principle of unit testing as it allows the cause of error to be pinpointed more specifically if a test case fails, thereby speeding up the debuggin process.

### Chai Assertions

They base component of test cases are _assertions_. Assertions are tied to specific values and they will fail if the expected value does not match the actual value.

_Chai_ is the assertion libarary that is often used with Mocha. Chai provides clean syntax that almost reads like english:

```javascript
expect(exampleArray).to.have.lengthOf(3);
```

### Failing and Passing Tests

Robust test are accurate for both failing and passing conditions. Failing conditions are more important than passing. If a test erroneously fails, it will be easy to find the error. But if the test erroneously passes, that might be very dangerous.

## Reading Tests

### Example Tests

```javascript
describe('setPlayerMoves() - Main Functionality', function() { // this is a `describe` block, everything within this callback function is one test suite
  afterEach(clearMoves); // this is a `hook` that gets called between `it` blocks to reset the state

  it('a function called setPlayerMoves should exist', function() { // this is an `it` block, everything inside this function is a single test case
    should.equal(typeof setPlayerMoves, 'function'); // tests often start by checking that the right things exist and are of the right type
  });

  it('should set player one\'s moves with valid inputs', function() {
    setPlayerMoves('Player One', 'rock', 11); // here we call a function from the code we are testing that sets play one's move to rock with a value of 11

    should.equal(playerOneMoveOneType, 'rock'); // this is an assertion that tests that after the `setPlayerMoves()` function above is called, playerOneMoveOneType should equal `rock`
    should.equal(playerOneMoveOneValue, 11); // this assertion tests that setPlayerMoves can set the value of playerOneMoveOneValue
  });
})
```

### Test Suites

Test suites are `describe` function that test some functionality. They contain test cases inside.

Each `describe` function takes 2 parameters: description string and a callback function.

Inside the callback function `afterEach` function is called. This is called a hook.

> a _hook_ is a function that gets called at certain points in the lifecycle of the process that it is running in.

`afterEach` function gets called after each test case.

It's important for tests to generally start from a clean and predictable slate.

### Test Cases

Test cases are `it` function calls. They take description and a callback function. Teach test suite may contain multiple test cases.

### Assertions

Assertion are function calls for `should`, `expect` and `assert`. Each test case may contain multiple assertions.

## Running Tests and interpreting output

To run tests, execute

```bash
npm test
```

### Skipping Test

You may apply `.only(0)` or `.skip()` to `describe` or `it` blocks to limit the number of running test. See [mocha documentation](https://mochajs.org/#mochaopts) for more details.
