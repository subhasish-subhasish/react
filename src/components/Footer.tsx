// src/components/Footer.tsx
// src/components/Footer.tsx
import portfolioData from "../data/data.json";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";

export const Footer = () => (
    <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto px-6 text-center">
             <div className="flex justify-center items-center space-x-6 mb-4">
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
                <a href={`mailto:${portfolioData.contact.email}`}><MailIcon /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
        </div>
    </footer>
);

export default Footer;