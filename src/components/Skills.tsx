export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
      color: 'cyan',
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'Shadcn UI'],
      color: 'blue',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Prisma', 'Convex', 'Socket.io'],
      color: 'purple',
    },
    {
      title: 'Cloud & Database',
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'AWS', 'Vercel'],
      color: 'pink',
    },
    {
      title: 'AI & Integration',
      skills: ['Gemini API', 'Groq', 'Voice AI', 'REST APIs', 'OAuth'],
      color: 'indigo',
    },
    {
      title: 'Core Strengths',
      skills: [
        'Real-Time Systems',
        'Web Security',
        'End-to-End Encryption',
        'RBAC',
        'Performance Optimization',
      ],
      color: 'emerald',
    },
  ];

  const colorClasses: Record<string, { border: string; text: string; hover: string }> = {
    cyan: {
      border: 'border-cyan-500/30',
      text: 'text-cyan-400',
      hover: 'hover:border-cyan-500',
    },
    blue: {
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      hover: 'hover:border-blue-500',
    },
    purple: {
      border: 'border-purple-500/30',
      text: 'text-purple-400',
      hover: 'hover:border-purple-500',
    },
    pink: {
      border: 'border-pink-500/30',
      text: 'text-pink-400',
      hover: 'hover:border-pink-500',
    },
    indigo: {
      border: 'border-indigo-500/30',
      text: 'text-indigo-400',
      hover: 'hover:border-indigo-500',
    },
    emerald: {
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      hover: 'hover:border-emerald-500',
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            System Capabilities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technical stack and engineering competencies for building production-grade systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color];
            return (
              <div
                key={index}
                className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border ${colors.border} ${colors.hover} transition-all duration-300`}
              >
                <h3 className={`text-2xl font-bold ${colors.text} mb-6`}>
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-gray-300 bg-gray-800/50 px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
