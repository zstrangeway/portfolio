import SkillList from "./SkillList";
import { SkillSet } from "../../types";
import styles from "../../styles/Skills.module.scss";

const Skills = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section_header}>Skills</h2>
      {skillSets.map((skillSet) => {
        return <SkillList key={skillSet.subject} skillSet={skillSet} />;
      })}
    </section>
  );
};

export default Skills;

const skillSets: SkillSet[] = [
  {
    subject: "Web Development",
    skills: [
      {
        name: "HTML5",
        level: 95,
      },
      {
        name: "CSS3",
        level: 95,
      },
      {
        name: "Javascript/Typescript",
        level: 85,
      },
      {
        name: "Node",
        level: 70,
      },
      {
        name: "Vue.js/Nuxt.js",
        level: 90,
      },
      {
        name: "React.js/Next.js",
        level: 60,
      },
    ],
  },
  {
    subject: "Mobile Development",
    skills: [
      {
        name: "iOS/Swift",
        level: 70,
      },
      {
        name: "Android/Kotlin",
        level: 70,
      },
    ],
  },
  {
    subject: "AWS",
    skills: [
      {
        name: "Lambda",
        level: 70,
      },
      {
        name: "EC2",
        level: 80,
      },
      {
        name: "CloudFormation",
        level: 70,
      },
      {
        name: "RDS",
        level: 70,
      },
      {
        name: "S3",
        level: 80,
      },
      {
        name: "DynamoDB",
        level: 70,
      },
      {
        name: "API Gateway",
        level: 70,
      },
      {
        name: "CodePipeline",
        level: 70,
      },
    ],
  },
  {
    subject: "General",
    skills: [
      {
        name: "Git",
        level: 90,
      },
      {
        name: "SQL",
        level: 70,
      },
    ],
  },
];
