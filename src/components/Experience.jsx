import { motion } from 'framer-motion';

const timeline = [
  {
    title: "Membre, AI/Arb",
    location: "Amsterdam",
    period: "Sept 2024 – Présent",
    details: [
      "Publications sur la réglementation de l'IA et l'arbitrage",
      "Recherche sur les définitions réglementaires mondiales et leurs impacts",
      "Analyse des usages de l'IA en arbitrage",
      "Coopération pour bonnes pratiques d'intégration de l'IA en droit",
    ],
  },
  {
    title: "Stage, Alvand CO.",
    location: "Téhéran",
    period: "Août – Oct 2019",
    details: [
      "Droit des affaires et gestion commerciale",
      "Rédaction de contrats et documents juridiques",
      "Compétences en gestion commerciale et communication",
    ],
  },
];

export default function Experience() {
  return (
    <section aria-labelledby="exp-title" className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h2 id="exp-title" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Expériences</h2>
        <p className="mt-2 text-slate-600">Parcours sélectionné en lien avec le stage visé.</p>
      </div>

      <ol className="relative border-s-2 border-slate-200">
        {timeline.map((item, idx) => (
          <li key={idx} className="ms-6 py-6">
            <span className="absolute -start-3 mt-1 h-6 w-6 rounded-full border-2 border-white bg-indigo-600 shadow ring-2 ring-indigo-200" />
            <motion.h3 initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg font-semibold text-slate-900">
              {item.title}
            </motion.h3>
            <div className="text-sm text-slate-600">{item.location} — {item.period}</div>
            <ul className="mt-3 list-inside list-disc text-slate-700">
              {item.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
