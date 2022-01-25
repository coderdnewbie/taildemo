import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

// Used Mamba UI for Blogcards, Hero etc etc
import Hero from "./components/Hero";
import BlogCards from "./components/BlogCards";
import Weather from "./components/Weather";

function App() {
  return (
    <main className="text-gray-400 bg-gray-700 body-font">
      <Navbar />       
      <About />
      <Hero />      
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Weather />
      <BlogCards />      
    </main>
  );
}

export default App;
