'use strict';

const mongoose = require('mongoose');
const mongooseHidden = require('mongoose-hidden');
const LD = require('lodash');

const eventRegistrationsSchema = mongoose.Schema({
    event: { ref: 'events', type: mongoose.Schema.ObjectId },
    sazenDetails: {
        sazen: { ref: 'users', type: mongoose.Schema.ObjectId },
        name_perm: String,
        phone_perm: String,
        email_perm: String,
        phone_photoURL_permperm: String,
    }
});

// // First define transform function
eventRegistrationsSchema.set('toJSON', { transform: (doc, ret, opt) => {
    
    LD.forOwn(ret['sazenDetails']['sazen'], (value, key) => {
        const permKey = `${key}_perm`;
        const permValue = ret['sazenDetails'][permKey];
        // console.log('--- key ', key, ' permValue ', permValue);
        console.log('...');
        // console.log('befr ', ret);
        if (permValue !== undefined) {
            switch (permValue) {
                case 'clear': 
                break;
                case 'mask': 
                    ret['sazenDetails']['sazen'][key] = '####';
                break;
                default: 
                ret['sazenDetails']['sazen'][key] = '-';
                break;
            }
        }
        // ret['sazenDetails']['sazen'].remove(permKey);
    });
    //console.log('.... ');
    return ret;
  } });
  // Then apply plugin
eventRegistrationsSchema.plugin(mongooseHidden);

const EventRegistrations = mongoose.model('event_registrations', eventRegistrationsSchema);

module.exports = EventRegistrations;
