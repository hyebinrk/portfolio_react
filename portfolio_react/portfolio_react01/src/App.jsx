import React from 'react';
import './App.css'
import Navbar from './pages/Navbar';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App
