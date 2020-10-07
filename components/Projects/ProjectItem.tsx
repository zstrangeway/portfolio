import { Project } from "../../types";
import styles from "../../styles/Projects.module.scss";

type ProjectItemProps = {
  project: Project;
};

const ProjectItem = ({ project }: ProjectItemProps): JSX.Element => {
  return (
    <div className={styles.project_item}>
      <div className={styles.project_item_info}>
        <h4 key={project.title}>{project.title}</h4>
        <p>{project.date}</p>
        <p>
          <a href={project.url} target="_blank" rel="noreferrer">
            Visit
          </a>
        </p>
        <p>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            Github
          </a>
        </p>
      </div>
      <div className={styles.project_item_details}>
        <ul>
          {project.details.map((detail) => {
            return <li key={detail}>{detail}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectItem;
