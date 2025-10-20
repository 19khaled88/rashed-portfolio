'use client'
import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Server, Activity } from "lucide-react";
import Image from "next/image";

const Projects = () => {


    const projects = [
        {
            title: "Shopify — Server-Side Meta CAPI",
            subtitle: "Shopify CAPI",
            description:
                "Fixed duplicate events, verified deduplication and improved purchase attribution accuracy.",
            image: '/images/FB-CAPI.jpeg'
        },
        {
            title: "GA4 Funnels & Reporting",
            subtitle: "GA4 Funnels",
            description:
                "Custom funnel exploration and Looker Studio dashboards to find drop-offs and optimize checkout flow.",
            image: '/images/GA4 Funnels.jpeg'
        },
        {
            title: "GTM Server-Side Deployment",
            subtitle: "GTM Server",
            description:
                "GCP server container deployment to reduce event loss and minimize ad-blocker impacts.",
            image: '/images/GTM Server-Side.jpeg'
        },
    ];


    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12 flex flex-col" id="projects">

            <div className="pt-8 ">
                <h2 className="text-4xl font-bold mb-8 text-center">Recent Project</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4 text-center">My all recently done valuable projects.</p>
            </div>
            {/* Projects Section */}
            <div className="max-w-5xl mx-auto flex items-center grow">


                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 pt-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden group"
                        >
                            <h4 className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">
                                {project.subtitle}
                            </h4>

                            {/* High Quality with Custom Settings */}
                            <div className="mb-4 rounded-lg overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    height={800}  // Large source image
                                    width={1200}  // Large source image
                                    quality={100} // Maximum quality
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="w-full h-60 object-cover rounded-lg transition-transform duration-700 ease-out group-hover:scale-110"
                                    style={{
                                        
                                        imageRendering: 'crisp-edges'
                                    }}
                                />
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects