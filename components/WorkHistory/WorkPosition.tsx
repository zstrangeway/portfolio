import { Position } from "../../types";
import styles from "../../styles/WorkHistory.module.scss";

type WorkPositionProps = {
  position: Position;
};

const WorkPosition = ({ position }: WorkPositionProps): JSX.Element => {
  return (
    <div className={styles.work_position}>
      <div className={styles.work_position_details}>
        <h4>{position.title}</h4>
        <p>{position.location}</p>
        <p>
          {position.start} - {position.end}
        </p>
      </div>
      <div className={styles.work_position_duties}>
        <ul>
          {position.duties.map((duty) => {
            return <li key={duty}>{duty}</li>;
          })}
        </ul>
        {position.clients?.length > 0 && (
          <>
            <p>clients included</p>
            <ul>
              {position.clients.map((client) => {
                return <li key={client}>{client}</li>;
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkPosition;
