import React from 'react';

// --- SVG Icon Components ---
// Using inline SVGs to keep everything in one file and avoid dependencies.
const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const BriefcaseIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

const GraduationCapIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
);

const CodeIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const WrenchIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
);

const AwardIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
);

// --- Data based on the CV ---
const cvData = {
  name: "Subhasish Das",
  title: "M.Sc Tech Engineering Physics",
  contact: {
    email: "subhasishphysics@email.com",
    studentEmail: "sd23phclr49@student.nitw.ac.in",
    phone: "+91-7029847241",
    github: "https://github.com/subhasish-subhasish", // Placeholder
    linkedin: "https://www.linkedin.com/in/subhasishsubhasish/", // Placeholder
  },
  education: [
    {
      institution: "National Institute Of Technology, Warangal",
      degree: "M.Sc Tech Electronics",
      year: "2026",
      grade: "CGPA: 8.2",
    },
    {
      institution: "Prabhat Kumar College, Contai",
      degree: "B.Sc Physics, Vidyasagar University",
      year: "2022",
      grade: "CGPA: 8.79",
    },
    {
      institution: "Pichhabani Bani Niketan High School",
      degree: "West Bengal Council of Higher Secondary Education",
      year: "2019",
      grade: "Percentage: 86.8",
    },
  ],
  internships: [
    {
      company: "Indian Institute of Science (IISc)",
      role: "Research Intern",
      date: "May 2024 - July 2024",
      location: "Bengaluru, India",
      description: "Worked on Markov Chain Monte Carlo (MCMC) simulations to model and validate molecular dynamics, enhancing computational efficiency and physical accuracy in complex molecular systems.",
    },
    {
      company: "Space Applications Centre (ISRO)",
      role: "Summer Intern",
      date: "May 2025 - July 2025",
      location: "Ahmedabad, India",
      description: "Integrated custom IP and built a complete SoC on Zynq-7000 FPGA using Xilinx Vivado and Vitis, for high-performance embedded processing. Learned about on-chip communication, IP integration, and designing a complete SOC using a softcore processor.",
    },
  ],
  projects: [
    {
      title: "STM32 Peripheral Driver Development",
      date: "July 2025",
      description: "Developed custom GPIO, SPI, USART, and I2C drivers for the STM32F4 microcontroller family. Configured GPIOs and wrote APIs for serial communication protocols.",
      link: "#" // Placeholder link
    },
    {
      title: "IoT-Based Temperature & Humidity Monitoring System",
      date: "Feb 2025",
      description: "Built a real-time sensor data logging system using ESP32, DHT11, and Firebase Realtime Database. Interfaced DHT11 with ESP32 to collect and transmit sensor data to the cloud.",
      link: "#"
    },
    {
      title: "12-Hour Digital Clock on FPGA (Artix-7)",
      date: "Mar 2025",
      description: "Designed and implemented a modular digital clock using SystemVerilog on an Artix-7 FPGA. Developed timekeeping logic, simulated the design in Vivado, and validated on-board.",
      link: "#"
    },
  ],
  skills: {
    languages: "C, C++ (OOPS), Python, Verilog, System Verilog",
    developerTools: "Vivado, Vitis, ModelSim, STM32 Cube IDE, NI Multisim, Platform Io, Arduino IDE, MATLAB",
    hardware: "STM32 Micro-controller, FPGA, 8051 Micro-controller, Arduino, ESP32",
    protocols: "I2C, SPI, UART, CAN, AMBA, TCP/IP",
    os: "Windows, Linux, Git and GitHub",
    softSkills: "Critical thinking, Problem Solving, Teamwork",
  },
  interests: "Embedded System Design, ASIC and FPGA, Hardware and Software co-design based on FPGA, Internet of Things",
  certifications: [
    "Mastering Microcontroller and Embedded Driver Development (Udemy, 2025)",
    "Embedded System Design With ARM (NPTEL, 2024)",
    "Verification using System-verilog (Udemy, 2025)",
  ],
  achievements: [
    "Qualified GATE ECE 2025 (Gate Score 436)",
  ],
};

// --- Reusable Section Component ---
const Section = ({ icon, title, children }) => (
    <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            {icon}
            <span className="ml-3">{title}</span>
        </h2>
        {children}
    </section>
);

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-700">
      {/* Header with Wave */}
      <header className="relative bg-teal-600 text-white p-8 md:p-16 text-center overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold">{cvData.name}</h1>
          <p className="mt-2 text-2xl text-teal-200">{cvData.title}</p>
          <div className="mt-6 flex justify-center items-center flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${cvData.contact.email}`} className="flex items-center hover:text-white transition-colors">
              <MailIcon className="h-5 w-5 mr-2" /> {cvData.contact.email}
            </a>
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2" /> {cvData.contact.phone}
            </div>
            <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
              <GithubIcon className="h-5 w-5 mr-2" /> GitHub
            </a>
            <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
              <LinkedinIcon className="h-5 w-5 mr-2" /> LinkedIn
            </a>
          </div>
        </div>
        {/* Animated Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#f7fafc" />
            </g>
            </svg>
        </div>
        {/* Adding CSS for the wave animation directly in a style tag */}
        <style>{`
            .waves {
                position: relative;
                width: 100%;
                height: 15vh;
                margin-bottom: -7px;
                min-height: 100px;
                max-height: 150px;
            }
            .parallax > use {
                animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
            }
            .parallax > use:nth-child(1) {
                animation-delay: -2s;
                animation-duration: 7s;
            }
            .parallax > use:nth-child(2) {
                animation-delay: -3s;
                animation-duration: 10s;
            }
            .parallax > use:nth-child(3) {
                animation-delay: -4s;
                animation-duration: 13s;
            }
            .parallax > use:nth-child(4) {
                animation-delay: -5s;
                animation-duration: 20s;
            }
            @keyframes move-forever {
                0% {
                    transform: translate3d(-90px,0,0);
                }
                100% { 
                    transform: translate3d(85px,0,0);
                }
            }
            @media (max-width: 768px) {
                .waves {
                    height: 40px;
                    min-height: 40px;
                }
            }
        `}</style>
      </header>
      
      {/* Main Content */}
      <main className="p-8 md:p-12 max-w-5xl mx-auto">
        
        {/* Education Section */}
        <Section icon={<GraduationCapIcon className="w-8 h-8 text-teal-600"/>} title="Education">
          <div className="space-y-4">
            {cvData.education.map((edu, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg text-gray-900">{edu.institution}</h3>
                  <span className="text-sm font-medium text-teal-600 bg-teal-100 px-2 py-1 rounded">{edu.year}</span>
                </div>
                <p className="text-md">{edu.degree}</p>
                <p className="text-sm text-gray-600 mt-1">{edu.grade}</p>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Internship Experience */}
        <Section icon={<BriefcaseIcon className="w-8 h-8 text-teal-600"/>} title="Internship Experience">
          <div className="space-y-6">
            {cvData.internships.map((intern, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-xl text-gray-900">{intern.company}</h3>
                  <span className="text-sm text-gray-500">{intern.date}</span>
                </div>
                <p className="font-semibold text-md text-teal-700">{intern.role} - {intern.location}</p>
                <p className="mt-3 text-gray-600">{intern.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Personal Projects */}
        <Section icon={<CodeIcon className="w-8 h-8 text-teal-600"/>} title="Personal Projects">
          <div className="grid md:grid-cols-2 gap-6">
            {cvData.projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg text-gray-900">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.date}</span>
                </div>
                <p className="mt-2 text-gray-600 flex-grow">{project.description}</p>
                <a href={project.link} className="mt-4 text-teal-600 hover:text-teal-800 font-semibold self-start">
                  View on GitHub &rarr;
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* Technical Skills */}
        <Section icon={<WrenchIcon className="w-8 h-8 text-teal-600"/>} title="Technical Skills & Interests">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            {Object.entries(cvData.skills).map(([key, value]) => (
                <div key={key} className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-3 items-start">
                    <h4 className="font-bold text-gray-800 capitalize col-span-1">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <p className="text-gray-600 col-span-3">{value}</p>
                </div>
            ))}
             <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-4 pt-4 border-t border-gray-200 items-start">
                    <h4 className="font-bold text-gray-800 col-span-1">Areas of Interest</h4>
                    <p className="text-gray-600 col-span-3">{cvData.interests}</p>
                </div>
          </div>
        </Section>
        
        {/* Certifications & Achievements */}
        <div className="grid md:grid-cols-2 gap-12">
            <Section icon={<AwardIcon className="w-8 h-8 text-teal-600"/>} title="Certifications">
                 <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {cvData.certifications.map((cert, index) => <li key={index}>{cert}</li>)}
                    </ul>
                </div>
            </Section>
            <Section icon={<AwardIcon className="w-8 h-8 text-teal-600"/>} title="Achievements">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                         {cvData.achievements.map((achieve, index) => <li key={index}>{achieve}</li>)}
                    </ul>
                </div>
            </Section>
        </div>

      </main>
      
      <footer className="text-center py-6 bg-gray-100 border-t border-gray-200">
        <p className="text-gray-500">Generated Portfolio for {cvData.name}</p>
      </footer>
    </div>
  );
}
