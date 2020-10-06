import { Project } from "../types";
import ProjectItem from "../components/ProjectItem";

const Projects = (): JSX.Element => {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => {
        return <ProjectItem key={project.title} project={project} />;
      })}
    </div>
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
    ],
  },
  {
    title: "Portfolio",
    date: "In Progress",
    url: "https://zacstrangeway.com/",
    githubUrl: "https://github.com/zstrangeway/portfolio",
    details: [],
  },
  {
    title: "The Poison Spider",
    date: "Planned",
    url: "thepoisonspider.com",
    githubUrl: "https://github.com/zstrangeway/poison-spider",
    details: [],
  },
];
