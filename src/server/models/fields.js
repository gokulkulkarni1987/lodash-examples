'use strict';

const mongoose = require('mongoose');

const fieldsSchema = mongoose.Schema({
    fieldId: { type: Number, required: true },
    fieldName: { type: String, required: true }
});

const Fields = mongoose.model('fields', fieldsSchema);
module.exports = Fields;
