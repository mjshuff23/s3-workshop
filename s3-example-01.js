// Load the SDK and UUID
const AWS = require('aws-sdk');
const uuid = require('uuid');

// Create a unique bucket name
const bucketName = `node-sdk-sample-${uuid.v4()}`;
// Create name for uploaded object key
const keyName = `helloWorld.txt`;

// Create a promise on an S3 service object
const bucketPromise = new AWS.S3({ apiVersion: '2006-03-01' })
  .createBucket({ Bucket: bucketName })
  .promise();

// Handle promise fulfilled/rejected states
bucketPromise
  .then((data) => {
    // Create params for putObject call
    const objectParams = {
      Bucket: bucketName,
      Key: keyName,
      Body: 'Hello, world!',
    };

    // Create object upload promise
    const uploadPromise = new AWS.S3({ apiVersion: '2006-03-01' })
      .putObject(objectParams)
      .promise();

    uploadPromise.then((data) =>
      console.log(`Successfully uploaded data to ${bucketName}/${keyName}`)
    );
  })
  .catch((err) => console.error(err, err.stack));
