// Load the AWS SDK
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-1' });

// Create S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Create parameters for calling listObjects
const bucketParams = {
  Bucket: process.argv[2],
};

// Call S3 to obtain a list of the object in the bucket
s3.listObjects(bucketParams, (err, data) => {
  if (err) console.log('Error', err);
  else console.log('Success: ', data);
});
