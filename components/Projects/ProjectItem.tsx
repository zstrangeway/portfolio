import { Project } from "../../types";
import AppleAppStore from "../Icons/AppleAppStore";
import ExternalLink from "../Icons/ExternalLink";
import Github from "../Icons/Github";
import GooglePlay from "../Icons/GooglePlay";
import styles from "../../styles/Projects.module.scss";
import { useRef } from "react";
import useEnterTween from "../../hooks/useEnterTween";

type ProjectItemProps = {
  project: Project;
};

const ProjectItem = ({ project }: ProjectItemProps): JSX.Element => {
  const ref = useRef();
  useEnterTween(ref);

  return (
    <div ref={ref} className={styles.project_item}>
      <h4 className={styles.project_item_title}>{project.title}</h4>
      <p className={styles.project_item_description}>{project.description}</p>
      <div className={styles.project_item_spacer}></div>
      <ul className={styles.project_item_tech_list}>
        {project.technologies.map((technology) => {
          return (
            <li key={technology} className={styles.project_item_tech_list_item}>
              {technology}
            </li>
          );
        })}
      </ul>
      <div className={styles.project_item_link_wrapper}>
        {project.url ? (
          <div className={styles.project_item_link}>
            <a href={project.url} target="_blank" rel="noreferrer">
              <ExternalLink />
            </a>
          </div>
        ) : null}
        {project.githubUrl ? (
          <div className={styles.project_item_link}>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github />
            </a>
          </div>
        ) : null}
        {project.appleAppStoreUrl ? (
          <div className={styles.project_item_link}>
            <a href={project.appleAppStoreUrl} target="_blank" rel="noreferrer">
              <AppleAppStore />
            </a>
          </div>
        ) : null}
        {project.googlePlayUrl ? (
          <div className={styles.project_item_link}>
            <a href={project.googlePlayUrl} target="_blank" rel="noreferrer">
              <GooglePlay />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectItem;
