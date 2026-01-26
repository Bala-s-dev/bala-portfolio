import { Shield, Zap, Brain, Code2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Expertise',
      description: 'MERN stack, Next.js, and Node.js for end-to-end development',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Gemini, Groq, and Voice AI implementation in production apps',
    },
    {
      icon: Zap,
      title: 'Real-Time Systems',
      description: 'WebSocket architecture for live collaboration and messaging',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'RBAC, E2EE, authentication hardening, and secure API design',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Trust Me With Your Product?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            I'm a <span className="text-cyan-400 font-semibold">Full Stack Developer</span> with
            deep experience in building scalable, secure, and intelligent web applications. My work
            combines modern frameworks with production-grade engineering practices.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            With a <span className="text-blue-400 font-semibold">Cybersecurity background</span> and
            real-world experience at a UK-based company, I understand how to architect systems that
            don't just work—they scale securely and perform reliably under real-world conditions.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            I hold a <span className="text-purple-400 font-semibold">patent</span> in software
            innovation and have built systems handling everything from AI-powered education platforms
            to encrypted real-time messaging—always with a focus on security, performance, and user
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-lg">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
