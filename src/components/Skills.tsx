import { Terminal, Shield, Database, Cloud } from 'lucide-react';

export default function Skills() {
  const domains = [
    {
      title: "AI & LLM Engineering",
      icon: Terminal,
      skills: ["RAG Pipelines", "Gemini API 1.5", "Groq Inference", "Vector Embeddings", "Prompt Engineering", "Agent Orchestration"],
      bg: "bg-cyan-950/30",
      border: "border-cyan-500/30"
    },
    {
      title: "Cybersecurity & Identity",
      icon: Shield,
      skills: ["OAuth 2.0 / OIDC", "RBAC Architecture", "JWT & Session Mgmt", "End-to-End Encryption (AES)", "Input Sanitization", "Helmet.js Hardening"],
      bg: "bg-emerald-950/30",
      border: "border-emerald-500/30"
    },
    {
      title: "Full Stack Architecture",
      icon: Database,
      skills: ["Next.js 14 (App Router)", "TypeScript Strict Mode", "Node.js Microservices", "PostgreSQL / Prisma", "Convex (Real-time)", "React Server Components"],
      bg: "bg-purple-950/30",
      border: "border-purple-500/30"
    },
    {
      title: "DevOps & Infrastructure",
      icon: Cloud,
      skills: ["Docker Containers", "AWS (EC2/S3)", "Vercel Edge Functions", "CI/CD Pipelines", "Redis Caching", "Linux Administration"],
      bg: "bg-blue-950/30",
      border: "border-blue-500/30"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {domains.map((domain, idx) => (
            <div key={idx} className={`rounded-2xl p-8 border ${domain.border} ${domain.bg} backdrop-blur-sm transition-transform hover:-translate-y-1`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
                  <domain.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{domain.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {domain.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1.5 bg-slate-900/80 border border-slate-700 text-slate-300 rounded-md text-sm font-mono hover:text-cyan-400 hover:border-cyan-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}