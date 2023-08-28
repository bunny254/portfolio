import { DarkModeProvider } from './siteComponents/darkMode';
import LandingPage from './siteComponents/landingPage';

function App() {
  return (
    <div>
      <DarkModeProvider>
      <LandingPage/>
      </DarkModeProvider>
    </div>
  );
}

export default App;
