// src/app/page.tsx
// src/app/page.tsx

import Hero from "../components/Hero";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <Education />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

