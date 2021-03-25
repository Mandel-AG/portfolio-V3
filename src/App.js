import './App.css';
import { Header, LandingPresentation, AboutMe, Skills, Experiences, LandingPicture,Projects } from './components/index';

function App() {
  return (
    <div className="App"> 
      <Header />

      <LandingPresentation />

      <LandingPicture />

      <AboutMe />

      <Skills />

      <Experiences />

      <Projects />

    </div>
  );
}

export default App;
