const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

mongoose.connect('process.env.MONGODB_URI');

const config = require('./config/environment');

const app = express();
const server = http.createServer(app);
require('./config/express')(app);
require('./routes')(app);

server.listen(config.port, () => {
  console.log(`Server listening on port: ${config.port} in ${app.get('env')} mode`);
});