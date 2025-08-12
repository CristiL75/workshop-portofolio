
import React from 'react';

export default function Header() {
  return (
    <header className="flex flex-col items-center py-8 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <img src="/public-placeholder.png.png" alt="Profile" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-300 dark:border-gray-700" />
      <h1 className="text-3xl font-bold mb-2">Cristian Latcu</h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-md text-center">I'm a 3rd-year Computer Science student at the Politehnica University of Timișoara, passionate about building modern web applications that solve real-world problems. I enjoy working across the full stack and have hands-on experience with technologies like React, Node.js, Django, FastAPI, and MongoDB.</p>
    </header>
  );
}
