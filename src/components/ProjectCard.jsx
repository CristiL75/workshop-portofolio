
import React from 'react';

export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-4 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-800 transition"
        >
          View Project
        </a>
      )}
    </div>
  );
}
