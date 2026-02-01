import { ExternalLink, Github, Brain, Lock, Dumbbell, Briefcase, Workflow } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: Brain,
      title: 'Smart Exam Platform',
      category: 'AI EdTech',
      problem: 'Educational institutions need scalable, intelligent assessment tools that adapt to student performance and reduce manual grading overhead.',
      solution: 'AI-powered exam platform with automated MCQ generation, predictive analytics, and secure role-based access control.',
      impact: 'Enables educators to create personalized assessments in minutes, with real-time performance insights and secure student data management.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Gemini API', 'RBAC'],
      highlights: [
        'AI MCQ generation via Gemini API',
        'Predictive analytics on student performance',
        'Secure RBAC with role-specific dashboards',
        'Automated grading logic with detailed feedback',
      ],
      github: '#',
      demo: '#',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Lock,
      title: 'SecureChat',
      category: 'E2EE Messaging',
      problem: 'Privacy concerns in messaging apps require end-to-end encryption that works in real-time without compromising user experience.',
      solution: 'Real-time encrypted messaging platform with client-side AES-256 encryption, secure WebSocket architecture, and hardened authentication.',
      impact: 'Engineered a zero-knowledge messaging architecture using client-side AES-256 encryption. Successfully prevented data-at-rest vulnerabilities, ensuring 100% user privacy.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AES-256', 'JWT'],
      highlights: [
        'Client-side AES-256 encryption',
        'Real-time Socket.io architecture',
        'JWT rotation and bcrypt hashing',
        'Input sanitization and SQL injection prevention',
      ],
      github: '#',
      demo: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Dumbbell,
      title: 'AI Voice Fitness Coach',
      category: 'Voice AI & Health',
      problem: 'Fitness enthusiasts need personalized workout guidance that adapts to their goals, schedule, and fitness level in real-time.',
      solution: 'Voice-interactive AI coach that generates structured workout plans, provides real-time feedback, and tracks progress.',
      impact: 'Delivers personalized fitness coaching accessible through natural voice interaction, making expert guidance available 24/7.',
      tech: ['React', 'Convex', 'Groq API', 'Voice AI', 'Serverless'],
      highlights: [
        'Real-time voice AI interaction',
        'Structured AI-generated workout plans',
        'Serverless Convex architecture',
        'Adaptive fitness recommendations',
      ],
      github: '#',
      demo: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Briefcase,
      title: 'AI Career Coach',
      category: 'Career Development',
      problem: 'Job seekers struggle with resume optimization and interview preparation, lacking personalized feedback on their unique strengths.',
      solution: 'AI-powered career coaching platform with resume analysis, mock interviews, and personalized career guidance.',
      impact: 'Developed an automated resume analyzer using the Gemini API, providing 95% accuracy in skill-gap identification compared to manual reviews and Helps the candidates to improve resume quality and interview skills through AI-driven insights and practice sessions.',
      tech: ['React', 'Express', 'MongoDB', 'Gemini API', 'OAuth'],
      highlights: [
        'Resume analysis with AI feedback',
        'Mock interview simulation',
        'Job Recommendation using JSearch API',
        'Secured Express backend with validation',
      ],
      github: '#',
      demo: '#',
      color: 'from-pink-500 to-purple-500',
    },
    
    {
    icon: Workflow,
    title: 'Node-Based Pipeline Editor',
    category: 'AI Automation',
    problem: 'Traditional node-based editors often suffer from redundant code for node types and lack dynamic interaction, making maintenance difficult as complexity grows.',
    solution: 'Engineered a modular node abstraction layer in React and integrated a FastAPI backend to perform topological analysis and pipeline validation.',
    impact: 'Streamlined node development through a reusable abstraction, implemented dynamic handle generation via regex, and provided real-time DAG validation for workflow integrity.',
    tech: ['React', 'FastAPI', 'React Flow', 'Zustand', 'Python', 'Kahn\'s Algorithm'],
    highlights: [
      'Modular BaseNode abstraction for rapid scaling',
      'Dynamic variable handle generation ({{var}} logic)',
      'Real-time DAG validation using Kahn’s Algorithm',
      'Scalable state management for complex workflows',
    ],
    github: 'https://github.com/Bala-s-dev/frontend-assessment',
    demo: '#', // Replace with your deployment link
    color: 'from-indigo-500 to-purple-600',
  },


  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Engineering Case Studies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Production-grade systems solving real-world problems with AI, security, and scalability
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-2">{project.category}</div>
                      <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-700/50 text-cyan-400 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Problem</h4>
                      <p className="text-gray-300">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">Solution</h4>
                      <p className="text-gray-300">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Impact</h4>
                      <p className="text-gray-300">{project.impact}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pink-400 mb-3">
                        Technical Highlights
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <span className="text-cyan-400 mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <Github size={20} />
                      Source Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
