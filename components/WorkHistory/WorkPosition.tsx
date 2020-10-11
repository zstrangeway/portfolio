import { Position } from "../../types";
import styles from "../../styles/WorkHistory.module.scss";

type WorkPositionProps = {
  position: Position;
};

const WorkPosition = ({ position }: WorkPositionProps): JSX.Element => {
  return (
    <div>
      <div>
        <h4>{position.title}</h4>
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
};

export default WorkPosition;
