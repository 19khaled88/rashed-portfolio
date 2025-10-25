'use client'
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ExternalLink, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Projects = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const projects = [
        {
            title: "Shopify — Server-Side Meta CAPI",
            subtitle: "Shopify CAPI",
            description: "Fixed duplicate events, verified deduplication and improved purchase attribution accuracy.",
            images: ['/images/FB-CAPI.jpeg'] // Single image
        },
        {
            title: "GA4 Funnels & Reporting",
            subtitle: "GA4 Funnels",
            description: "Custom funnel exploration and Looker Studio dashboards to find drop-offs and optimize checkout flow.",
            images: [ // Multiple images
                '/images/GA4 reports_Page_1.jpg',
                '/images/GA4 reports_Page_2.jpg'
                
            ]
        },
        {
            title: "Google Ads Conversion Tracking",
            subtitle: "G-Ads Conversion",
            description: "Implement enhanced conversions and value-based tracking to feed Google's AI the right data.",
            images: [ // Multiple images
                '/images/gads Conversions_Page_1.jpg',
                
            ]
        },
    ];

    const openModal = (projectIndex: number, imageIndex: number = 0) => {
        setSelectedImageIndex(projectIndex);
        setCurrentImageIndex(imageIndex);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        const currentProject = projects[selectedImageIndex!];
        setCurrentImageIndex((prev) => 
            prev === currentProject.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        const currentProject = projects[selectedImageIndex!];
        setCurrentImageIndex((prev) => 
            prev === 0 ? currentProject.images.length - 1 : prev - 1
        );
    };

    // Animation variants
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
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 18,
                duration: 0.8,
            }
        }
    };

    const imageContainerVariants: Variants = {
        hidden: { 
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
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

    // Modal variants with proper typing
    const modalVariants: Variants = {
        hidden: { 
            opacity: 0, 
            scale: 0.8 
        },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const backdropVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 text-gray-900 px-6 py-12 flex flex-col" id="projects">
                {/* Header Section */}
                <motion.div 
                    className="pt-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-50px" }}
                    variants={headerVariants}
                >
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Recent Projects
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4 text-center">
                        My all recently done valuable projects.
                    </p>
                </motion.div>

                {/* Projects Section */}
                <div className="max-w-7xl mx-auto flex items-center grow w-full">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pt-12 w-full"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-100px" }}
                    >
                        {projects.map((project, projectIndex) => (
                            <motion.div
                                key={projectIndex}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                        duration: 0.3
                                    }
                                }}
                                whileTap={{ y: -2 }}
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

                                <div className="relative z-10 flex flex-col space-y-4">
                                    {/* Subtitle */}
                                    <motion.h4 
                                        className="text-blue-600 font-semibold text-sm uppercase tracking-wide"
                                        variants={textVariants}
                                        whileHover={{
                                            y: -1,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {project.subtitle}
                                    </motion.h4>

                                    {/* Stylish Small Image Container */}
                                    <motion.div 
                                        className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300/30 shadow-inner"
                                        variants={imageContainerVariants}
                                    >
                                        {/* Small preview image */}
                                        <div 
                                            className="relative rounded-xl overflow-hidden border-2 border-white shadow-lg group/image hover:cursor-pointer"
                                            onClick={() => openModal(projectIndex, 0)}
                                        >
                                            <Image
                                                src={project.images[0]}
                                                alt={project.title}
                                                height={400}
                                                width={600}
                                                quality={90}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="w-full h-32 object-cover"
                                                style={{
                                                    imageRendering: 'crisp-edges'
                                                }}
                                            />
                                            
                                            {/* Dark overlay on image hover */}
                                            <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-all duration-500 ease-out rounded-xl" />
                                            
                                            {/* Image count badge for multiple images */}
                                            {project.images.length > 1 && (
                                                <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                                                    +{project.images.length - 1}
                                                </div>
                                            )}
                                            
                                            {/* Zoom icon indicator */}
                                            <motion.div 
                                                className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-lg opacity-0 group-hover/image:opacity-100 transition-all duration-300"
                                                initial={{ scale: 0 }}
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <ZoomIn className="w-3 h-3 text-gray-700" />
                                            </motion.div>
                                        </div>

                                      
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3 
                                        className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 ease-out"
                                        variants={textVariants}
                                        whileHover={{
                                            y: -1,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {project.title}
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p 
                                        className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 ease-out"
                                        variants={textVariants}
                                        whileHover={{
                                            y: -1,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {project.description}
                                    </motion.p>

                                    {/* Project Link Indicator */}
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
                                            View case study
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
                                            <ExternalLink className="w-4 h-4 text-blue-600 transition-colors duration-300 group-hover:text-blue-700" />
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
                </div>
            </div>

            {/* Image Modal */}
            {selectedImageIndex !== null && (
                <motion.div
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    initial="hidden"
                    animate="visible"
                    variants={backdropVariants}
                    onClick={closeModal}
                >
                    <motion.div
                        className="relative max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
                        variants={modalVariants}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Navigation arrows for multiple images */}
                        {projects[selectedImageIndex].images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </>
                        )}

                        {/* Image counter */}
                        {projects[selectedImageIndex].images.length > 1 && (
                            <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                {currentImageIndex + 1} / {projects[selectedImageIndex].images.length}
                            </div>
                        )}

                        {/* Modal content */}
                        <div className="relative w-full h-full">
                            <Image
                                src={projects[selectedImageIndex].images[currentImageIndex]}
                                alt={projects[selectedImageIndex].title}
                                width={1200}
                                height={800}
                                quality={100}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                            
                            {/* Project info at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                <h3 className="text-xl font-semibold mb-2">
                                    {projects[selectedImageIndex].title}
                                </h3>
                                <p className="text-sm opacity-90">
                                    {projects[selectedImageIndex].description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}

export default Projects;