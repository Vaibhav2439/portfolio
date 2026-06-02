// components/Certificates.jsx
import React from 'react';

const CertificateCard = ({ cert }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="font-bold text-gray-800 dark:text-white text-lg">{cert.name}</h3>
        <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
        <p className="text-sm text-gray-500 dark:text-gray-500">{cert.date}</p>
      </div>
      <a href={cert.credential} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">Verify →</a>
    </div>
  </div>
);

const Certifications = ({ certificates }) => {
  return (
    <section id="certificates" className="py-16 scroll-mt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10 text-center">
        Certifications & <span className="text-blue-600 dark:text-blue-400">Awards</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map(cert => (
          <CertificateCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;