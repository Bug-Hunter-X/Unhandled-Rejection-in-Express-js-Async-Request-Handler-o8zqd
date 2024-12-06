# Unhandled Rejection in Express.js Async Request Handler

This repository demonstrates a common but easily overlooked error in Express.js applications: unhandled rejections within asynchronous request handlers.  When asynchronous operations (like database queries or API calls) within a route handler throw errors, and these errors aren't properly caught, Express.js won't automatically handle them.  This often leads to silent crashes or unexpected behavior.

## The Bug

The `bug.js` file contains an Express.js application with a route handler that simulates an asynchronous operation that can fail.  If the simulated database operation fails, an error is thrown, but because it's not caught within a `try...catch` block, the error becomes an unhandled rejection.  This can be difficult to debug because it doesn't always produce clear error messages.

## The Solution

The `bugSolution.js` file demonstrates how to correctly handle these errors using a `try...catch` block within the asynchronous operation, ensuring that the server gracefully handles failures and responds appropriately to the client.

## How to reproduce the bug

1.  Clone this repository
2. Navigate to the `bug` directory
3.  Run `node bug.js`
4.  Refresh the page several times. You'll eventually get an error (or not, depending on the random number). Note the lack of a clear error message from Node.js, as the error is silently swallowed.

## How to test the solution

1.  Navigate to the `bugSolution` directory
2.  Run `node bugSolution.js`
3.  Refresh the page multiple times.  Observe that the application now gracefully handles both successful and failed database operations, returning appropriate responses in each case.
