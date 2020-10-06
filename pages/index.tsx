import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Education from "../components/Education";
import WorkHistory from "../components/WorkHistory";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";

const Home = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Hero />
      <Skills />
      <Certifications />
      <WorkHistory />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
