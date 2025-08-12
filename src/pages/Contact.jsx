
const linkedinUrl = 'https://www.linkedin.com/in/latcu-cristian-simion-578802172';
const githubUrl = 'https://github.com/CristiL75';
const profilePhoto = '/public-placeholder.png'; 

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-16 min-h-[80vh] flex flex-col items-center justify-start bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
      <div className="flex flex-col items-center gap-10 mb-16 w-full">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="px-10 py-5 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg text-2xl font-bold tracking-wide w-full max-w-xl text-center">Add me on LinkedIn</a>
      </div>
      <div className="w-full max-w-xl mx-auto">
        {submitted ? (
          <p className="text-green-600 font-semibold text-center text-xl">Thank you for reaching out!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl w-full transition-colors duration-300">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border-2 border-blue-300 dark:border-blue-700 p-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-xl font-medium transition w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="border-2 border-blue-300 dark:border-blue-700 p-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-xl font-medium transition w-full"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="border-2 border-blue-300 dark:border-blue-700 p-5 rounded-xl min-h-[150px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-xl font-medium transition w-full"
            />
            <button type="submit" className="bg-blue-600 dark:bg-blue-700 text-white py-5 px-10 rounded-2xl text-xl font-bold shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition w-full">Send</button>
          </form>
        )}
      </div>
    </section>
  );
}
import { useState } from 'react';
