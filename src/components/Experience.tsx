import { Building2, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world production experience building systems for global institutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <Building2 size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Full Stack Developer Intern
                </h3>
                <div className="text-xl text-cyan-400 mb-4">Ernestwell</div>
                <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>United Kingdom (Remote)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">
                  Key Achievements
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Architected a Multi-tenant EdTech platform (Unibritend)</span> serving 400+ institutions across 7+ countries. Implemented RBAC and Firebase Auth, improving system security and reducing onboarding friction for thousands of users.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Engineered admin portal</span> with
                      Firebase Authentication, enabling secure institution management and user provisioning
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Built intelligent chatbot</span> reducing
                      customer support load by 30% through automated query resolution and contextual
                      responses
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Implemented validated forms</span> with
                      comprehensive error handling, ensuring data integrity and exceptional user experience
                      across devices
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React',
                    'Node.js',
                    'Firebase',
                    'REST APIs',
                    'Multi-tenant Architecture',
                    'RBAC',
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
