'use strict';

const mongoose = require('mongoose');
const mongooseHidden = require('mongoose-hidden')({ hidden: { password: true } });
const LD = require('lodash');

// const FieldPermissions = require('./fieldPermissions');
const fieldPermissions = require('../../../fieldPermissions.json');

const usersSchema = mongoose.Schema({
    name: String,
    photoURL: String,
    email: String,
    phone: String
});


// // // First define transform function
// usersSchema.set('toJSON', { transform: (doc, ret, opt) => {
//     LD.forOwn(ret, (value, key) => {
//         const permKey = `${key}_perm`;

//         const permValue = fieldPermissions[ret.displayName.value][permKey];
//         console.log('permKey ', permKey, '*** permValue ', permValue);
//         switch (permValue) {
//             case 'clear': 
//             break;
//             case 'mask': 
//                 ret[key].value = '####';
//             break;
//             default: 
//                 ret[key].value = '-';
//             break;
//         }
//         console.log('iterating field ', key, ' value ', ret[key].value);
//     });
//     console.log('---- phone ', ret['phone'].value);
//     return ret;
//   } });
   
  // Then apply plugin
usersSchema.plugin(mongooseHidden);
  
const Users = mongoose.model('users', usersSchema);
module.exports = Users;
