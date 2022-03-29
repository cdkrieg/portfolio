import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=".../AboutMe/AboutMe.js" element={<AboutMe />} />
        <Route path=".../Projects/Projects.js" element={<Projects />} />
        <Route path=".../Contact/Contact.js" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
