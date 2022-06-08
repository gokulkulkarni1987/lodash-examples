'use strict';

import firebase from 'firebase';

const firebaseConf = {
  apiKey: process.env.FIRE_BASE_API_KEY,
  authDomain: process.env.FIRE_BASE_AUTH_DOMAIN,
  databaseURL: process.env.FIRE_BASE_DB_URL,
  projectId: process.env.FIRE_BASE_PROJECT_ID,
  storageBucket: process.env.FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIRE_BASE_MSG_ID
};

firebase.initializeApp(firebaseConf);

const firebaseConstants = {
  // Auth actions.
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGOUT: 'LOGOUT',
  LOGGED_IN: 'LOGGED_IN',
  LISTENING_TO_AUTH: 'LISTENING_TO_AUTH',

  USER_EXIST_ERROR_CODE: 'auth/email-already-in-use',
  // MISC.
  FIREBASE: firebase,

};

export default firebaseConstants;
