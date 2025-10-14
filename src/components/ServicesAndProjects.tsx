'use client'
import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Server, Activity } from "lucide-react";

export default function ServicesAndProjects() {
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
      icon: <Activity className="w-8 h-8 text-purple-600" />,
      title: "Meta Pixel & Conversion API (CAPI)",
      description:
        "Browser + server-side implementation to restore match rates and improve attribution accuracy.",
    },
  ];

  const projects = [
    {
      title: "Shopify — Server-Side Meta CAPI",
      subtitle: "Shopify CAPI",
      description:
        "Fixed duplicate events, verified deduplication and improved purchase attribution accuracy.",
    },
    {
      title: "GA4 Funnels & Reporting",
      subtitle: "GA4 Funnels",
      description:
        "Custom funnel exploration and Looker Studio dashboards to find drop-offs and optimize checkout flow.",
    },
    {
      title: "GTM Server-Side Deployment",
      subtitle: "GTM Server",
      description:
        "GCP server container deployment to reduce event loss and minimize ad-blocker impacts.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12" id="Projects">
      {/* Services Section */}
      <section className="max-w-5xl mx-auto mb-20 pt-8">
        <h2 className="text-4xl font-bold mb-8 text-center">Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col items-start space-y-4">
                {service.icon}
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Recent Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <h4 className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                {project.subtitle}
              </h4>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
