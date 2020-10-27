import { Position } from "../../types";
import styles from "../../styles/WorkHistory.module.scss";

type WorkPositionProps = {
  positions: Position[];
};

const WorkPosition = ({ positions }: WorkPositionProps): JSX.Element => {
  return (
    <div className={styles.work_history_positions}>
      {positions.map((position) => {
        return (
          <div key={position.title} className={styles.work_position}>
            <div>
              <h3 className={styles.work_history_positions_title}>
                {position.title}
              </h3>
              <p>{position.location}</p>
              <p>
                {position.start} - {position.end}
              </p>
            </div>
            <div>
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
      })}
    </div>
  );
};

export default WorkPosition;
