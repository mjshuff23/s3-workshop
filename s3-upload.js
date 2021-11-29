// Load the AWS SDK for Node
const AWS = require('aws-sdk');
// Set the region
AWS.config.update({ region: 'us-east-1' });

// Create S3 Service Object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Call S3 to retrieve upload file to specified bucket
const uploadParams = { Bucket: process.argv[2], Key: '', Body: '' };
const file = process.argv[3];

// Configure the file stream and obtain the upload parameters
const fs = require('fs');
const fileStream = fs.createReadStream(file);

// Create a listener for errors
fileStream.on('error', (err) => console.log('File Error:', err));

uploadParams.Body = fileStream;
const path = require('path');
uploadParams.Key = path.basename(file);

// Call S3 to retrieve upload file to specified bucket
s3.upload(uploadParams, (err, data) => {
  if (err) console.log('Error:', err);
  if (data) console.log('Upload Success: ', data.location);
});
