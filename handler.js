'use strict';

module.exports.s3_notification = async (event, context) => {
  //extract S3 data from the event object
  console.log('All records', event.Records);
  console.log('S3 record', event.Records[0].s3);
  const uploadData = event.Records.map(record =>{
    return {
      bucketName: record.s3.bucket.name,
      file: record.s3.object.key,
      fileSize: record.s3.object.size
    }
  })[0];

  console.log('uploadData', uploadData);
  // generate an email using the data above

  // send the email

  // send a response

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
