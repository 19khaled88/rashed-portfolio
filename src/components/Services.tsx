'use client'
import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Server, Activity, Facebook,ShoppingCart,Radar,SearchCheck } from "lucide-react";

const Services = () => {
  const services = [
      {
        icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
        title: "GA4 Setup & Custom Tracking",
        description:
          "Full GA4 property config, event design, funnels, and custom reports to measure the user journey and conversions.",
      },
      {
        icon: <Server className="w-8 h-8 text-green-600" />,
        title: "GTM — Web & Server-Side",
        description:
          "Tag architecture, server-side tagging on GCP, deduplication and robust QA for accurate data tracking.",
      },
      {
        icon: <Facebook className="w-8 h-8 text-purple-600" />,
        title: "Meta Pixel & Conversion API (CAPI)",
        description:
          "Browser + server-side implementation to restore match rates and improve attribution accuracy.",
      },
      {
        icon: <Radar className="w-8 h-8 text-purple-600" />,
        title: "Google Ads Conversion Tracking",
        description:
          "Implement enhanced conversions and value-based tracking to feed Google’s AI the right data.",
      },
      {
        icon: <ShoppingCart className="w-8 h-8 text-purple-600" />,
        title: "Data Layer & E-commerce Tracking",
        description:
          "Capture full eCommerce journey (Shopify, WooCommerce) with structured, reliable data layers.",
      },
      {
        icon: <SearchCheck className="w-8 h-8 text-purple-600" />,
        title: "Tracking Audits & Troubleshooting",
        description:
          "Identify and fix event issues, broken data, and misattributions through complete audit and repair.",
      },
    ];
  
    
  
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12 flex flex-col" id="services">
        <div className="pt-8">
            <h2 className="text-4xl font-bold mb-8 text-center">My Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4 text-center">From setup to server-side, I provide end-to-end tracking solutions designed to ensure 99%+ data accuracy and actionable insights.</p>
          </div>
        {/* Services Section */}
        <section className="max-w-5xl mx-auto flex items-center grow">
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 pt-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="md:block lg:block lg:col-span-1 col-span-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <div className="flex flex-col items-start space-y-4">
                  {service.icon}
                  <h3 className="text-2xl font-semibold text-gray-600">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    );
}

export default Services