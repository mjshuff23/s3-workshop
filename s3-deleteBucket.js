// Load AWS SDK
const AWS = require('aws-sdk');
// Set region
AWS.config.update({ region: 'us-east-1' });

// Create S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Create parameters for S3.deleteBucket
const bucketParams = {
  Bucket: process.argv[2],
};

// Call S3 to delete the bucket
s3.deleteBucket(bucketParams, (err, data) => {
  if (err) console.log('Error', err);
  else console.log('Successfully deleted');
});
