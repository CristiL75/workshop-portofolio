import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Vite.',
    link: '#',
  },
  {
    title: 'Weather App',
    description: 'A simple weather app using OpenWeatherMap API.',
    link: '#',
  },
  {
    title: 'GoodCode',
    description:
      'GoodCode is a dynamic full-stack application built with React (frontend), Node.js and Express (backend), and MongoDB (database). The platform empowers users to create accounts or log in via Google authentication seamlessly. It offers a curated list of coding challenges, enabling users to solve problems in popular programming languages such as C#, Java, Python, and JavaScript. The application leverages the Piston open-source runtime engine to execute and evaluate code submissions efficiently. To enhance user engagement, GoodCode includes a real-time leaderboard, ranking users based on the number of challenges solved. Additionally, interactive user profiles provide detailed insights, including the total problems solved, links to each solved problem (with problem IDs), and the programming languages used. GoodCode combines modern web technologies, gamified learning elements, and a robust backend to deliver an engaging and scalable platform for programming enthusiasts.',
    link: 'https://github.com/CristiL75/goodCodeProject',
  },
];


export default function Projects() {
  return (
    <section className="py-12 min-h-screen flex flex-col items-center bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="w-full max-w-4xl px-4 mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
