import { motion } from 'framer-motion';

const educations = [
  {
    title: "Master 2 en Droit International et Européen",
    org: "Université Paris Nanterre",
    period: "Sept 2025 – Présent",
    details: [
      "Contrats commerciaux internationaux, gestion des litiges, conformité",
      "Différends d'investissement, sécurisation des transactions",
    ],
  },
  {
    title: "Master 1 en Droit International et Européen",
    org: "Université Paris Nanterre",
    period: "Sept 2024 – Mai 2025",
    details: [
      "Commerce international, arbitrage, droit international privé",
      "Marché intérieur UE, concurrence, ordre économique international",
    ],
  },
  {
    title: "Licence en Droit (mention) — Droit Privé",
    org: "Université de Reims Champagne-Ardenne",
    period: "",
    details: [],
  },
  {
    title: "Licence en Droit — Iran",
    org: "Université Azad",
    period: "",
    details: [
      "Droit civil, commercial et international",
    ],
  },
];

export default function Education() {
  return (
    <section aria-labelledby="edu-title" className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h2 id="edu-title" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Formation</h2>
        <p className="mt-2 text-slate-600">Sélection des cursus pertinents.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {educations.map((e, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{e.title}</h3>
            <div className="text-sm text-slate-600">{e.org}{e.period ? ` — ${e.period}` : ''}</div>
            {e.details?.length > 0 && (
              <ul className="mt-3 list-inside list-disc text-slate-700">
                {e.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
