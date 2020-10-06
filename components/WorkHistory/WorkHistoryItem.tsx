import { HistoryItem } from "../../types";
import WorkPosition from "./WorkPosition";
import styles from "../../styles/WorkHistory.module.scss";

type WorkHistoryProps = {
  historyItem: HistoryItem;
};

const WorkHistoryItem = ({ historyItem }: WorkHistoryProps): JSX.Element => {
  return (
    <div>
      <h3 className={styles.section_subheader}>{historyItem.employer}</h3>
      <hr className={styles.section_subheader_underline} />
      {historyItem.positions.map((position) => {
        return <WorkPosition key={position.title} position={position} />;
      })}
    </div>
  );
};

export default WorkHistoryItem;
