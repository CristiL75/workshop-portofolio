

import React, { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './components/useTheme';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full transition-colors duration-300 bg-white dark:bg-gray-900 text-black dark:text-white">
        <nav className="flex flex-col md:flex-row items-center justify-between py-6 px-8 mb-12 shadow-2xl rounded-3xl mx-auto max-w-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <span className="font-extrabold text-2xl text-blue-700 dark:text-blue-300 mb-4 md:mb-0 tracking-wide">Portfolio</span>
          <div className="flex flex-row gap-4 md:gap-8 items-center">
            <a href="#home">
              <button className="font-bold text-lg px-6 py-2 rounded-xl shadow-md border-2 border-blue-300 dark:border-blue-700 bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200 tracking-wide">
                Home
              </button>
            </a>
            <a href="#projects">
              <button className="font-bold text-lg px-6 py-2 rounded-xl shadow-md border-2 border-blue-300 dark:border-blue-700 bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200 tracking-wide">
                Projects
              </button>
            </a>
            <a href="#contact">
              <button className="font-bold text-lg px-6 py-2 rounded-xl shadow-md border-2 border-blue-300 dark:border-blue-700 bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200 tracking-wide">
                Contact
              </button>
            </a>
          </div>
          <div className="mt-4 md:mt-0"><ThemeToggle /></div>
        </nav>
  <section id="home"><Home /></section>
  <section id="projects"><Projects /></section>
  <section id="contact"><Contact /></section>
      </div>
    </ThemeProvider>
  );
}

export default App;
