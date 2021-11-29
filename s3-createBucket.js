// Load the AWS SDK
const AWS = require('aws-sdk');
// Bring in UUID
const uuid = require('uuid');
// Set the region
AWS.config.update({ region: 'us-east-1' });

// Create S3 Service Object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Create the parameters for calling createBucket
const bucketParams = {
  Bucket: `${process.argv[2]}-${uuid.v4()}`,
};

console.log(bucketParams.Bucket);
// Call S3 to create the bucket
s3.createBucket(bucketParams, (err, data) => {
  if (err) console.error('Error', err);
  else console.log('Success', data);
});
