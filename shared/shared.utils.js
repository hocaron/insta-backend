import AWS from "aws-sdk";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SCRET,
  },
});

export const uploadToS3 = async (file, userId, folderName) => {
  const { filename, createReadStream } = await file.file;
  const objName = `${folderName}/${userId}-${Date.now()}-${filename}`;
  const readStream = createReadStream();
  const { Location } = await new AWS.S3()
    .upload({
      Bucket: "instaclonee-upload",
      Key: objName,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();
  return Location;
};
