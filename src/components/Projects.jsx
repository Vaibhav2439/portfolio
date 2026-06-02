// components/Projects.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  // Fallback image in case the provided image fails to load
  const handleImageError = (e) => {
    e.target.src = `https://via.placeholder.com/400x300/3b82f6/white?text=${encodeURIComponent(project.name)}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="h-48 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          onError={handleImageError}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.split(', ').map((tech, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={project.link} 
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
        >
          View Project 
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-16 scroll-mt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
        Here are some of my recent work that I'm proud of
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;