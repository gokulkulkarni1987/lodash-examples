'use strict';

const mongoose = require('mongoose');

const dbConfig = {};

dbConfig.user = process.env.DB_USER;
dbConfig.password = process.env.DB_PASS;
dbConfig.db = process.env.DB_NAME;
dbConfig.connectionURI = 
'mongodb://' + dbConfig.user + ':' + dbConfig.password + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + dbConfig.db;

// dbConfig.user = '';
// dbConfig.password = '';
// dbConfig.db = 'devngo';
// dbConfig.connectionURI = 'mongodb://' + dbConfig.user + ':' + dbConfig.password + '127.0.0.1:27017/' + dbConfig.db;


console.log('*** mongo db connection ', dbConfig.connectionURI);
mongoose.connect(dbConfig.connectionURI);

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, '# MongoDB - connection error: '));
dbConfig.dbConnection = connection;
module.exports = dbConfig;
