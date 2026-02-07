import { Github, ExternalLink, ShieldCheck, Cpu, Lock } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'SecureChat: Zero-Knowledge Messaging',
      role: 'Lead Architect',
      description:
        'A military-grade real-time messaging platform prioritizing absolute data privacy through client-side encryption.',
      problem:
        'Standard messaging apps often encrypt data only in transit, leaving it vulnerable at rest on servers.',
      solution:
        'Implemented true End-to-End Encryption (E2EE) using AES-256. Keys are generated on the client and never leave the browser.',
      security: [
        'Client-side AES-256 Encryption',
        'Diffie-Hellman Key Exchange simulation',
        'NoSQL Injection prevention',
        'Rate-limited API',
      ],
      stack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Web Crypto API'],
      github: 'https://github.com/Bala-s-dev/balachat',
      demo: 'https://balachat.vercel.app/',
      tags: ['Security', 'Real-time'],
    },
    {
      title: 'Smart Exam AI Platform',
      role: 'Full Stack Engineer',
      description:
        'An autonomous educational assessment engine utilizing LLMs to generate and grade complex examinations.',
      problem:
        'Manual exam creation is time-consuming and static, lacking personalization for student skill gaps.',
      solution:
        'Integrated Gemini 1.5 Flash to generate dynamic questions based on context. Built an analytics engine to predict student performance scores.',
      security: [
        'Role-Based Access Control (RBAC)',
        'Proctoring logic',
        'Secure Server-side grading',
      ],
      stack: ['Next.js 14', 'TypeScript', 'Prisma', 'Gemini AI', 'PostgreSQL'],
      github: 'https://github.com/Bala-s-dev/ai-career-coach',
      demo: 'https://smart-exam-platform.vercel.app/',
      tags: ['AI', 'EdTech'],
    },
    {
      title: 'AI Voice Fitness Coach',
      role: 'Full Stack Developer',
      description:
        'A hands-free, voice-controlled workout assistant that functions as a real-time personal trainer.',
      problem:
        'Fitness apps require screen interaction which breaks workout flow and focus.',
      solution:
        'Engineered a voice-first interface using Vapi.ai and Groq for sub-500ms latency responses during active workouts.',
      security: [
        'Secure Audio Stream handling',
        'User Session protection via Clerk',
        'Data minimization',
      ],
      stack: ['Next.js', 'Convex DB', 'Groq API', 'Vapi.ai', 'Clerk Auth'],
      github:
        'https://github.com/Bala-s-dev/AI-Fitness_VoiceCall-Assistant-and-Scheduler',
      demo: 'https://aifitenessassistantbalasdev.vercel.app/',
      tags: ['Voice AI', 'Serverless'],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Engineering Highlights
            </h2>
            <p className="text-slate-400 max-w-xl">
              Selected projects demonstrating secure system design and AI
              implementation.
            </p>
          </div>
          <a
            href="https://github.com/Bala-s-dev"
            target="_blank"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            View full portfolio on GitHub <ExternalLink size={16} />
          </a>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Content Side */}
                <div className="lg:col-span-8 p-8 md:p-10 space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono py-1 px-2 rounded bg-cyan-950 text-cyan-400 border border-cyan-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300">
                    <div className="space-y-2">
                      <p className="text-slate-500 font-semibold uppercase tracking-wider text-xs">
                        The Challenge
                      </p>
                      <p>{project.problem}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-emerald-500 font-semibold uppercase tracking-wider text-xs">
                        The Engineering
                      </p>
                      <p>{project.solution}</p>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800">
                    <div className="flex items-center gap-2 mb-3 text-cyan-400 font-semibold text-sm">
                      <ShieldCheck size={16} /> Security Architecture
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.security.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <Lock size={12} className="mt-1 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-slate-500 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-medium"
                    >
                      <Github size={18} /> Source Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-medium"
                    >
                      <ExternalLink size={18} /> Live Deployment
                    </a>
                  </div>
                </div>

                {/* Decorative Side (Desktop) */}
                <div className="hidden lg:block lg:col-span-4 bg-gradient-to-br from-slate-900 to-cyan-950/20 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 p-10 opacity-10">
                    <Cpu size={200} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
