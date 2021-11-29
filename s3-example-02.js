//////////////// Configuring the SDK //////////////////////
// Load the SDK
const AWS = require('aws-sdk');
// Set the region
AWS.config.update({ region: 'us-east-1' });

/////////// Displaying a list of S3 Buckets ///////////////
// Create S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Call S3 to list the buckets
s3.listBuckets((err, data) => {
  if (err) console.log(`Error: ${err}`);
  else console.log('Success', data.Buckets);
});
