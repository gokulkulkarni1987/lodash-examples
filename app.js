'use strict';

require('babel-core/register')({
  presets: ['es2015', 'react', 'stage-1']
});

const express = require('express');
const path = require('path');
const logger = require('morgan');
//PROXY
const httpProxy = require('http-proxy');
// REQUEST HANDLER FOR SERVER-SIDE RENDERING
const requestHandler = require('./requestHandler');

const app = express();

app.use(logger('dev'));

//PROXY TO API
const apiProxy = httpProxy.createProxyServer({
  target: 'http://localhost:4001'
});
app.use('/api', (req, res) => {
  apiProxy.web(req, res);
});

// END PROXY ///

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use(requestHandler);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
