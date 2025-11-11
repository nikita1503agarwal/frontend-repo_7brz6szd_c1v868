import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Publication — IA & Arbitrage",
    summary: "Analyse de l'impact des systèmes d'IA sur la procédure arbitrale et la preuve",
    details: "Exploration des enjeux de transparence, confidentialité et biais algorithmiques dans les procédures arbitrales, avec recommandations pratiques pour les cabinets et institutions.",
  },
  {
    title: "Note — Définitions réglementaires de l'IA",
    summary: "Comparaison UE/UK/US des définitions juridiques de l'IA et effets contractuels",
    details: "Tableau comparatif, cartographie des risques et clauses types de conformité pour contrats internationaux.",
  },
  {
    title: "Prototype — Assistant IA pour recherche juridique",
    summary: "Chaîne d'outils pour interroger des bases de données juridiques",
    details: "Prompt engineering, normalisation des sources et traçabilité des citations sur corpus doctrinal et jurisprudence.",
  },
];

function Card({ p }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div layout className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
          <p className="mt-1 text-slate-600">{p.summary}</p>
        </div>
        <button
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
        >
          {open ? 'Moins' : 'Plus'}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-3 text-slate-700"
          >
            {p.details}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section aria-labelledby="proj-title" className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h2 id="proj-title" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Études de cas & projets</h2>
        <p className="mt-2 text-slate-600">Contributions et réalisations liées au droit et à l'IA.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
