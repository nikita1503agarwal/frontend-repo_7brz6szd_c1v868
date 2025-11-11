CV site for Amirhossein Amini — Legal Internship.

Overview
- Single-page, responsive, and accessible website with premium design and micro-animations.
- Built with React, Tailwind CSS, and Framer Motion. Hero features a Spline 3D animation.
- Sections: Hero, Skills (legal + AI), Experience timeline, Education, Case/Project highlights with expandable cards, Contact/Apply form, and an ATS-friendly printable version.

Edit Content
- Text is directly in the components under src/components/ (Hero, Skills, Experience, Education, Projects, Contact, ATSPrintable).
- Replace the portrait image URL in Hero with your own.
- Update links (email/LinkedIn) in Hero and Contact.

PDF Export
- Use the “Télécharger le CV (PDF)” button in the hero or your browser’s Print > Save as PDF. A simplified, ATS-friendly layout is automatically used for print.

SEO
- Update index.html title and add meta description/og tags. Example:
  <title>Amirhossein Amini — Juriste (Commerce International) | IA & Arbitrage</title>
  <meta name="description" content="CV de Amirhossein Amini — Juriste en droit du commerce international, IA & arbitrage. Stage fin d'études (mars 2026)." />

Accessibility
- Keyboard focus styles, color contrast, and skip link included. Components use semantic headings and ARIA labels. Ensure alt text describes your own portrait.

Performance
- Images use lazy loading. Keep image sizes optimized. Avoid heavy third‑party scripts.

Deployment
- Standard Vite build: npm run build then deploy dist/ to any static host (Vercel/Netlify). The project is fully static and needs no backend.

License
- Personal use by Amirhossein Amini.
