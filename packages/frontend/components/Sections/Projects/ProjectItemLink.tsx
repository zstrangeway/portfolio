import { ProjectsStyles as styles } from "~/styles";

type ProjectItemLinkProps = {
  url: string;
  alt: string;
  icon: JSX.Element;
};

const ProjectItemLink = ({
  url,
  alt,
  icon,
}: ProjectItemLinkProps): JSX.Element => {
  return (
    <div className={styles.project_item_link}>
      <a href={url} aria-label={alt} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </div>
  );
};

export default ProjectItemLink;
