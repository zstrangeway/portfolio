import { Project } from "../types";

type ProjectItemProps = {
  project: Project;
};

const ProjectItem = ({ project }: ProjectItemProps): JSX.Element => {
  return (
    <>
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
      <ul>
        {project.details.map((detail) => {
          return <li key={detail}>{detail}</li>;
        })}
      </ul>
    </>
  );
};

export default ProjectItem;
