import Certifications from "../components/Certifications/Certifications";
import Contact from "../components/ContactForm";
import Education from "../components/Education";
import WorkHistory from "../components/WorkHistory/WorkHistory";
import Hero from "../components/Hero";
import Links from "../components/Links";
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Home = (): JSX.Element => {
  return (
    <>
      <Hero id="hero" />
      <Skills id="skills" />
      <Certifications id="certifications" />
      <WorkHistory id="workHistory" />
      <Education id="education" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
      <Nav />
      <Links />
    </>
  );
};

export default Home;
