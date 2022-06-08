'use strict';

const daos = require('../daos/daos');

module.exports.set = function (app) {
  app.get('/users', (req, res) => {
    daos.getUsersDao((response) => {
      res.json(response);
    });
  });
  app.get('/registrations', (req, res) => {
    daos.getEventRegistrationsDao((response) => {
      res.json(response);
    });
  });

  app.get('/registrations/perms', (req, res) => {
    daos.getEventRegistrationsWithPermDao((response) => {
      res.json(response);
    });
  });

  app.get('/privatedata', (req, res) => {
    daos.getGetUserPrivateDataDao((response) => {
      res.json(response);
    });
  });

  app.get('/registrations/millionentries', (req, res) => {
    daos.postMillionEntries((response) => {
      res.json(response);
    });
  });
};
