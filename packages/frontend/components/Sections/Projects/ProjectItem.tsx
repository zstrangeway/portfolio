import {
  AppleAppStoreIcon,
  ExternalLinkIcon,
  GithubIcon,
  GooglePlayIcon,
  ProjectItemLink,
} from "~/components";
import { Project } from "~/models";
import { ProjectsStyles as styles } from "~/styles";
import { useRef } from "react";
import { useTween } from "~/hooks";

type ProjectItemProps = {
  project: Project;
};

const ProjectItem = ({ project }: ProjectItemProps): JSX.Element => {
  const ref = useRef();
  useTween(ref, "fadeIn");

  return (
    <div ref={ref} className={styles.project_item}>
      <h3 className={styles.project_item_title}>{project.title}</h3>
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
          <ProjectItemLink
            url={project.url}
            alt={project.title}
            icon={<ExternalLinkIcon />}
          />
        ) : null}
        {project.githubUrl ? (
          <ProjectItemLink
            url={project.githubUrl}
            alt={`${project.title} Github Repo`}
            icon={<GithubIcon />}
          />
        ) : null}
        {project.appleAppStoreUrl ? (
          <ProjectItemLink
            url={project.appleAppStoreUrl}
            alt={`${project.title} Apple App Store`}
            icon={<AppleAppStoreIcon />}
          />
        ) : null}
        {project.googlePlayUrl ? (
          <ProjectItemLink
            url={project.googlePlayUrl}
            alt={`${project.title} Google Play Store`}
            icon={<GooglePlayIcon />}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProjectItem;
