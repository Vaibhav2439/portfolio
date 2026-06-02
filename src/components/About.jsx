import React from 'react';

const About = ({ portfolioData }) => {
  const stats = [
    { value: "3+", label: "Projects Built" },
    { value: "2", label: "Internship" },
    { value: "5+", label: "Technologies" },
    { value: "100%", label: "Dedication" },
  ];

  return (
    <section id="about" className="py-12 md:py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Passionate Developer Building Modern Web Experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                👋 Who Am I?
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {portfolioData.intro}
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-xl">
                  <p className="text-blue-600 font-semibold">📍 Location</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Chh.Sambhajinagar, Maharashtra
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-xl">
                  <p className="text-blue-600 font-semibold">🎓 Education</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Diploma Computer Engineering Student
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">
                🚀 Current Focus
              </h3>

              <ul className="space-y-2">
                <li>• React Development</li>
                <li>• Frontend Projects</li>
                <li>• API Integration</li>
                <li>• Git & GitHub</li>
                <li>• Full Stack Learning</li>
              </ul>
            </div>

          </div>

          {/* Right Side */}
          <div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-5">

              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300"
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {item.value}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                💡 What Drives Me
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I enjoy creating responsive and user-friendly web applications.
                My goal is to continuously improve my development skills,
                build impactful projects, and contribute to meaningful digital
                experiences through clean and efficient code.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;