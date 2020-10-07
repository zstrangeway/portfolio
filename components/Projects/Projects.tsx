import { Project } from "../../types";
import ProjectItem from "./ProjectItem";
import styles from "../../styles/Projects.module.scss";

const Projects = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section_header}>Projects</h2>
      {projects.map((project) => {
        return <ProjectItem key={project.title} project={project} />;
      })}
    </section>
  );
};

export default Projects;

const projects: Project[] = [
  {
    title: "Red Comet Creations",
    date: "In Progress",
    url: "https://redcometcrafts.com/",
    githubUrl: "https://github.com/zstrangeway/red-comet",
    details: [
      "A static site with Vue.js/Nuxt.js with a backend created in AWS with S3, Lambda, API Gateway, DynamoDB, and CloudFormation",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Portfolio",
    date: "In Progress",
    url: "https://zacstrangeway.com/",
    githubUrl: "https://github.com/zstrangeway/portfolio",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "The Poison Spider",
    date: "Planned",
    url: "https://thepoisonspider.com",
    githubUrl: "https://github.com/zstrangeway/poison-spider",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];
