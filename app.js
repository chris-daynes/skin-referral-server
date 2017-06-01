var express = require('express');
const mongoose = require('mongoose')
var logger = require('morgan');
var bodyParser = require('body-parser');
const routes = require('./routes/routes')

var app = express();

//here using node promises for mongoose.
mongoose.Promise = global.Promise

//connect to the skinreferral db if not in test.
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/skinreferral')
}

// app.use(logger('combined'));
app.use(bodyParser.json());

routes(app)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error 
  res.status(err.status || 500).json({
    message: err.message,
    error: err
  });
});

module.exports = app;
