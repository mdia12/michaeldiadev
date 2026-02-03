import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales - Michael DIA',
  description: 'Mentions légales du site de Michael DIA.',
};

export default function MensLegalesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-white/50 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-indigo-800 bg-clip-text text-transparent">
            Michael DIA
          </div>
          <div className="flex items-center gap-6">
            <a href="/presentation" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Retour à l'accueil</a>
          </div>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">Mentions Légales</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Éditeur du site</h2>
            <div className="prose prose-slate text-slate-600">
              <p>
                Le présent site est édité par <strong>Michael DIA</strong>.
              </p>
              <ul className="list-none pl-0 space-y-2 mt-4">
                <li><strong>Adresse :</strong> Telde, Las Palmas, Espagne.</li>
                <li><strong>Numéro NIF :</strong> Y7565912F</li>
                <li><strong>Email :</strong> <a href="mailto:contact@michaeldia.com" className="text-indigo-600 hover:text-indigo-800">contact@michaeldia.com</a></li>
                <li><strong>Téléphone :</strong> +33 6 20 65 49 61</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Hébergement</h2>
            <div className="prose prose-slate text-slate-600">
              <p>
                Le site est hébergé par <strong>Vercel Inc.</strong><br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                États-Unis
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Propriété intellectuelle</h2>
            <div className="prose prose-slate text-slate-600">
              <p>
                L'ensemble de ce site relève de la législation espagnole et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <footer className="bg-slate-50 border-t border-slate-200 mt-24 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Michael DIA. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
