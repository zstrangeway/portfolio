import { Skill } from "../../types";
import styles from "../../styles/Skills.module.scss";

type SkillListItemProps = {
  skill: Skill;
};

const SkillListItem = ({ skill }: SkillListItemProps): JSX.Element => {
  return (
    <div className={styles.skill_set_item}>
      <h4 className={styles.skill_set_item_title}>{skill.name}</h4>
      <div className={styles.skill_set_item_bar}>
        <div
          className={styles.skill_set_item_bar_inner}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillListItem;
