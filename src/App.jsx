import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import "./app.scss"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <Projects/>
        <Contact/>
        <Resume/>
      </div>
    </div>
  );
}

export default App;
