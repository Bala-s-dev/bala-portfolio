import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Full Stack Developer building{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI-powered
              </span>
              ,{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                real-time
              </span>
              , and{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                secure systems
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto">
              I design and engineer scalable web platforms using Next.js, React,
              Node.js, and modern AI APIs—focused on performance, security, and
              real-world impact.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all duration-200 flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 border border-gray-700 transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400">AI + Real-Time</div>
              <div className="text-gray-400 mt-2">Systems</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400">Security</div>
              <div className="text-gray-400 mt-2">Focused Engineering</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400">4+</div>
              <div className="text-gray-400 mt-2">Production Projects</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-pink-500 transition-all duration-300">
              <div className="text-3xl font-bold text-pink-400">UK Remote</div>
              <div className="text-gray-400 mt-2">Internship Experience</div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://github.com/Bala-s-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/bala-subramanian012"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:baladev2004@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
