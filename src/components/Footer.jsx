// components/Footer.jsx
import React from 'react';

const Footer = ({ name }) => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6 text-center border-t border-gray-200 dark:border-gray-700">
      <p className="text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} {name}. Built with React & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;