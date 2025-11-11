import { motion } from 'framer-motion';

const legal = [
  'Droit du commerce international',
  'Contrats internationaux',
  'Arbitrage international',
  'Conformité (compliance)',
  'Contentieux international',
  'Droit international privé',
  'Droit de la concurrence',
];

const ai = [
  'Réglementation de l’IA',
  'IA en arbitrage',
  'Rédaction de prompts',
  'Recherche assistée par IA',
  'Optimisation GPT',
  'Développement d’assistants IA',
];

function Tag({ label }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5">
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section aria-labelledby="skills-title" className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h2 id="skills-title" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Compétences clés</h2>
        <p className="mt-2 text-slate-600">Mise en avant des compétences juridiques et des atouts IA.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-slate-900">Juridique</h3>
          <div className="flex flex-wrap gap-2">
            {legal.map((l) => (
              <Tag key={l} label={l} />
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-slate-900">IA & numérique</h3>
          <div className="flex flex-wrap gap-2">
            {ai.map((l) => (
              <Tag key={l} label={l} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
