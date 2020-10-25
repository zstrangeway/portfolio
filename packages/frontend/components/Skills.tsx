import styles from "../styles/Skills.module.scss";
import { SkillSet } from "../types";
import SkillsCard from "./SkillsCard";

type SkillsProps = {
  id: string;
};

const Skills = ({ id }: SkillsProps): JSX.Element => {
  return (
    <section id={id} className={styles.skills}>
      <div className={styles.skills_container}>
        <h2 className={styles.skills_title}>Skills</h2>
        <div className={styles.skills_skillset_wrapper}>
          {skillSets.map((skillSet) => {
            return (
              <SkillsCard
                key={skillSet.subject}
                skillSet={skillSet}
                height={skillSet.height}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

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
