import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-white via-indigo-50/60 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-36">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Amirhossein Amini
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-3 max-w-2xl text-lg text-slate-700 sm:text-xl"
            >
              Juriste en droit du commerce international — alliant rigueur juridique et innovation IA. Candidat CRFPA 2026.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Me contacter / Postuler
              </a>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Télécharger le CV (PDF)
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 flex flex-wrap gap-4 text-sm text-slate-700"
            >
              <div className="flex items-center gap-2"><span className="font-semibold">Localisation:</span> Hauts-de-Seine, Île-de-France</div>
              <div className="flex items-center gap-2"><span className="font-semibold">Email:</span> <a href="mailto:amirosiamini1@yahoo.com" className="text-indigo-700 underline">amirosiamini1@yahoo.com</a></div>
              <div className="flex items-center gap-2"><span className="font-semibold">Téléphone:</span> <a href="tel:+33605657080" className="text-indigo-700 underline">06 05 65 70 80</a></div>
              <div className="flex items-center gap-2"><span className="font-semibold">LinkedIn:</span> <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/amini-amirhossein" className="text-indigo-700 underline">linkedin.com/in/amini-amirhossein</a></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative mx-auto aspect-square w-64 overflow-hidden rounded-full border-4 border-white shadow-2xl ring-1 ring-black/5 sm:w-72 md:w-80"
            aria-label="Portrait d'Amirhossein Amini"
          >
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait professionnel"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
