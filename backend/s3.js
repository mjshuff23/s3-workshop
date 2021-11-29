import dotenv from 'dotenv';
import AWS from 'aws-sdk';
import crypto from 'crypto';
import { promisify } from 'util';
const randomBytes = promisify(crypto.randomBytes);

AWS.config.update({ region: 'us-east-1' });
dotenv.config();

const bucketName = 'my-bucket-7182798a-9761-4260-a3fe-7b440c02f55f';

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

export async function generateUploadURL() {
  const rawBytes = await randomBytes(16);
  const imageName = rawBytes.toString('hex');

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
}
