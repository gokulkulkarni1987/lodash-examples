'use strict';

const LD = require('lodash');
const LDC = require('lodash/collection');

const approvedStatus = () => 'APPROVED'; //Define a function
   
const ngoApprovedStatus = LD.curry(approvedStatus);
module.exports.set = function (app) {
  app.get('/loadash', (req, res) => {
        //Collections
    const nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];
    const posNums = LDC.filter(nums, (val) => val > 0);
    console.log('filtered pos_nums ', posNums);

    const sazens = [
        { name: 'Ram', age: 36, active: true, karmaPoint: 10,
            events: [{ title: 'Event1', location: 'Bengaluru' }, 
            { title: 'Event2', location: 'Mangalore' }] },
        { name: 'Abdulha', age: 40, active: false, karmaPoint: 10,
            events: [{ title: 'Event1', location: 'Bengaluru' }, 
            { title: 'Event3', location: 'Mangalore' }] },
        { name: 'Thomas', age: 30, active: false, karmaPoint: 10,
            events: [{ title: 'Event5', location: 'Mysore' }, 
            { title: 'Event4', location: 'Mangalore' }] }
      ];
      
    const resultField = LD.result(LDC.find(sazens, { age: 36, active: true }), 'name');
    const resultObject = LDC.find(sazens, { age: 36, active: true });
    console.log('find resultObject ', resultObject);
    console.log('find result name field ', resultField);

    const whereResult = LD.filter(sazens, { events: [{ location: 'Bengaluru' }] });
    console.log('whereResult result ', whereResult);

    const status = ngoApprovedStatus();
    console.log('curried fun result ', status);

    sazens.map(sazen => sazen.karmaPoint * 3);
    console.log('map function result ', sazens);

    sazens.reduce((sazen, n) => sazen.karmaPoint + n);
    console.log('reduce function result ', sazens);

    res.json({ status: 'SUCCESS' });
  });
};
