const express = require('express');
const app = express();
const port = 7865;
/***
 * By using express, create an instance of express called app
 * Listen to port 7865 and log API available on localhost
 * port 7865 to the browser console when the express server is started
 * For the route GET /, return the message Welcome to the payment system
 */

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
