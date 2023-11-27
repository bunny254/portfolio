//import MobileNav from "./mobNav";
import Nav from "./nav";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import { useDarkMode } from "./darkMode";
import Projects from "./projects";
import Events from "./events";
import Testimonials from "./testimonials";
import Confetti from "react-confetti";

const LandingPage = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="dark:bg-gray-900">
          <Nav />
          <Confetti width={1400} height={1000}/>
          <About />
          <Home />
          <Skills />
          <Projects />
          <Events />
          <Testimonials />
      </div>
    </div>
  );
};

export default LandingPage;
