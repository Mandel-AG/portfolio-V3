import './App.css';
import { Header, LandingPresentation, AboutMe, Skills, Experiences, LandingPicture, Projects, Contact } from './components/index';

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

      <div className="containerAppContact">
        <Contact />
      </div>

    </div>
  );
}

export default App;
