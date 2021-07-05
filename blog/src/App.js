import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contactme from './components/ContactMe/Contactme';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import { BrowserRouter as Router, } from 'react-router-dom';

function App(){
  return(
    <Router>
      <NavBar />

      <div className="sections">
      <Home  />
      <About />
      <Projects />
      <Contactme />
      </div>
      <Footer />
    </Router>
    
  )
}
export default App;
