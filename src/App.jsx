// App.jsx - With About section added
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';  // ← Added import
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('darkMode');
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });
  const [activeSection, setActiveSection] = useState('home');

  // Toggle dark mode
  useLayoutEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    window.localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(hash);
        }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      window.location.hash = sectionId;
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume new.pdf'; // Change this to your actual resume file path
    link.download = `${portfolioData.name}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        onDownloadResume={handleDownloadResume}
      />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <Hero 
          portfolioData={portfolioData}
          scrollToSection={scrollToSection}
          onDownloadResume={handleDownloadResume}
        />
        
        <About portfolioData={portfolioData} />  {/* ← Added About section */}
        
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        {/* <Certificates certificates={portfolioData.certificates} /> */}
        <Contact contact={portfolioData.contact} />
      </main>
      
      <Footer name={portfolioData.name} />
    </div>
  );
};

export default App;