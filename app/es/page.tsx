import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Presentación - Michael DIA',
  description: 'Emprendedor Tech, IA y Automatización.',
};

export default function PresentationPageEs() {
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
              <a href="#projects" className="hover:text-indigo-600 transition-colors">Proyectos</a>
              <a href="#expertise" className="hover:text-indigo-600 transition-colors">Experiencia</a>
              <a href="/contact" className="hover:text-indigo-600 transition-colors">Contacto</a>
            </nav>
             <div className="flex gap-2 text-sm font-medium">
              <a href="/" className="text-slate-400 hover:text-indigo-600 transition-colors">FR</a>
              <span className="text-slate-300">|</span>
              <a href="/en" className="text-slate-400 hover:text-indigo-600 transition-colors">EN</a>
              <span className="text-slate-300">|</span>
              <a href="/es" className="text-indigo-600 font-bold pb-1 link-underline">ES</a>
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
          <span className="text-sm font-medium text-slate-600 tracking-wide">Disponible para nuevos proyectos</span>
        </div>
        
        <h1 className="max-w-4xl mx-auto text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          Emprendedor <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">IA & Automatización</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Diseño arquitecturas SaaS robustas y soluciones de IA orientadas al rendimiento operativo y financiero.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
          <a 
            href="/api/profile-pdf" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Descargar perfil
          </a>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-200"
          >
            Contactarme
          </a>
        </div>
      </section>

      {/* 2) WHO I AM */}
      <section className="px-6 py-24 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
               <h2 className="text-3xl font-bold text-slate-900 sticky top-24">
                Quién soy
                <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-emerald-500 mt-4 rounded-full"></div>
              </h2>
            </div>
            
            <div className="lg:col-span-8 space-y-8">
              <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed p-8 rounded-2xl bg-slate-50/50 border border-slate-100">
                <p className="mb-6">
                  <strong className="text-slate-900 font-semibold">Michael DIA</strong> — Emprendedor Tech y consultor de IA.
                </p>
                <p>
                  Apasionado por la eficiencia operativa y las tecnologías de punta, no solo escribo código: construyo sistemas. Diseño y despliego soluciones inteligentes que transforman la complejidad técnica en una ventaja competitiva tangible.
                </p>
                <p className="mt-4">
                  Mi enfoque es decididamente pragmático. La tecnología no es un fin en sí misma, sino una palanca para servir a una estrategia de negocio clara. Priorizo la robustez, la seguridad y el mantenimiento a largo plazo.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Badge icon="📍">Francia</Badge>
                <Badge icon="🏝️">Canarias</Badge>
                <Badge icon="🌍">Internacional</Badge>
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
              Mis proyectos
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Un portafolio enfocado en la automatización, las finanzas y la inteligencia artificial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* A) NexoAI */}
            <ProjectCard 
              title="NexoAI"
              subtitle="Agencia de Automatización IA"
              tag="B2B / SaaS"
              description="Agilizar las operaciones empresariales mediante agentes inteligentes personalizados."
            >
              <ul className="space-y-3 mt-4">
                <ListItem>Agentes de negocio IA autogestionados</ListItem>
                <ListItem>Automatización de flujos de trabajo complejos</ListItem>
                <ListItem>Integración de API y sistemas heredados</ListItem>
              </ul>
            </ProjectCard>

            {/* B) AlgoNovaAI */}
            <ProjectCard 
              title="AlgoNovaAI"
              subtitle="IA Aplicada al Trading"
              tag="FinTech / Research"
              description="Investigación cuantitativa y apoyo a la toma de decisiones para los mercados financieros."
              highlight="Investigación y Responsabilidad"
            >
              <ul className="space-y-3 mt-4">
                <ListItem>Análisis de datos en tiempo real</ListItem>
                <ListItem>Modelos predictivos y soporte a decisiones</ListItem>
                <ListItem>Enfoque estricto de control de riesgos</ListItem>
              </ul>
            </ProjectCard>

            {/* C) AlgoNovaEdge */}
            <ProjectCard 
              title="AlgoNovaEdge"
              subtitle="Infraestructura para Traders"
              tag="SaaS / Infra"
              description="Plataforma técnica que asegura la ejecución y seguridad de las operaciones de trading."
              highlight="Fiabilidad Crítica"
            >
              <ul className="space-y-3 mt-4">
                <ListItem>Conexiones de baja latencia (Tradovate)</ListItem>
                <ListItem>Gestión centralizada del riesgo</ListItem>
                <ListItem>Webhooks de TradingView seguros</ListItem>
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
                Lo que hago concretamente
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Más allá del código, aporto una visión arquitectónica completa. Diseño sistemas capaces de escalar sin sacrificar la seguridad.
              </p>
              <div className="inline-block p-6 bg-slate-800/80 rounded-2xl border border-slate-700 backdrop-blur-sm shadow-xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <p className="text-emerald-400 font-medium mb-2 relative z-10">Enfoque de calidad</p>
                 <p className="text-slate-300 text-sm relative z-10">
                   "Sin código desechable. Construyo para durar."
                 </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <CheckItem text="Arquitectura SaaS Escalable" subtext="Multi-tenant, Auth, Diseño de bases de datos" />
              <CheckItem text="Integración de APIs Complejas" subtext="Stripe, OpenAI, Brokers, CRMs" />
              <CheckItem text="Automatización e IA" subtext="RAG, Agentes, Pipelines de datos" />
              <CheckItem text="Seguridad y Cifrado" subtext="Protección de datos sensibles" />
              <CheckItem text="Desarrollo Rápido (MVP)" subtext="Time-to-market optimizado" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Collaboration */}
      <section className="px-6 py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Cómo colaboro
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Mis colaboraciones se basan en la claridad de ejecución y la creación de valor duradero. Me integro donde la necesidad técnica es crítica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CollaborationCard 
              title="Consultoría Estratégica"
              items={[
                "Definición de Producto y Tecnología",
                "Elección de Arquitectura",
                "Hoja de Ruta CTO"
              ]} 
            />
            <CollaborationCard 
              title="Desarrollo y PoC"
              items={[
                "Creación rápida de MVP",
                "Implementación de IA",
                "Asociaciones a largo plazo"
              ]} 
            />
            <CollaborationCard 
              title="Intervenciones"
              items={[
                "Auditoría de Código e Infraestructura",
                "Optimización del Rendimiento",
                "Automatización de Procesos"
              ]} 
            />
          </div>
        </div>
      </section>

      {/* SECTION: Use Cases */}
      <section className="px-6 py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
           <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
             Casos de Uso Concretos
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <UseCaseCard 
               title="SaaS de Trading"
               desc="Implementación de una plataforma con conexiones seguras a brokers y gestión de riesgos en tiempo real."
             />
             <UseCaseCard 
               title="Automatización de Negocios"
               desc="Automatización completa de procesos (datos, soporte, informes) para ganancias operativas inmediatas."
             />
             <UseCaseCard 
               title="Agentes de IA Integrados"
               desc="Despliegue de agentes de IA contextuales conectados a herramientas existentes para el apoyo a la decisión."
             />
           </div>
        </div>
      </section>

      {/* SECTION: Work Style & Trust */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Mi Forma de Trabajar
            </h2>
            <ul className="space-y-6">
              <WorkStyleItem 
                title="Claridad antes que velocidad" 
                text="Sin deuda técnica inútil. Cada línea de código tiene una razón de ser." 
              />
              <WorkStyleItem 
                title="Seguridad por defecto" 
                text="Identificación de riesgos y cumplimiento desde la fase de diseño." 
              />
              <WorkStyleItem 
                title="MVP orientado al valor" 
                text="No desarrollamos por desarrollar, sino para validar y servir al negocio." 
              />
              <WorkStyleItem 
                title="Visión a largo plazo" 
                text="Soluciones mantenibles, documentadas y transferibles." 
              />
            </ul>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
               {/* Decoration */}
               <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-emerald-100 rounded-full opacity-50 blur-2xl"></div>
               
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center relative z-10">
                <span className="text-2xl mr-3">🛡️</span> Confianza y Confidencialidad
              </h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                Los proyectos se tratan con un <strong>alto nivel de confidencialidad</strong> y una atención especial a la seguridad de los datos y sistemas.
              </p>
              <div className="mt-6 flex gap-3 relative z-10">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-500">Standard NDA</span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-500">IP Protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5) EXECUTIVE MINI CV */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">
          Perfil profesional
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-1">
             <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Habilidades</h3>
             <div className="flex flex-wrap gap-2">
              <SkillTag>Estrategia Tech</SkillTag>
              <SkillTag>Fullstack Dev</SkillTag>
              <SkillTag>Cloud Arch</SkillTag>
              <SkillTag>IA y LLMs</SkillTag>
              <SkillTag>Product Mgmt</SkillTag>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Stack Tecnológico</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="font-bold text-slate-800">Core</span>
                <span className="text-slate-600">Python, TypeScript, Node.js, Next.js</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-slate-800">Data e IA</span>
                <span className="text-slate-600">OpenAI API, PyTorch, Pandas, Vector DBs</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-slate-800">Infraestructura</span>
                <span className="text-slate-600">AWS, Vercel, Docker, Supabase</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Contexto</h3>
             <ul className="space-y-4 text-sm text-slate-600">
               <li>
                 <strong className="text-slate-900 block mb-1">Idiomas</strong>
                 🇫🇷 Francés (Nativo)<br/>
                 🇬🇧 Inglés (Pro)<br/>
                 🇪🇸 Español (Intermedio)
               </li>
               <li>
                 <strong className="text-slate-900 block mb-1">Visión</strong>
                 Cerrar la brecha entre la necesidad del negocio y la realidad técnica.
               </li>
             </ul>
          </div>

        </div>
      </section>

      {/* 6) WHY MEET ME (Final CTA) */}
      <section id="contact" className="px-6 py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-slate-100 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Hablemos de tu próximo desafío
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
             Siempre estoy abierto a proyectos ambiciosos que requieran experiencia técnica y una visión estratégica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-slate-900 hover:bg-slate-800 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Iniciar una conversación
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            Respuesta en 24-48h • Confidencialidad asegurada
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t border-slate-100 text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
           <div className="text-lg font-bold text-slate-900 mb-4">Michael DIA</div>
           <p className="text-slate-500 text-sm mb-8">
             Emprendedor Tech • IA • Automatización
           </p>

           <div className="flex gap-6 mb-8 text-sm text-slate-500">
             <a href="/mentions-legales" className="hover:text-indigo-600 transition-colors">Aviso Legal</a>
             <a href="/confidentialite" className="hover:text-indigo-600 transition-colors">Política de Privacidad</a>
           </div>

           <div className="text-slate-400 text-xs">
             &copy; {new Date().getFullYear()} Michael DIA. Todos los derechos reservados.
           </div>
        </div>
      </footer>

    </div>
  );
}

// --- Helper Components ---

function ProjectCard({ 
  title, 
  subtitle, 
  description, 
  tag, 
  highlight, 
  children 
}: { 
  title: string, 
  subtitle: string, 
  description?: string, 
  tag?: string, 
  highlight?: string, 
  children: React.ReactNode 
}) {
  return (
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

      <div className="flex-grow text-slate-600 text-sm border-t border-slate-100 pt-6 group-hover:border-indigo-100 transition-colors">
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
