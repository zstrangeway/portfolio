import {
  Certifications,
  ContactForm,
  Education,
  Footer,
  Hero,
  Links,
  Nav,
  Projects,
  Skills,
  WorkHistory,
} from "~/components";

const Home = (): JSX.Element => {
  return (
    <>
      <Hero id="hero" />
      <Skills id="skills" />
      <Certifications id="certifications" />
      <WorkHistory id="workHistory" />
      <Education id="education" />
      <Projects id="projects" />
      <ContactForm id="contact" />
      <Footer />
      <Nav />
      <Links />
    </>
  );
};

export default Home;
