import { SkillsCard } from "~/components";
import { skillSets } from "~/data";
import { SkillsStyles as styles } from "~/styles";

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
                key={skillSet.id}
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
