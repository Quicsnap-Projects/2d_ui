
import React, { useEffect, useState } from 'react';
import CompareImageSlider from "./CompareImageSlider"
import AWS from 'aws-sdk';


function Image2d() {

    const base_s3_url = "https://quicsnap-frontend-images.s3.us-east-2.amazonaws.com/devesh/project_1/";
    const bucketName = 'quicsnap-frontend-images';
    const folderPath = 'devesh/project_1/';

    const [allS3Images, setAllS3Images] = useState([]);
    // AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
  // alert(AWS.config.credentials)
    useEffect(() => {
      // Initialize AWS S3 service
      const s3 = new AWS.S3();
  
      // Function to list folders
      const listFolders = async () => {
        try {
          const params = {
            Bucket: bucketName,
            Prefix: folderPath, // folderPath acts as the prefix to search within the folder
            Delimiter: '/', // Delimiter tells S3 to return "folders"
          };
  
          const data = await s3.listObjectsV2(params).promise();
          
          // Extract folder names (each "CommonPrefix" is a folder)
          const folderNames = data.CommonPrefixes.map(prefix => prefix.Prefix.split('/').slice(-2, -1)[0]);
          setAllS3Images(folderNames);
        } catch (error) {
          console.error('Error fetching folder list:', error);
        }
      };
  
      listFolders();
    }, []);
  










    return (
        <div>
            {allS3Images.map((image_folder, index) => (
                <CompareImageSlider key={index} beforeImage={`${base_s3_url}${image_folder}/before.jpg`} afterImage={`${base_s3_url}${image_folder}/after.jpg`}/>
            ))}
            
        </div>
    );

}
export default Image2d;







