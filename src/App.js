import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import TooltipButton from "./components/TooltipButton";

// Used Mamba UI
import BlogCards from "./components/BlogCards";
import Weather from "./components/Weather";
import SignUp from './components/SignUp';
import Faq from './components/Faq';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <main className="text-gray-400 bg-gray-700 body-font">
      <Navbar />
      <Home />
      <Sidebar />        
      <About />
      <Projects />
      <TooltipButton 
        text="Tooltip Button"
        type="button"
        handleClick={() => console.log("Clicked!")} />
      <Skills />
      <Testimonials />
      <Contact />
      <Weather />
      <Faq />
      <Feature />
      <BlogCards />      
      <SignUp />
      <Footer />
    </main>
  );
}

export default App;
