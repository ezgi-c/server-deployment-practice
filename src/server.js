const express = require('express');

const server = express();

// This server is correct when:

// You ask for '/hello', yoiu receive 'hello!'

server.get('/hello', (_, res) => res.send('hello!'));

module.exports = server;