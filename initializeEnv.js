'use strict';

console.log('--- initialising environment ---');
const fs = require('fs');

const dotEnvExists = fs.existsSync('.env');
if (dotEnvExists) {
  console.log('initialiseEnv.js: .env exists, probably running on development environment');
  process.exit();
}

// On Google Cloud Platform authentication is handled for us
const gcs = require('@google-cloud/storage')();

const bucketName = `envvars.${process.env.GCLOUD_PROJECT}.devngo.sevagarden.com`;
console.log(`Downloading .env from bucket "${bucketName}"`);
gcs
  .bucket(bucketName)
  .file('.env')
  .download({ destination: '.env' })
  .then(() => {
    console.info('initialiseEnv.js: .env downloaded successfully');
  })
  .catch(e => {
    console.error(`initialiseEnv.js: There was an error: ${JSON.stringify(e, undefined, 2)}`);
  });
