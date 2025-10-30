'use client'

import { useState } from 'react';
// components/Footer.tsx

import { FaGithub, FaLinkedin, FaRegEnvelope, FaFacebook, FaInstagram, FaGlobe, FaArrowRight } from 'react-icons/fa';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error message when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        });

        // Reset form after success
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden" id='contact'>
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-900 to-blue-900/20 opacity-50"></div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">

          {/* Brand & Contact - 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Rashedul Alam
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Analytics Strategist transforming data into actionable insights.
                Specializing in GA4, GTM implementation, and data-driven decision making
                for business growth.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <FaRegEnvelope className="text-blue-400 text-sm" />
                </div>
                <a
                  href="mailto:rashedulalam362@gmail.com"
                  className="text-gray-300 text-sm group-hover:text-white transition-colors"
                >
                  rashedulalam362@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <IoCallOutline className="text-green-400 text-sm" />
                </div>
                <span className="text-gray-300 text-sm">+880 17 1404 1300</span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <IoLocationOutline className="text-purple-400 text-sm" />
                </div>
                <span className="text-gray-300 text-sm">Chittagong, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <FaGlobe className="text-cyan-400 text-sm" />
                </div>
                <a
                  href="https://rashedulalam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm group-hover:text-white transition-colors"
                >
                  rashedulalam.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-4">
              {[
                {
                  icon: <FaGithub className="text-base" />,
                  url: 'https://github.com/rashedulalam362/',
                  color: 'hover:bg-gray-700'
                },
                {
                  icon: <FaLinkedin className="text-base" />,
                  url: 'https://www.linkedin.com/in/trackingrashed/',
                  color: 'hover:bg-blue-600'
                },
                {
                  icon: <FaFacebook className="text-base" />,
                  url: 'https://www.facebook.com/md.rashedul.alam.639050/',
                  color: 'hover:bg-blue-500'
                },
                {
                  icon: <FaInstagram className="text-base" />,
                  url: 'https://www.instagram.com/rashedulalam362/',
                  color: 'hover:bg-pink-600'
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider border-l-4 border-blue-500 pl-3">
              Navigation
            </h4>
            <div className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Demo', 'Book A Free Audit'].map((item) => (
                <a
                  key={item}
                  href={item === 'Book A Free Audit' ? 'https://calendly.com/rashedulalam362' : `#${item.toLowerCase()}`}
                  style={{
                    color: item === 'Book A Free Audit' ? 'white' : '',
                    textAlign: item === 'Book A Free Audit' ? 'center' : 'left',
                    backgroundImage: item === 'Book A Free Audit' ? 'linear-gradient(to right, #3b82f6, #1d4ed8)' : 'none'
                  }}
                  className={`block text-gray-400 hover:text-white text-sm transition-all duration-300 py-2 hover:pl-2 hover:bg-white-50 rounded `}

                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Services - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider border-l-4 border-purple-500 pl-3">
              Services
            </h4>
            <div className="space-y-3">
              {[
                'GA4 Audit & Setup',
                'GTM Implementation',
                'Data Analytics',
                'Dashboard Creation',
                'Consulting'
              ].map((service) => (
                <div key={service} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form - 4 cols */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                Start a Project
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Ready to transform your data into insights? Let&apos;s discuss your project.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Enhanced Dropdown */}
              <div className="relative">
                <select
                  name='service'
                  value={formData.service}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all appearance-none pr-12"
                >
                  <option value="">Select service</option>
                  <option value="ga4-audit">GA4 Audit & Implementation</option>
                  <option value="gtm-setup">GTM Setup</option>
                  <option value="dashboard">Analytics Dashboard</option>
                  <option value="consulting">Strategy Consulting</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <textarea
                rows={3}
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                required
              />

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm">
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                  ❌ {errorMessage || 'Failed to send message. Please try again.'}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}

                className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Typically replies within 2 hours
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="text-gray-400 text-sm">
                © {currentYear} Rashedul Alam. All rights reserved.
              </div>
              <div className="text-gray-500 text-xs mt-1">
                Crafted with precision for data-driven excellence
              </div>
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}