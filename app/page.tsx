import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Présentation - Michael DIA',
  description: 'Entrepreneur Tech, IA & d\'Automatisation.',
};

export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-slate-100 font-sans">
      
      {/* 0) HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-white/50 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-indigo-800 bg-clip-text text-transparent">
            Michael DIA
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="#projects" className="hover:text-indigo-600 transition-colors">Projets</a>
              <a href="#expertise" className="hover:text-indigo-600 transition-colors">Expertise</a>
              <a href="/contact" className="hover:text-indigo-600 transition-colors">Contact</a>
            </nav>
            <div className="flex gap-2 text-sm font-medium">
              <a href="/" className="text-indigo-600 font-bold pb-1 link-underline">FR</a>
              <span className="text-slate-300">|</span>
              <a href="/en" className="text-slate-400 hover:text-indigo-600 transition-colors">EN</a>
              <span className="text-slate-300">|</span>
              <a href="/es" className="text-slate-400 hover:text-indigo-600 transition-colors">ES</a>
            </div>
          </div>
        </div>
      </header>

      {/* 1) HERO SECTION */}
      <section className="relative overflow-hidden px-6 py-24 lg:py-32 flex flex-col items-center text-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-emerald-50 opacity-80"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply animate-blob animation-delay-2000"></div>
        
        <div className="mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-indigo-100 bg-white/80 shadow-sm backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
          <span className="text-sm font-medium text-slate-600 tracking-wide">Disponible pour nouveaux projets</span>
        </div>
        
        <h1 className="max-w-4xl mx-auto text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          Entrepreneur <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">IA & Automation</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Je conçois des architectures SaaS robustes et des solutions IA orientées vers la performance opérationnelle et financière.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
          <a 
            href="/api/profile-pdf" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Télécharger mon profil
          </a>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-200"
          >
            Me contacter
          </a>
        </div>
      </section>



      {/* 2) WHO I AM */}
      <section className="px-6 py-24 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Qui je suis
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-emerald-500 mt-4 rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="relative w-64 h-auto lg:w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 sticky top-24">
                <Image 
                  src="https://nbaiw6gccbuytvgc.public.blob.vercel-storage.com/mike%20corporate.png"
                  alt="Michael DIA"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
            
            <div className="lg:col-span-8 space-y-8">
              <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed p-8 rounded-2xl bg-slate-50/50 border border-slate-100">
                <p className="mb-6">
                  <strong className="text-slate-900 font-semibold">Michael DIA</strong> — Entrepreneur tech & consultant IA.
                </p>
                <p>
                  Passionné par l'efficacité opérationnelle et les technologies de pointe, je ne me contente pas de coder : je construis des systèmes. Je conçois et déploie des solutions intelligentes qui transforment la complexité technique en avantage concurrentiel tangible.
                </p>
                <p className="mt-4">
                  Mon approche est résolument pragmatique. La technologie n'est pas une fin en soi, mais un levier pour servir une stratégie métier claire. Je privilégie la robustesse, la sécurité et la maintenabilité à long terme.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Badge icon="📍">France</Badge>
                <Badge icon="🏝️">Canaries</Badge>
                <Badge icon="🌍">International</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) PROJECTS SECTION */}
      <section id="projects" className="px-6 py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-transparent to-transparent opacity-70 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Mes projets
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Un portfolio ciblé sur l'automatisation, la finance et l'intelligence artificielle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* A) NexoAI */}
            <ProjectCard 
              title="NexoAI"
              subtitle="Agence d'Automatisation IA"
              tag="B2B / SaaS"
              description="Fluidifier les opérations des entreprises grâce à des agents intelligents sur mesure."
              link="https://nexoai.fr"
            >
              <ul className="space-y-3 mt-4">
                <ListItem>Agents IA métier autogérés</ListItem>
                <ListItem>Automatisation de workflows complexes</ListItem>
                <ListItem>Intégration API & Legacy</ListItem>
              </ul>
            </ProjectCard>

            {/* B) AlgoNovaAI */}
            <ProjectCard 
              title="AlgoNovaAI"
              subtitle="IA Appliquée au Trading"
              tag="FinTech / Research"
              description="Recherche quantitative et aide à la décision pour les marchés financiers."
              highlight="Recherche & Responsabilité"
              link="https://algonovaai.com"
            >
              <ul className="space-y-3 mt-4">
                <ListItem>Analyse de données temps réel</ListItem>
                <ListItem>Modèles prédictifs & aides à la décision</ListItem>
                <ListItem>Approche stricte du contrôle du risque</ListItem>
              </ul>
            </ProjectCard>

            {/* C) AlgoNovaEdge */}
            <ProjectCard 
              title="AlgoNovaEdge"
              subtitle="Infrastructure pour Traders"
              tag="SaaS / Infra"
              description="Plateforme technique assurant l'exécution et la sécurité des opérations de trading."
              highlight="Fiabilité Critique"
              link="https://algonovaedge.net"
            >
              <ul className="space-y-3 mt-4">
                <ListItem>Connexions bas-latence (Tradovate)</ListItem>
                <ListItem>Gestion centralisée du risque</ListItem>
                <ListItem>Webhooks TradingView sécurisés</ListItem>
              </ul>
            </ProjectCard>

            {/* D) Novareceipt */}
            <ProjectCard 
              title="Novareceipt"
              subtitle="Scanner de Factures IA"
              tag="Productivité / SaaS"
              description="Application mobile de scan de factures connectée à l'IA avec export automatisé."
              highlight="Organisation Automatisée"
              link="https://www.novareceipt.com/"
            >
              <ul className="space-y-3 mt-4">
                <ListItem>Scan intelligent de reçus</ListItem>
                <ListItem>Extraction de données par IA</ListItem>
                <ListItem>Export automatique vers Google Drive</ListItem>
              </ul>
            </ProjectCard>

          </div>
        </div>
      </section>

      {/* 4) WHAT I DO (Expertise) */}
      <section id="expertise" className="px-6 py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl opacity-40"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ce que je fais concrètement
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Au-delà du code, j'apporte une vision architecturale complète. Je conçois des systèmes capables d'évoluer (scale) sans sacrifier la sécurité.
              </p>
              <div className="inline-block p-6 bg-slate-800/80 rounded-2xl border border-slate-700 backdrop-blur-sm shadow-xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <p className="text-emerald-400 font-medium mb-2 relative z-10">Focus qualité</p>
                 <p className="text-slate-300 text-sm relative z-10">
                   "Pas de code jetable. Je construis pour durer."
                 </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <CheckItem text="Architecture SaaS Scalable" subtext="Multi-tenant, Auth, Database design" />
              <CheckItem text="Intégration d’API Complexes" subtext="Stripe, OpenAI, Brokers, CRMs" />
              <CheckItem text="Automatisation & IA" subtext="RAG, Agents, Pipelines de données" />
              <CheckItem text="Sécurité & Chiffrement" subtext="Protection des données sensibles" />
              <CheckItem text="Développement Rapide (MVP)" subtext="Time-to-market optimizado" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Comment je collabore */}
      <section className="px-6 py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Comment je collabore
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Mes collaborations sont fondées sur la clarté d'exécution et la création de valeur pérenne. Je m'intègre là où le besoin technique est critique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CollaborationCard 
              title="Conseil Stratégique"
              items={[
                "Cadrage produit & Tech",
                "Choix d'architecture",
                "Feuille de route CTO"
              ]} 
            />
            <CollaborationCard 
              title="Développement & PoC"
              items={[
                "Création de MVP rapides",
                "Implémentation IA",
                "Partenariats long terme"
              ]} 
            />
            <CollaborationCard 
              title="Interventions"
              items={[
                "Audit de code & infra",
                "Optimisation performance",
                "Automatisation process"
              ]} 
            />
          </div>
        </div>
      </section>

      {/* SECTION: Cas d’usage concrets */}
      <section className="px-6 py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
           <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
             Cas d’usage concrets
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <UseCaseCard 
               title="SaaS Trading"
               desc="Mise en place d’une plateforme avec connexions brokers sécurisées et gestion du risque en temps réel."
             />
             <UseCaseCard 
               title="Automatisation Métier"
               desc="Automatisation complète de processus (data, support, reporting) pour des gains opérationnels immédiats."
             />
             <UseCaseCard 
               title="Agents IA Intégrés"
               desc="Déploiement d’agents IA contextuels connectés aux outils existants pour l'aide à la décision."
             />
           </div>
        </div>
      </section>

      {/* SECTION: Ma manière de travailler & Confiance */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Ma manière de travailler
            </h2>
            <ul className="space-y-6">
              <WorkStyleItem 
                title="Clarté avant vitesse" 
                text="Pas de dette technique inutile. Chaque ligne de code a une raison d'être." 
              />
              <WorkStyleItem 
                title="Sécurité par défaut" 
                text="Identification des risques et conformité dès la phase de conception." 
              />
              <WorkStyleItem 
                title="MVP orienté valeur" 
                text="On ne développe pas pour développer, mais pour valider et servir le business." 
              />
              <WorkStyleItem 
                title="Vision long terme" 
                text="Des solutions maintenables, documentées et transférables." 
              />
            </ul>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
               {/* Decoration */}
               <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-emerald-100 rounded-full opacity-50 blur-2xl"></div>
               
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center relative z-10">
                <span className="text-2xl mr-3">🛡️</span> Confiance & Confidentialité
              </h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                Les projets sont traités avec un <strong>haut niveau de confidentialité</strong> et une attention particulière portée à la sécurité des données et des systèmes.
              </p>
              <div className="mt-6 flex gap-3 relative z-10">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-500">NDA Standard</span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-500">IP Protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) EXECUTIVE MINI CV */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">
          Profil professionnel
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-1">
             <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Compétences</h3>
             <div className="flex flex-wrap gap-2">
              <SkillTag>Stratégie Tech</SkillTag>
              <SkillTag>Fullstack Dev</SkillTag>
              <SkillTag>Cloud Arch</SkillTag>
              <SkillTag>IA & LLMs</SkillTag>
              <SkillTag>Product Mgmt</SkillTag>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Stack Technique</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="font-bold text-slate-800">Core</span>
                <span className="text-slate-600">Python, TypeScript, Node.js, Next.js</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-slate-800">Data & IA</span>
                <span className="text-slate-600">OpenAI API, PyTorch, Pandas, Vector DBs</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-slate-800">Infrastructure</span>
                <span className="text-slate-600">AWS, Vercel, Docker, Supabase</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Contexte</h3>
             <ul className="space-y-4 text-sm text-slate-600">
               <li>
                 <strong className="text-slate-900 block mb-1">Langues</strong>
                 🇫🇷 Français (Natif)<br/>
                 🇬🇧 Anglais (Pro)<br/>
                 🇪🇸 Espagnol (Intermédiaire)
               </li>
               <li>
                 <strong className="text-slate-900 block mb-1">Vision</strong>
                 Faire le pont entre besoin business et réalité technique.
               </li>
             </ul>
          </div>

        </div>
      </section>

      {/* 6) WHY MEET ME (Final CTA) */}
      <section id="contact" className="px-6 py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-slate-100 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Parlons de votre prochain défi
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Je suis toujours à l'écoute de projets ambitieux nécessitant une expertise technique pointue et une vision stratégique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-slate-900 hover:bg-slate-800 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Démarrer une conversation
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            Réponse sous 24-48h • Confidentialité assurée
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t border-slate-100 text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
           <div className="text-lg font-bold text-slate-900 mb-4">Michael DIA</div>
           <p className="text-slate-500 text-sm mb-8">
             Entrepreneur Tech • IA • Automatisation
           </p>
           
           <div className="flex gap-6 mb-8 text-sm text-slate-500">
             <a href="/mentions-legales" className="hover:text-indigo-600 transition-colors">Mentions Légales</a>
             <a href="/confidentialite" className="hover:text-indigo-600 transition-colors">Confidentialité</a>
           </div>

           <div className="text-slate-400 text-xs">
             &copy; {new Date().getFullYear()} Michael DIA. Tous droits réservés.
           </div>
        </div>
      </footer>

    </div>
  );
}

// --- Helper Components ---

function ProjectCard({ title, subtitle, children, description, highlight, tag, link }: { title: string, subtitle: string, children: React.ReactNode, description?: string, highlight?: string, tag?: string, link?: string }) {
  const content = (
    <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {tag && (
        <span className="absolute top-6 right-6 inline-block px-3 py-1 rounded-full bg-indigo-50 text-xs font-semibold text-indigo-600 border border-indigo-100 uppercase tracking-wide">
          {tag}
        </span>
      )}
      <div className="mb-4 pr-16">
        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{title}</h3>
        <p className="text-slate-500 font-medium text-sm mt-1">{subtitle}</p>
      </div>
      
      {description && (
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          {description}
        </p>
      )}

      <div className="flex-grow text-slate-600 text-sm border-t border-slate-100 group-hover:border-indigo-100 pt-6 transition-colors">
        {children}
      </div>
      
      {highlight && (
        <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-indigo-100 transition-colors flex items-center text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-indigo-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
          {highlight}
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return content;
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

function CheckItem({ text, subtext }: { text: string, subtext?: string }) {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-medium text-white">{text}</h4>
        {subtext && <p className="text-slate-400 text-sm mt-1">{subtext}</p>}
      </div>
    </div>
  );
}

function SkillTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold bg-slate-50 text-slate-600 border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-colors cursor-default">
      {children}
    </span>
  );
}

function Badge({ icon, children }: { icon: string, children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-700 shadow-sm hover:border-indigo-200 hover:text-indigo-600 hover:shadow-indigo-500/10 transition-all">
      <span className="mr-2">{icon}</span>
      {children}
    </span>
  );
}

function CollaborationCard({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-indigo-200 hover:shadow-indigo-500/10 hover:shadow-lg transition-all duration-300 group">
      <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full mb-4"></div>
      <h3 className="font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
           <li key={i} className="text-sm text-slate-600 flex items-start">
             <span className="mr-2 text-indigo-400 font-bold group-hover:text-emerald-500 transition-colors">→</span> {item}
           </li>
        ))}
      </ul>
    </div>
  );
}

function UseCaseCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-indigo-500/10 hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300">
      <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}


function WorkStyleItem({ title, text }: { title: string, text: string }) {
  return (
    <li className="flex items-start group">
      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-4 group-hover:scale-125 transition-transform duration-300"></div>
      <div>
        <strong className="block text-slate-900 text-sm mb-1 group-hover:text-indigo-700 transition-colors">{title}</strong>
        <span className="text-slate-600 text-sm leading-relaxed">{text}</span>
      </div>
    </li>
  );
}
