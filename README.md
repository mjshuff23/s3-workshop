# S3 Workshop

- S3 stores data as **objects** in **buckets**
- **Object** - A file along with optional metadata to describe the file
- **Key** - A unique identifier for an object within a bucket

## Getting Started

- If you haven't already, you should create an IAM admin user and group.  You should not use the root account unless you absolutely need to
   - [Creating Your First IAM Admin User and User Group](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html)
- After creating an IAM admin user and group, you should get your security credentials, which will be needed in order to use the AWS SDK in Node.
   - [Getting Uour Security Credentials](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html)
- After getting and downloading your security credentials, you will need to create a file called `credentials` and put it in the directory `~/.aws/`.  The AWS SDK will scan this folder to find your credentials.
   - [Loading Credentials in Node.js from the Shared Credentials File](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html)
- At this point, whenever you use the AWS SDK, it will attempt to scan that folder and pull your credentials