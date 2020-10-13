import styles from "../styles/Skills.module.scss";
import { SkillSet } from "../types";

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
              <div key={skillSet.subject} className={styles.skills_skillset}>
                <h3 className={styles.skills_skillset_title}>
                  {skillSet.subject}
                </h3>
                <div className={styles.skills_skillset_skill_wrapper}>
                  {skillSet.skills.map((skill) => {
                    return (
                      <p key={skill} className={styles.skills_skillset_skill}>
                        {skill}
                      </p>
                    );
                  })}
                </div>
              </div>
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
  },
  {
    subject: "Mobile Development",
    skills: ["iOS", "Swift", "Android", "Kotlin", "MVVM", "Gradle"],
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
  },
  {
    subject: "General",
    skills: ["Git", "SQL"],
  },
  {
    subject: "Hobbies",
    skills: ["Brewing", "Guitar", "Gaming", "Gardening"],
  },
];
