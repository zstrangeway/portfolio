import styles from "../styles/Skills.module.scss";
import SkillsCard from "./SkillsCard";
import { skillSets } from "../data";

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
