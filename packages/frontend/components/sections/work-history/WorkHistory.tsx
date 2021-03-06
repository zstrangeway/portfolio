import {
  ArrowIcon,
  Button,
  ExternalLinkIcon,
  WorkHistoryPositions,
} from "~/components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useRef, useState } from "react";
import classNames from "classnames/bind";
import { WorkHistoryStyles as styles } from "~/styles";
import { useTween } from "~/hooks";
import { workHistory } from "~/data";

const cx = classNames.bind(styles);

type WorkHistoryProps = {
  id: string;
};

const WorkHistory = ({ id }: WorkHistoryProps): JSX.Element => {
  const [selectedItem, setItem] = useState(workHistory[0]);

  const ref = useRef();
  useTween(ref, "fadeIn");

  return (
    <section id={id} className={styles.work_history}>
      <div className={styles.work_history_container}>
        <h2 className={styles.work_history_title}>Work History</h2>
        <div ref={ref} className={styles.work_history_wrapper}>
          <ul className={styles.work_history_employer_list}>
            {workHistory.map((historyItem) => {
              return (
                <li
                  key={historyItem.id}
                  className={cx({
                    work_history_employer_list_item: true,
                    selected: historyItem == selectedItem,
                  })}
                  onClick={() => setItem(historyItem)}
                >
                  <ArrowIcon
                    className={styles.work_history_employer_list_item_arrow}
                  />
                  <div className={styles.work_history_employer_list_item_text}>
                    {historyItem.employer}
                  </div>
                </li>
              );
            })}
          </ul>
          <TransitionGroup className={styles.work_history_details}>
            <CSSTransition
              key={selectedItem.id}
              in={true}
              appear={true}
              unmountOnExit
              timeout={600}
              classNames="fade"
            >
              <WorkHistoryPositions positions={selectedItem.positions} />
            </CSSTransition>
          </TransitionGroup>
        </div>
        <a
          className={styles.work_history_resume_link}
          href="resume.pdf"
          target="_blank"
          rel="no-referrer"
        >
          <Button icon={<ExternalLinkIcon />} iconLocation={"right"}>
            Resume
          </Button>
        </a>
      </div>
    </section>
  );
};

export default WorkHistory;
