// components/Hero.jsx
import React from 'react';

const Hero = ({ portfolioData, scrollToSection, onDownloadResume }) => {
  // 👇 REPLACE THIS URL WITH YOUR ACTUAL IMAGE URL
  const myPhotoUrl = "/images/my-photo.jpg"; // Change this to your image

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center py-16 scroll-mt-16">
      <div className="text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:w-2/3">
          {/* Animated Badge */}
          <div className="inline-block mb-4">
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full">
              👋 Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {portfolioData.name}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            {portfolioData.title}
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl">
            {portfolioData.intro}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Get In Touch
            </button>
            <button 
              onClick={onDownloadResume}
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
            >
              Download Resume
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mt-10">
            {/* <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">5+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Years Exp</p>
            </div> */}
            {/* <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">30+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
            </div> */}
            {/* <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">20+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Clients</p>
            </div> */}
          </div>
        </div>
        
        <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center">
          <div className="relative">
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500  opacity-20"></div>
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden">
                {/* 👇 YOUR IMAGE GOES HERE */}
                <img 
                  src={myPhotoUrl}
                  alt={portfolioData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;