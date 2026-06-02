// components/Experience.jsx
import React from 'react';

const ExperienceCard = ({ exp }) => (
  <div className="relative pl-8 pb-8 border-l-2 border-blue-500 dark:border-blue-400 last:pb-0">
    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
    <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
      <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
    </div>
  </div>
);

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="py-16 scroll-mt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10 text-center">
        Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
      </h2>
      <div className="max-w-3xl mx-auto">
        {experience.map(exp => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;