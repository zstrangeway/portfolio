import { SkillSet } from "~/models";
import { v4 as uuidv4 } from "uuid";

const skillSets: SkillSet[] = [
  {
    id: uuidv4(),
    subject: "Web Development",
    skills: [
      "HTML5",
      "CSS3",
      "Javascript",
      "Typescript",
      "Node.js",
      "Vue.js",
      "Nuxt.js",
      "React.js",
      "Next.js",
    ],
    height: 1,
  },
  {
    id: uuidv4(),
    subject: "Mobile Development",
    skills: ["iOS", "Swift", "Android", "Kotlin", "MVVM", "Gradle"],
    height: 2,
  },
  {
    id: uuidv4(),
    subject: "AWS",
    skills: [
      "Lambda",
      "EC2",
      "CloudFormation",
      "RDS",
      "S3",
      "DynamoDB",
      "API Gateway",
      "CodePipeline",
    ],
    height: 3,
  },
  {
    id: uuidv4(),
    subject: "General",
    skills: ["Git", "SQL"],
    height: 4,
  },
  {
    id: uuidv4(),
    subject: "Hobbies",
    skills: ["Brewing", "Guitar", "Gaming", "Gardening"],
    height: 5,
  },
];

export default skillSets;
