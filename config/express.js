/**
 * Express configuration
 */

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');

exports = module.exports = function (app) {

  // Apache style logs
  app.use(morgan('dev'));

  // Parse body in requests
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(helmet());
}