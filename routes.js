/**
 * Main application routes
 */

'use strict';

module.exports = exports = function(app) {
  app.use((req, res, next) => {
    if (!req.headers['api-key']) {
      const error = new Error('No API Key');
      error.status = 403;
      return next(error);
    }

    return next();
  });

  app.get('/test', (req, res) => res.send('ok!'));
  
  app.use('/api/contacts', require('./api/contacts'));

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // log errors
  app.use((err, req, res, next) => {
    console.log(err);
    next(err);
  })

  // error handler
  app.use(function(err, req, res, next) {
    // return error message
    res.status(err.status || 500);
    res.json({ status: 'error', message: err.message });
  });
}

  


