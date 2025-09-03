// src/components/Header.tsx
import React from 'react';
import portfolioData from "../data/data.json";

export default function Header (){
  return(
    <header 
        className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md transition-transform duration-300 ease-in-out  'translate-y-0' : '-translate-y-full'}`}
    >
        <div className="max-w-5xl mx-auto px-8 flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-teal-700">{portfolioData.name}</h1>
            <nav className="hidden md:flex space-x-8">
                <a href="#education" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Education</a>
                <a href="#experience" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Experience</a>
                <a href="#projects" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Projects</a>
                <a href="#skills" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Skills</a>
                <a href="#contact" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Contact</a>
            </nav>
        </div>
    </header>
);
}





