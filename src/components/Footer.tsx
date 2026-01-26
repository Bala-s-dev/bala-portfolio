import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              Built with <Heart size={16} className="text-red-500" /> by Bala Subramanian
            </p>
            <p className="text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#about"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
