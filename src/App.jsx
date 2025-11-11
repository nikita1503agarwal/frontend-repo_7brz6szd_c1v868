import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ATSPrintable from './components/ATSPrintable';
import './index.css';

function SectionDivider() {
  return <div className="mx-auto my-2 h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-indigo-600 focus:px-3 focus:py-2 focus:text-white">Aller au contenu</a>

      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="text-sm font-semibold">AA</div>
          <ul className="flex items-center gap-4 text-sm">
            <li><a className="hover:text-indigo-700" href="#skills">Compétences</a></li>
            <li><a className="hover:text-indigo-700" href="#projects">Projets</a></li>
            <li><a className="hover:text-indigo-700" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <Hero />
        <SectionDivider />
        <section id="skills"><Skills /></section>
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <section id="projects"><Projects /></section>
        <SectionDivider />
        <Contact />
        <SectionDivider />
        <ATSPrintable />
      </main>

      <footer className="mt-8 border-t border-slate-200 py-8 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Amirhossein Amini — CV de stage (juridique + IA). Version imprimable disponible via Télécharger le CV (PDF).
      </footer>

      {/* Print styles for ATS-friendly version */}
      <style>
        {`@media print {
          header, nav, section[aria-label="Hero"], #skills, #projects, footer { display: none !important; }
          body { background: white !important; }
        }`}
      </style>
    </div>
  );
}
