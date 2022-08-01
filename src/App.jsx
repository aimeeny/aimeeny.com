import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import "./app.scss"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Router>
        <Routes>
        <Route path='/blog' element={<Blog/>} />
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
