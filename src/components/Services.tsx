'use client'
import React from "react";
import { motion, Variants } from "framer-motion";
import { BarChart3, Server, Facebook, ShoppingCart, Radar, SearchCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "GA4 Setup & Custom Tracking",
      description: "Full GA4 property config, event design, funnels, and custom reports to measure the user journey and conversions.",
    },
    {
      icon: <Server className="w-8 h-8 text-green-600" />,
      title: "GTM — Web & Server-Side",
      description: "Tag architecture, server-side tagging on GCP, deduplication and robust QA for accurate data tracking.",
    },
    {
      icon: <Facebook className="w-8 h-8 text-purple-600" />,
      title: "Meta Pixel & Conversion API (CAPI)",
      description: "Browser + server-side implementation to restore match rates and improve attribution accuracy.",
    },
    {
      icon: <Radar className="w-8 h-8 text-red-600" />,
      title: "Google Ads Conversion Tracking",
      description: "Implement enhanced conversions and value-based tracking to feed Google's AI the right data.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-orange-600" />,
      title: "Data Layer & E-commerce Tracking",
      description: "Capture full eCommerce journey (Shopify, WooCommerce) with structured, reliable data layers.",
    },
    {
      icon: <SearchCheck className="w-8 h-8 text-teal-600" />,
      title: "Tracking Audits & Troubleshooting",
      description: "Identify and fix event issues, broken data, and misattributions through complete audit and repair.",
    },
  ];

  // Animation variants with proper Framer Motion types
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
        duration: 0.8,
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { 
      scale: 0, 
      y: 20,
      rotate: -10 
    },
    visible: {
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3
      }
    }
  };

  const textVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2
      }
    }
  };

  const headerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 text-gray-900 px-6 py-12 flex flex-col" id="services">
      <motion.div 
        className="pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={headerVariants}
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Core Services
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4 text-center">
          From setup to server-side, I provide end-to-end tracking solutions designed to ensure 99%+ data accuracy and actionable insights.
        </p>
      </motion.div>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto flex items-center grow w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-12 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.3
                }
              }}
              whileTap={{ scale: 0.99 }}
              className="bg-white border border-gray-200/60 rounded-2xl p-6 shadow-lg hover:shadow-2xl relative overflow-hidden group backdrop-blur-sm transition-all duration-300 ease-out"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)'
              }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
              
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out p-px -m-px">
                <div className="w-full h-full bg-white rounded-2xl transition-all duration-500" />
              </div>

              <div className="relative z-10 flex flex-col items-start space-y-4">
                <motion.div
                  variants={iconVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    y: -2,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                      duration: 0.2
                    }
                  }}
                  className="p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300 ease-out shadow-sm group-hover:shadow-md"
                >
                  {service.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 ease-out"
                  variants={textVariants}
                  whileHover={{
                    y: -1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 ease-out"
                  variants={textVariants}
                  whileHover={{
                    y: -1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {service.description}
                </motion.p>

                {/* Animated learn more indicator */}
                <motion.div 
                  className="flex items-center gap-2 mt-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <span className="text-xs font-medium text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                    Learn more
                  </span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-blue-600 transition-colors duration-300 group-hover:text-blue-700">→</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Smooth overlay effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 rounded-2xl"
                whileHover={{
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(168, 85, 247, 0.03) 100%)",
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Services;