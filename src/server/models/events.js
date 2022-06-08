'use strict';

const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
    title: String,
});

const Events = mongoose.model('events', eventsSchema);
module.exports = Events;
