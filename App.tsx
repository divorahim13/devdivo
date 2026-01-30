import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen text-white relative font-sans selection:bg-primary/30 selection:text-white bg-dark">
      {/* Visual Effects */}
      <CustomCursor />
      <ScrollProgress />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
      </main>

      {/* Footer / Contact */}
      <Contact />
    </div>
  );
}

export default App;