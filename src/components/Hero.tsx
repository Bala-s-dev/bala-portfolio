import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Cpu,
  Globe,
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black pt-16 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 text-sm font-mono animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for Senior Engineering Roles
          </div>

          <div className="space-y-6 animate-fade-up delay-100">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Forging{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-glow">
                Secure
              </span>{' '}
              <br />
              Intelligent Systems
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              I architect AI-powered platforms with a defense-in-depth approach.
              Specializing in{' '}
              <span className="text-slate-200 font-semibold">Next.js</span>,{' '}
              <span className="text-slate-200 font-semibold">
                LLM Integration
              </span>
              , and{' '}
              <span className="text-slate-200 font-semibold">
                End-to-End Encryption
              </span>
              .
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-up delay-200">
            <a
              href="#projects"
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(8,145,178,0.4)]"
            >
              View Architecture
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto animate-fade-up delay-300">
            {[
              {
                icon: ShieldCheck,
                title: 'Security First',
                desc: 'OWASP Top 10, RBAC, E2EE standards',
              },
              {
                icon: Cpu,
                title: 'AI Engineering',
                desc: 'RAG Pipelines, Agentic Workflows, Gemini/Groq',
              },
              {
                icon: Globe,
                title: 'Full-Stack Scale',
                desc: 'Next.js 14, Serverless, Real-time Socket.io',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-xl text-left border-l-4 border-l-cyan-500"
              >
                <item.icon className="text-cyan-400 mb-3" size={32} />
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-8 mt-12 opacity-70 hover:opacity-100 transition-opacity">
            <a
              href="https://github.com/Bala-s-dev"
              className="hover:text-cyan-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bala-subramanian"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
