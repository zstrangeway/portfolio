import { SkillSet } from "~/models";
import { SkillsStyles as styles } from "~/styles";
import { useRef } from "react";
import { useTween } from "~/hooks";

type SkillsCardProps = {
  skillSet: SkillSet;
  height: number;
};

const SkillsCard = ({ skillSet, height }: SkillsCardProps): JSX.Element => {
  const ref = useRef();
  useTween(ref, "parallax", height);

  return (
    <div
      ref={ref}
      className={styles.skills_skillset}
      style={{ zIndex: height }}
    >
      <h3 className={styles.skills_skillset_title}>{skillSet.subject}</h3>
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
};

export default SkillsCard;
