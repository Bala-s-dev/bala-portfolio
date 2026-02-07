import {  Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Professional History
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
          <div className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>

            <div className="glass-card p-8 rounded-xl border-l-4 border-l-cyan-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Full Stack Developer Intern
                  </h3>
                  <p className="text-cyan-400 text-lg font-medium">
                    Ernestwell
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-slate-400 text-sm justify-end">
                    <Calendar size={14} /> Nov 2024 - Feb 2025
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm justify-end mt-1">
                    <MapPin size={14} /> UK Remote
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  Engineered the core architecture for "Unibritend," a
                  study-abroad aggregator platform serving 400+ institutions.
                  Focused on data security, scalable data fetching, and
                  automated user support.
                </p>

                <ul className="space-y-3 mt-4">
                  {[
                    'Architected a secure Admin Portal using Firebase Auth & Firestore, implementing strict RBAC policies for institutional data access.',
                    'Optimized frontend performance for large datasets (400+ colleges) using dynamic filtering and virtualization in React/Vite.',
                    'Developed an automated FAQ Chatbot utilizing NLP principles, reducing manual support ticket volume by ~30%.',
                    'Integrated secure file handling and phone validation pipelines for student application forms.',
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-400"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-cyan-500 mt-1 shrink-0"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
