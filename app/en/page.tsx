import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Global Presentation - Michael DIA',
  description: 'Tech Entrepreneur, AI & Automation.',
};

export default function PresentationPageEn() {
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
              <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#expertise" className="hover:text-indigo-600 transition-colors">Expertise</a>
              <a href="/contact" className="hover:text-indigo-600 transition-colors">Contact</a>
            </nav>
            <div className="flex gap-2 text-sm font-medium">
              <a href="/" className="text-slate-400 hover:text-indigo-600 transition-colors">FR</a>
              <span className="text-slate-300">|</span>
              <a href="/en" className="text-indigo-600 font-bold pb-1 link-underline">EN</a>
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
          <span className="text-sm font-medium text-slate-600 tracking-wide">Available for new projects</span>
        </div>
        
        <h1 className="max-w-4xl mx-auto text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">AI & Automation</span> Entrepreneur
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          I build robust SaaS architectures and AI solutions focused on operational performance and financial efficiency.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
          <a 
            href="/api/profile-pdf" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Download Profile
          </a>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-indigo-200 hover:text-indigo-600 transition-all duration-200"
          >
            Contact me
          </a>
        </div>
      </section>

      {/* 2) WHO I AM */}
      <section className="px-6 py-24 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
               <h2 className="text-3xl font-bold text-slate-900 sticky top-24 z-10">
                Who I am
                <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-emerald-500 mt-4 rounded-full"></div>
              </h2>
              <div className="mt-8 relative w-64 h-64 lg:w-full lg:h-auto aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 sticky top-48">
                <Image 
                  src="https://nbaiw6gccbuytvgc.public.blob.vercel-storage.com/mike%20corporate.png"
                  alt="Michael DIA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
            
            <div className="lg:col-span-8 space-y-8">
              <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed p-8 rounded-2xl bg-slate-50/50 border border-slate-100">
                <p className="mb-6">
                  <strong className="text-slate-900 font-semibold">Michael DIA</strong> — Tech Entrepreneur & AI Consultant.
                </p>
                <p>
                  Passionate about operational efficiency and cutting-edge technologies, I don't just code: I build systems. I design and deploy intelligent solutions that transform technical complexity into a tangible competitive advantage.
                </p>
                <p className="mt-4">
                  My approach is resolutely pragmatic. Technology is not an end in itself, but a lever to serve a clear business strategy. I prioritize robustness, security, and long-term maintainability.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Badge icon="📍">France</Badge>
                <Badge icon="🏝️">Canary Islands</Badge>
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
              My Projects
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              A portfolio focused on automation, finance, and artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* A) NexoAI */}
            <ProjectCard 
              title="NexoAI"
              subtitle="AI Automation Agency"
              tag="B2B / SaaS"
              description="Streamlining business operations through custom intelligent agents."
            >
              <ul className="space-y-3 mt-4">
                <ListItem>Self-managed AI business agents</ListItem>
                <ListItem>Complex workflow automation</ListItem>
                <ListItem>API & Legacy integration</ListItem>
              </ul>
            </ProjectCard>

            {/* B) AlgoNovaAI */}
            <ProjectCard 
              title="AlgoNovaAI"
              subtitle="AI Applied to Trading"
              tag="FinTech / Research"
              description="Quantitative research and decision support for financial markets."
              highlight="Research & Responsibility"
            >
              <ul className="space-y-3 mt-4">
                <ListItem>Real-time data analysis</ListItem>
                <ListItem>Predictive models & decision support</ListItem>
                <ListItem>Strict risk control approach</ListItem>
              </ul>
            </ProjectCard>

            {/* C) AlgoNovaEdge */}
            <ProjectCard 
              title="AlgoNovaEdge"
              subtitle="Infrastructure for Traders"
              tag="SaaS / Infra"
              description="Technical platform ensuring execution and security of trading operations."
              highlight="Critical Reliability"
            >
              <ul className="space-y-3 mt-4">
                <ListItem>Low-latency connections (Tradovate)</ListItem>
                <ListItem>Centralized risk management</ListItem>
                <ListItem>Secure TradingView webhooks</ListItem>
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
                What I do concretely
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Beyond code, I bring a complete architectural vision. I design systems capable of scaling without sacrificing security.
              </p>
              <div className="inline-block p-6 bg-slate-800/80 rounded-2xl border border-slate-700 backdrop-blur-sm shadow-xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <p className="text-emerald-400 font-medium mb-2 relative z-10">Quality Focus</p>
                 <p className="text-slate-300 text-sm relative z-10">
                   "No disposable code. I build to last."
                 </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <CheckItem text="Scalable SaaS Architecture" subtext="Multi-tenant, Auth, Database design" />
              <CheckItem text="Complex API Integration" subtext="Stripe, OpenAI, Brokers, CRMs" />
              <CheckItem text="Automation & AI" subtext="RAG, Agents, Data Pipelines" />
              <CheckItem text="Security & Encryption" subtext="Sensitive data protection" />
              <CheckItem text="Rapid Development (MVP)" subtext="Optimized Time-to-market" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Collaboration */}
      <section className="px-6 py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              How I collaborate
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              My collaborations are based on execution clarity and lasting value creation. I integrate where the technical need is critical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CollaborationCard 
              title="Strategic Consulting"
              items={[
                "Product & Tech Scoping",
                "Architecture Choices",
                "CTO Roadmap"
              ]} 
            />
            <CollaborationCard 
              title="Development & PoC"
              items={[
                "Rapid MVP Creation",
                "AI Implementation",
                "Long-term Partnerships"
              ]} 
            />
            <CollaborationCard 
              title="Interventions"
              items={[
                "Code & Infra Audit",
                "Performance Optimization",
                "Process Automation"
              ]} 
            />
          </div>
        </div>
      </section>

      {/* SECTION: Use Cases */}
      <section className="px-6 py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
           <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
             Concrete Use Cases
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <UseCaseCard 
               title="Trading SaaS"
               desc="Implementation of a platform with secure broker connections and real-time risk management."
             />
             <UseCaseCard 
               title="Business Automation"
               desc="Complete automation of processes (data, support, reporting) for immediate operational gains."
             />
             <UseCaseCard 
               title="Integrated AI Agents"
               desc="Deployment of contextual AI agents connected to existing tools for decision support."
             />
           </div>
        </div>
      </section>

      {/* SECTION: Work Style & Trust */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              My Work Style
            </h2>
            <ul className="space-y-6">
              <WorkStyleItem 
                title="Clarity before speed" 
                text="No useless technical debt. Every line of code has a reason to exist." 
              />
              <WorkStyleItem 
                title="Security by default" 
                text="Risk identification and compliance from the design phase." 
              />
              <WorkStyleItem 
                title="Value-oriented MVP" 
                text="We don't develop just to develop, but to validate and serve the business." 
              />
              <WorkStyleItem 
                title="Long-term Vision" 
                text="Maintainable, documented, and transferable solutions." 
              />
            </ul>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
               {/* Decoration */}
               <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-emerald-100 rounded-full opacity-50 blur-2xl"></div>
               
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center relative z-10">
                <span className="text-2xl mr-3">🛡️</span> Trust & Confidentiality
              </h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                Projects are treated with a <strong>high level of confidentiality</strong> and special attention to data and system security.
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
          Professional Profile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-1">
             <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Skills</h3>
             <div className="flex flex-wrap gap-2">
              <SkillTag>Tech Strategy</SkillTag>
              <SkillTag>Fullstack Dev</SkillTag>
              <SkillTag>Cloud Arch</SkillTag>
              <SkillTag>AI & LLMs</SkillTag>
              <SkillTag>Product Mgmt</SkillTag>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Tech Stack</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="font-bold text-slate-800">Core</span>
                <span className="text-slate-600">Python, TypeScript, Node.js, Next.js</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-slate-800">Data & AI</span>
                <span className="text-slate-600">OpenAI API, PyTorch, Pandas, Vector DBs</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-slate-800">Infrastructure</span>
                <span className="text-slate-600">AWS, Vercel, Docker, Supabase</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">Context</h3>
             <ul className="space-y-4 text-sm text-slate-600">
               <li>
                 <strong className="text-slate-900 block mb-1">Languages</strong>
                 🇫🇷 French (Native)<br/>
                 🇬🇧 English (Pro)<br/>
                 🇪🇸 Spanish (Intermediate)
               </li>
               <li>
                 <strong className="text-slate-900 block mb-1">Vision</strong>
                 Bridging the gap between business needs and technical reality.
               </li>
             </ul>
          </div>

        </div>
      </section>

      {/* 6) WHY MEET ME (Final CTA) */}
      <section id="contact" className="px-6 py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-slate-100 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Let's discuss your next challenge
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            I am always open to ambitious projects requiring sharp technical expertise and strategic vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-slate-900 hover:bg-slate-800 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start a conversation
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            Response within 24-48h • Confidentiality assured
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t border-slate-100 text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
           <div className="text-lg font-bold text-slate-900 mb-4">Michael DIA</div>
           <p className="text-slate-500 text-sm mb-8">
             Tech Entrepreneur • AI • Automation
           </p>
           
           <div className="flex gap-6 mb-8 text-sm text-slate-500">
             <a href="/mentions-legales" className="hover:text-indigo-600 transition-colors">Legal Notice</a>
             <a href="/confidentialite" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
           </div>

           <div className="text-slate-400 text-xs">
             &copy; {new Date().getFullYear()} Michael DIA. All rights reserved.
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
