import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Michael DIA',
  description: 'Politique de confidentialité et protection des données personnelles.',
};

export default function ConfidentialitePage() {
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
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">Politique de Confidentialité</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Collecte des données</h2>
            <div className="prose prose-slate text-slate-600">
              <p>
                Nous collectons les informations que vous nous fournissez volontairement, notamment lorsque vous nous contactez par email ou via les formulaires présents sur le site. Ces informations peuvent inclure votre nom, votre adresse email, votre numéro de téléphone et le nom de votre entreprise.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Utilisation des données</h2>
            <div className="prose prose-slate text-slate-600">
              <p>
                Les données collectées sont utilisées uniquement dans le cadre de nos relations commerciales et pour vous fournir les informations ou services demandés. Elles ne sont jamais vendues, louées ou communiquées à des tiers non autorisés.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Protection des données</h2>
            <div className="prose prose-slate text-slate-600">
              <p>
                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Seuls les employés qui ont besoin d'effectuer un travail spécifique ont accès aux informations personnelles identifiables.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Vos droits</h2>
            <div className="prose prose-slate text-slate-600">
              <p>
                Conformément à la réglementation en vigueur (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@michaeldia.com" className="text-indigo-600 hover:text-indigo-800">contact@michaeldia.com</a>.
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
