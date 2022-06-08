'use strict';

const mongoose = require('mongoose');

const fieldPermissionsSchema = mongoose.Schema({
    fieldName: { type: String, required: true },
    permissions: { type: String, required: true }
});

const FieldPermissions = mongoose.model('field_permissions', fieldPermissionsSchema);
module.exports = FieldPermissions;
