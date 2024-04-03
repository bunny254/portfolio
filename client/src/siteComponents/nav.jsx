import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useDarkMode } from "./darkMode";
import resume from "../assets/Simon_Resume_2024.pdf";

const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className={isDarkMode ? "dark" : ""}>
      <nav>
        <nav className="py-10 flex justify-between">
          <h1 className="text-xl ml-4 font-semibold italic dark:text-white">
            © BUILTBYSIMON
          </h1>
          <ul className="flex items-center">
            <li>
              {isDarkMode ? (
                <MdLightMode
                  onClick={toggleDarkMode}
                  size="28px"
                  className="cursor-pointer dark:text-white"
                />
              ) : (
                <MdDarkMode
                  onClick={toggleDarkMode}
                  size="28px"
                  className="cursor-pointer"
                />
              )}
            </li>
            <li>
              <a
                className="mr-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href={resume}
                download="Simon_Resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </nav>
    </nav>
  );
};

export default NavBar;
