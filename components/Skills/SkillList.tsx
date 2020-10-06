import { SkillSet } from "../../types";
import SkillListItem from "./SkillListItem";
import styles from "../../styles/Skills.module.scss";

type SkillListProps = {
  skillSet: SkillSet;
};

const SkillList = ({ skillSet }: SkillListProps): JSX.Element => {
  return (
    <div className={styles.skill_list}>
      <h3 className={styles.section_subheader}>{skillSet.subject}</h3>
      <hr className={styles.section_subheader_underline} />
      <div className={styles.skill_list_container}>
        {skillSet.skills.map((skill) => {
          return <SkillListItem key={skill.name} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default SkillList;
