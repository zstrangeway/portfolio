import { projects } from "../../data";
import ProjectItem from "./ProjectItem";
import styles from "../../styles/Projects.module.scss";

type ProjectsProps = {
  id: string;
};

const Projects = ({ id }: ProjectsProps): JSX.Element => {
  return (
    <section id={id} className={styles.projects}>
      <div className={styles.projects_container}>
        <h2 className={styles.projects_title}>Projects</h2>
        <div className={styles.projects_list}>
          {projects.map((project) => {
            return <ProjectItem key={project.title} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
