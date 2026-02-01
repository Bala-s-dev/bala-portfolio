import { Mail, Github, Linkedin, Send, ExternalLink, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  // States for handling submission lifecycle
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      // Replace these strings with your actual EmailJS credentials
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Bala', 
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      // Auto-hide status messages after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's Build Something Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Currently open to remote Full-Stack roles and high-impact collaborations.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're looking to hire a developer for your team, have a technical challenge 
                to discuss, or just want to talk about AI and security—my inbox is always open.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:baladev2004@gmail.com"
                className="flex items-center gap-4 p-5 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-400 font-mono">EMAIL</div>
                  <div className="text-white font-semibold">baladev2004@gmail.com</div>
                </div>
                <ExternalLink size={18} className="text-gray-600 group-hover:text-cyan-400" />
              </a>

              <a
                href="https://github.com/Bala-s-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Github size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-400 font-mono">GITHUB</div>
                  <div className="text-white font-semibold">@Bala-s-dev</div>
                </div>
                <ExternalLink size={18} className="text-gray-600 group-hover:text-purple-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/bala-subramanian012/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Linkedin size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-400 font-mono">LINKEDIN</div>
                  <div className="text-white font-semibold">Bala Subramanian</div>
                </div>
                <ExternalLink size={18} className="text-gray-600 group-hover:text-blue-400" />
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 font-mono uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 font-mono uppercase tracking-wider">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 font-mono uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                  placeholder="Tell me about your project or role..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg transition-all flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-sm shadow-lg shadow-cyan-500/20 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-cyan-600 hover:to-blue-700 active:scale-95'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Dispatching...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>

              {/* Status Notifications */}
              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center text-sm font-medium animate-fade-in">
                  ✓ Message sent! I'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center text-sm font-medium animate-fade-in">
                  ✕ Failed to send. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}