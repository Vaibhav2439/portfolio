// components/Skills.jsx
import React, { useState, useEffect } from 'react';

const SkillBar = ({ skill, level }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setTimeout(() => setWidth(level), 100);
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-16 scroll-mt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10 text-center">
        My <span className="text-blue-600 dark:text-blue-400">Skills</span>
      </h2>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
        {skills.map(skill => (
          <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </section>
  );
};

export default Skills;