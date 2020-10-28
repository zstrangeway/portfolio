import { SkillSet } from "../types";

const skillSets: SkillSet[] = [
  {
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
    subject: "Mobile Development",
    skills: ["iOS", "Swift", "Android", "Kotlin", "MVVM", "Gradle"],
    height: 2,
  },
  {
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
    subject: "General",
    skills: ["Git", "SQL"],
    height: 4,
  },
  {
    subject: "Hobbies",
    skills: ["Brewing", "Guitar", "Gaming", "Gardening"],
    height: 5,
  },
];

export default skillSets;
