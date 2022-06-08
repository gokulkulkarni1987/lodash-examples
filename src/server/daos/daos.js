'use strict';

const users = require('../models/users');
const eventRegistrations = require('../models/eventRegistrations');
const ObjectId = require('mongoose').Types.ObjectId;

const getUsersDao = function (callBack) {
    users.find({}, (findNgoErr, findUsersResult) => {
    if (findUsersResult == null || findUsersResult === undefined) {
      const apiResponse = {
        status: 'FAIL'
      };
      callBack(apiResponse);
    } else {
      const apiResponse = {
        status: 'SUCCESS',
        users: findUsersResult
      };
      callBack(apiResponse);
    }
  });
};
// Bulk entry 
//https://stackoverflow.com/questions/16726330/mongoose-mongodb-batch-insert
const perms = ['mask', 'clear'];
const count = 400000;
const start = 300000;
const postMillionEntries = function (callBack) {
  const userObjecs = [];
  for (let index = start; index < count; index++) {
    const userJson = {
      name: `name_${index}`,
      email: `name_${index}@gmail.com`,
      phone: Math.floor(100000000 + (Math.random() * 900000000)),
      photoURL: 'https://cdn.pixabay.com/photo/2017/01/06/20/43/soap-bubble-1958841_1280.jpg'
    };
    const obj = new users(userJson);
    userObjecs.push(obj);
  }
  console.log('--- allocated 1 ---- ', userObjecs.length);
  users.collection.insertMany(userObjecs) 
  .then((results) => {
    // console.log('--- inserted total users = ----', results);
    const insertedIds = results.insertedIds;
    console.log('--- inserted users  = ----', insertedIds.length);

    if (insertedIds !== null && insertedIds.length > 0) {
      const regs = [];
      for (let index = start; index < count; index++) {
        const regDetails = {
          event: ObjectId('5b31ea0ffb6fc048e1073228'),
          sazenDetails: {
              sazen: ObjectId(insertedIds[index]),
              name_perm: perms[1],
              email_perm: perms[((index % 3) > 1 ? 1 : (index % 3))],
              phone_perm: perms[((index % 2) > 1 ? 1 : (index % 2))],
              photoURL_perm: perms[1]
          }
        };
        const obj1 = new eventRegistrations(regDetails);
        regs.push(obj1);
      }
      console.log('--- allocated 2 ---- ', regs.length);
      eventRegistrations.collection.insertMany(regs)
      .then((regResults) => {
        console.log('--- inserted regs  = ----', regResults.insertedIds.length);
        callBack({ status: 'SUCCESS', totalRecords: regResults.insertedIds.length });
      })
      .catch((err1) => {
        console.log('--- something went wrong err1 ', err1);
        callBack({ status: 'FAIL', error: err1 });
      });
    }
  }).catch((err) => {
    console.log('--- something went wrong ', err);
    callBack({ status: 'FAIL', error: err });
  });
};

const pageNumber = 0;
const pageSize = 100000;
const getEventRegistrationsWithPermDao = function (callBack) {
  const userAccess = ['H'];
  const startTime = Date.now();
  console.log('started..');
  eventRegistrations
  .find({})
  .skip(pageNumber * pageSize)
  .limit(pageSize)
  .populate({
    path: 'sazenDetails.sazen',
    model: users
  })
  .exec(
    (findErr, findResult) => {
      console.log('time taken ', (Math.floor((Date.now() - startTime) / 1000)));
      callBack(findResult);
  });
};

const getEventRegistrationsDao = function (callBack) {
    const userAccess = ['H'];
    eventRegistrations.aggregate([
        { $match: { event: ObjectId('5b31ea0ffb6fc048e1073228') } },
        { $redact: {
            $cond: {
                if: { 
                    $eq: ['$permissions', userAccess]
                },
                then: '$$PRUNE',
               else: '$$DESCEND'
             }
           }
         }
    ], (err, registrations) => {
        if (err) throw err;
        console.log(registrations);
        callBack(registrations);
    });
};

const getGetUserPrivateDataDao = function (callBack) {
  users.find({}, (findNgoErr, findUsersResult) => {
    if (findUsersResult == null || findUsersResult === undefined) {
      const apiResponse = {
        status: 'FAIL'
      };
      callBack(apiResponse);
    } else {
      const apiResponse = {
        status: 'SUCCESS',
        users: findUsersResult
      };
      callBack(apiResponse);
    }
  });
};

module.exports = {
    getUsersDao,
    getEventRegistrationsDao,
    getGetUserPrivateDataDao,
    getEventRegistrationsWithPermDao,
    postMillionEntries
};
