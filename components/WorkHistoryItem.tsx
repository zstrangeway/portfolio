import { HistoryItem } from "../types";
import WorkPosition from "./WorkPosition";

type WorkHistoryProps = {
  historyItem: HistoryItem;
};

const WorkHistoryItem = ({ historyItem }: WorkHistoryProps): JSX.Element => {
  return (
    <div>
      <h3>{historyItem.employer}</h3>
      {historyItem.positions.map((position) => {
        return <WorkPosition key={position.title} position={position} />;
      })}
    </div>
  );
};

export default WorkHistoryItem;
