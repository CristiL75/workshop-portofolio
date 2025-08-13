import React from 'react';

export default function CvButton({ label = 'Descarcă CV', href = '/Latcu-CristianSimionCV.pdf.pdf', ...props }) {
  return (
    <a
      href={href}
      download
      className="font-bold text-lg px-6 py-2 rounded-xl shadow-md border-2 border-blue-300 dark:border-blue-700 bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200 tracking-wide"
      {...props}
    >
      {label}
    </a>
  );
}
