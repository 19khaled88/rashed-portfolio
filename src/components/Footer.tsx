// components/Footer.tsx
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaRegEnvelope } from 'react-icons/fa';
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Portfolio Summary */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Rashedul Alam
            </h3>
            <p className="text-gray-400 mb-6">
              A passionate [your role] creating digital experiences that matter. 
              Let &apos; s build something amazing together.
            </p>
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg transition-all duration-300">
              <FaFileDownload /> Download Resume
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IoCallOutline className="text-blue-400 mt-1" />
                <span className="text-gray-400">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-start gap-3">
                <FaRegEnvelope className="text-blue-400 mt-1" />
                <a href="mailto:hello@example.com" className="text-gray-400 hover:text-white">
                  hello@example.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IoLocationOutline className="text-blue-400 mt-1" />
                <span className="text-gray-400">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            {[
              { icon: <FaGithub />, url: 'https://github.com' },
              { icon: <FaLinkedin />, url: 'https://linkedin.com' },
              { icon: <FaTwitter />, url: 'https://twitter.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl transition-colors duration-300 hover:scale-110"
                aria-label={`${social.url.split('.com')[0]} profile`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © {currentYear} Your Name. All rights reserved. | 
            <a href="/privacy" className="hover:text-gray-300 ml-2">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}