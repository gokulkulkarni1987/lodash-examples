'use strict';

const controllers = require('./controllers');
const loadashController = require('./loadashcontroller');

module.exports.set = function (app) {
  controllers.set(app);
  loadashController.set(app);
};
