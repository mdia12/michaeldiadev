import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Michael DIA',
  description: 'Prenez contact pour discuter de vos projets IA et Automatisation.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-white/50 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-indigo-800 bg-clip-text text-transparent">
            Michael DIA
          </div>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Retour à l'accueil</a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Me contacter</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Discutons de la manière dont je peux vous aider à atteindre vos objectifs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Coordonnées</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Email</h3>
                  <p className="text-slate-600 mt-1">
                    <a href="mailto:contact@michaeldia.com" className="hover:text-indigo-600 transition-colors">contact@michaeldia.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Téléphone</h3>
                  <p className="text-slate-600 mt-1">+33 6 20 65 49 61</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Localisation</h3>
                  <p className="text-slate-600 mt-1">Espagne (Canaries) & France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Placeholder / Simple Message */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
             <h2 className="text-2xl font-bold text-slate-900 mb-6">Envoyer un message</h2>
             <form action="mailto:contact@michaeldia.com" method="post" encType="text/plain" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
                  <input type="text" name="name" id="name" required className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" name="email" id="email" required className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea name="message" id="message" rows={4} required className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"></textarea>
                </div>
                <button type="submit" className="w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                  Envoyer via votre client email
                </button>
             </form>
             <p className="mt-4 text-xs text-slate-400 text-center">
               Ce formulaire ouvrira votre logiciel de messagerie par défaut.
             </p>
          </div>

        </div>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 mt-12 py-12 text-center">
        <div className="text-slate-400 text-xs">
          &copy; {new Date().getFullYear()} Michael DIA. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
