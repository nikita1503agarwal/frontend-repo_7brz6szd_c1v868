import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Merci ${name}, votre message a été simulé côté client. Remplacez l'action par votre webhook/email.`);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-6 text-center">
        <h2 id="contact-title" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Contact / Postuler</h2>
        <p className="mt-2 text-slate-600">Envoyez un message ou prenez rendez‑vous via LinkedIn.</p>
      </div>

      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="name">Nom</label>
            <input id="name" name="name" type="text" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <button type="submit" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">Envoyer</button>
          <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/amini-amirhossein" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"><Linkedin className="h-4 w-4" /> LinkedIn</a>
        </div>
        {status && <p role="status" className="mt-3 text-sm text-emerald-700">{status}</p>}
      </motion.form>
    </section>
  );
}
