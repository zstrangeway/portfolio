import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Education from "../components/Education";
import WorkHistory from "../components/WorkHistory/WorkHistory";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills/Skills";

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Skills />
      <Certifications />
      <WorkHistory />
      <Education />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
