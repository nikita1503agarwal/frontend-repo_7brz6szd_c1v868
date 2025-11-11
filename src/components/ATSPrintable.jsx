export default function ATSPrintable() {
  return (
    <section aria-label="CV imprimable" className="mx-auto max-w-4xl px-6 py-12 print:max-w-none print:px-0">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm print:border-0 print:shadow-none">
        <header className="border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-bold">Amirhossein Amini</h1>
          <p className="text-sm text-slate-700">M2 Droit Commercial et International — Candidat CRFPA 2026</p>
          <p className="mt-1 text-xs text-slate-600">Hauts-de-Seine, Île-de-France · Email: amirosiamini1@yahoo.com · Tel: 06 05 65 70 80 · LinkedIn: linkedin.com/in/amini-amirhossein</p>
        </header>

        <section className="mt-4">
          <h2 className="text-sm font-semibold tracking-wide text-slate-900">Profil</h2>
          <p className="mt-1 text-sm leading-relaxed text-slate-800">
            Juriste en formation, spécialisée en droit du commerce international à l'Université Paris Nanterre et préparant le CRFPA 2026. Maîtrise du droit des contrats, conformité, arbitrage et contentieux international. Intérêt soutenu pour l'IA en droit via publications sur sa réglementation et son impact en arbitrage. Trilingue (français, anglais, persan). Recherche un stage de fin d'études (mars 2026, 3–6 mois).
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-sm font-semibold tracking-wide text-slate-900">Formation</h2>
          <ul className="mt-1 space-y-1 text-sm text-slate-800">
            <li>Master 2 en Droit International et Européen — Université Paris Nanterre (Sept 2025 – Présent)</li>
            <li>Master 1 en Droit International et Européen — Université Paris Nanterre (Sept 2024 – Mai 2025)</li>
            <li>Licence en Droit (mention) — Droit Privé — Université de Reims Champagne-Ardenne</li>
            <li>Licence en Droit — Université Azad (Iran)</li>
          </ul>
        </section>

        <section className="mt-4">
          <h2 className="text-sm font-semibold tracking-wide text-slate-900">Expérience</h2>
          <ul className="mt-1 space-y-1 text-sm text-slate-800">
            <li>Membre, AI/Arb — Amsterdam (Sept 2024 – Présent) : publications IA & arbitrage, recherches comparatives, meilleures pratiques.</li>
            <li>Stage, Alvand CO. — Téhéran (Août – Oct 2019) : droit des affaires, rédaction contractuelle, gestion et communication.</li>
          </ul>
        </section>

        <section className="mt-4">
          <h2 className="text-sm font-semibold tracking-wide text-slate-900">Compétences</h2>
          <p className="mt-1 text-sm text-slate-800">Juridique: commerce international, contrats, arbitrage, conformité, contentieux, DIP, concurrence. — IA: réglementation, arbitrage, prompts, recherche assistée, optimisation GPT, assistants IA.</p>
        </section>

        <section className="mt-4">
          <h2 className="text-sm font-semibold tracking-wide text-slate-900">Langues</h2>
          <p className="mt-1 text-sm text-slate-800">Persan (natif), Dari (C2), Français (DALF C1), Anglais (C1), Arabe (A2), Espagnol (débutant).</p>
        </section>
      </div>
    </section>
  );
}
