

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import navbar from './Components/NavBar/NavBar';
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <Router>
      <navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Components/AboutMe' element={<AboutMe/>} />
        <Route path='/Components/Projects' element={<Projects/>} />
        <Route path='/Components/Contact' element={<Contact/>} />
      </Routes>


    </Router>
  );
}

export default App;
