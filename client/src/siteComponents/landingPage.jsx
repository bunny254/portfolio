import Nav from "./nav";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import { useDarkMode } from "./darkMode";

const LandingPage = () => {
  const { isDarkMode} = useDarkMode();
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="dark:bg-gray-900" >
      <Nav/>
      <About/>
      <Home/>
      <Skills/>
      </div>
    </div>
  );
};

export default LandingPage;
