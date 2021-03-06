import { Certification } from "~/models";
import { v4 as uuidv4 } from "uuid";

const certifications: Certification[] = [
  {
    id: uuidv4(),
    name: "AWS Certified Cloud Practitioner",
    imageUrl: "images/aws-certified-cloud-practitioner",
    link:
      "https://www.youracclaim.com/badges/02a7a323-6e22-4d67-82a8-480420124bc2/public_url",
  },
  {
    id: uuidv4(),
    name: "AWS Certified Solutions Architect Associate",
    imageUrl: "images/aws-certified-solutions-architect-associate",
    link:
      "https://www.youracclaim.com/badges/42ac440f-f2fb-4a77-b7a9-9679709ee9b1/public_url",
  },
];

export default certifications;
