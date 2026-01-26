import { GraduationCap, Award, FileText, Shield } from 'lucide-react';

export default function Education() {
  const certifications = [
    'Network Security',
    'Cryptography',
    'Red Hat System Administration',
    'Penetration Testing',
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Education & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 p-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
              <GraduationCap size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Bachelor of Engineering</h3>
            <div className="text-cyan-400 text-lg mb-4">Computer Science Engineering</div>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Minor in Cyber Security</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span className="font-semibold">CGPA: 8.6/10</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">▹</span>
                <span>Focus: Web Security, Network Architecture</span>
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 p-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
              <FileText size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Patent Filed</h3>
            <div className="text-purple-400 text-lg mb-4">Software Innovation (2024)</div>
            <div className="text-gray-300">
              <p className="mb-3">
                Filed patent for innovative software-based audiometry solution, demonstrating
                capability to identify and solve real-world problems through technology.
              </p>
              <p className="text-sm text-gray-400">
                Status: Patent Application Filed
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <Shield size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Security Certifications</h3>
                <p className="text-gray-400">Specialized training in cybersecurity and system administration</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-900/50 px-4 py-3 rounded-lg border border-gray-700"
                >
                  <Award size={20} className="text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
