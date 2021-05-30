import React from "react";

const AWS_RESOURCES_ICONS = [
  "images/awsResources/AR-VR_64.png",
  "images/awsResources/IoT_64.png",
  "images/awsResources/Analytics_64.png",
  "images/awsResources/Machine-Learning_64.png",
  "images/awsResources/Application-Integration_64.png",
  "images/awsResources/Management-Governance_64.png",
  "images/awsResources/Blockchain_64.png",
  "images/awsResources/Media-Services_64.png",
  "images/awsResources/Business-Application_64.png",
  "images/awsResources/Migration-Transfer_64.png",
  "images/awsResources/Compute_64.png",
  "images/awsResources/Mobile_64.png",
  "images/awsResources/Containers_64.png",
  "images/awsResources/Networking-Content-Delivery_64.png",
  "images/awsResources/Cost-Management_64.png",
  "images/awsResources/Quantum-Technologies_64.png",
  "images/awsResources/Customer-Enablement_64.png",
  "images/awsResources/Robotics_64.png",
  "images/awsResources/Customer-Engagement_64.png",
  "images/awsResources/Satellite_64.png",
  "images/awsResources/Database_64.png",
  "images/awsResources/Security-Identity-Compliance_64.png",
  "images/awsResources/Dev-Tools_64.png",
  "images/awsResources/Serverless_64.png",
  "images/awsResources/End-User-Computing_64.png",
  "images/awsResources/Storage_64.png",
  "images/awsResources/Game-Tech_64.png",
];

const AwsIcons: React.FC = () => {
  const _shuffle = (arr: string[]) => {
    let j, x, i;
    for (i = arr.length; i; i -= 1) {
      j = Math.floor(Math.random() * i);
      x = arr[i - 1];
      arr[i - 1] = arr[j];
      arr[j] = x;
    }
  };

  _shuffle(AWS_RESOURCES_ICONS);

  const icons = AWS_RESOURCES_ICONS.map((imageUrl) => (
    <div className="m-4" key={imageUrl}>
      <img src={imageUrl} className="w-16 h-16" />
    </div>
  ));

  return (
    <div className="w-9/12 flex flex-row flex-wrap mx-auto my-5 pt-20">
      {icons}
    </div>
  );
};

export default AwsIcons;
