import './App.css';
import { Header, LandingPresentation, AboutMe, Skills, Experiences, LandingPicture } from './components/index';

function App() {
  return (
    <div className="App"> 
      <Header />

      <LandingPresentation />

      <LandingPicture />

      <AboutMe />

      <Skills />

      <Experiences />

    </div>
  );
}

export default App;
