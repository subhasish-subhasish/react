'use client'
import { useState } from "react";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, XIcon, MenuIcon } from "@/components/Icons";
import { AuthPortal } from "@/components/Form";
import portfolioData from "@/data/data.json" assert { type: "json" };


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["Education", "Internships", "Projects", "Skills", "Contact"];

    return (
        <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-white tracking-wider">
                    <span className="text-indigo-400">S</span>ubhasish
                </a>
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-lg">{link}</a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-gray-900">
                    <nav className="px-6 pt-2 pb-4 flex flex-col space-y-3">
                        {navLinks.map(link => (
                           <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 block py-2">{link}</a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

const Hero = () => (
    <section id="hero" className="min-h-screen flex items-center bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                {"Hi, I'm "}<span className="text-indigo-400">{portfolioData.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">{portfolioData.title}</p>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">{portfolioData.about}</p>
            <div className="flex justify-center items-center space-x-6 mb-8">
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
                <a href={`mailto:${portfolioData.contact.email}`}><MailIcon /></a>
                <a href={`tel:${portfolioData.contact.phone}`}><PhoneIcon /></a>
            </div>
            <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                View My Work
            </a>
        </div>
    </section>
);

const Education = () => (
  <section id="education" className="py-20 bg-gray-800 text-white">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">{"My Education"}</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
        {/* We map over the education data to create a card for each entry */}
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-cyan-400">{edu.institution}</h3>
                <p className="text-md mt-1 text-gray-300">{edu.degree}</p>
              </div>
              <span className="bg-cyan-500 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full">{edu.year}</span>
            </div>
            <p className="text-md mt-4 text-gray-400">{edu.grade}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
const Internships = () => (
  <section id="internships" className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Internships</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
        {portfolioData.internships.map((internship, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-teal-400">{internship.company}</h3>
                <p className="text-md font-semibold text-gray-300">{internship.role}</p>
                <p className="text-sm text-gray-400">{internship.location}</p>
              </div>
              <span className="bg-teal-500 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full">{internship.date}</span>
            </div>
            <p className="text-md text-gray-300 leading-relaxed">{internship.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
const Projects = () => (
    <section id="projects" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                        <div className="p-6 flex-grow">
                            <h3 className="text-xl font-bold mb-2 text-indigo-400">{project.title}</h3>
                            <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4"> 
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-gray-700 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                        </div>
                         <div className="p-6 bg-gray-800 border-t border-gray-700 mt-auto flex justify-start space-x-4">
                            <a href={project.link} className="text-white hover:text-indigo-400 font-semibold transition-colors duration-300">Live Demo</a>
                            <a href={project.link} className="text-white hover:text-indigo-400 font-semibold transition-colors duration-300">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Skills = () => (
    <section id="skills" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(portfolioData.skills).map(([category, skillList]) => (
                    <div key={category} className="bg-gray-700 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-indigo-400 mb-3">{category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
                        <p className="text-gray-200">{skillList}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Get In Touch</h2>
            <div className="max-w-lg mx-auto text-center">
                <p className="text-lg text-gray-400 mb-8">
                    {"I'm currently open to new opportunities and collaborations. Feel free to send me a message!"}
                </p>
                <a href={`mailto:${portfolioData.contact.email}`} className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                    Say Hello
                </a>
            </div>
        </div>
    </section>
);


// --- Main App Component ---
// This is the main component that pulls everything together.
export default function App() {
  return (
    <div className="bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Education />
        <Internships />
        <Projects />
        <Skills />
        <Contact />
        <AuthPortal />
      </main>
    </div>
  );
}
