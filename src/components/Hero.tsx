'use client'
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../components/Hero.module.css';
import { FaMobileAlt, FaRegFileAlt } from 'react-icons/fa';

const Hero = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (navRef.current && heroRef.current) {
      const navHeight = navRef.current.offsetHeight;
      heroRef.current.style.minHeight = `calc(100vh - ${navHeight}px)`;
    }
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-neutral-50 flex items-center" id='hero'>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I&apos;m <span className="text-indigo-600">Rashedul Alam</span>
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            I help brands <span className="font-semibold text-gray-800">bridge marketing and technology</span>
            with <span className="text-indigo-600 font-semibold">GA4, Tag Manager, and Server-Side Tracking</span>
            to unlock <span className="font-semibold text-gray-800">reliable data & growth</span>.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <button className="flex flex-row items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition cursor-pointer" id='resume'>
              <FaRegFileAlt />  View Resume
            </button>
            <a href="#contact" className="flex flex-row items-center gap-2 px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg text-sm hover:bg-indigo-50 transition">
              <FaMobileAlt /> Contact Me
            </a>
          </div>
        </div>

        {/* Right Floating Image */}
        <div className="flex-1 relative h-64">
          {!imageLoaded && (
            <div className="w-full max-w-sm mx-auto h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl overflow-hidden relative">
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>

              {/* Skeleton content */}
              <div className="h-full flex flex-col justify-center items-center space-y-4">
                <div className="w-24 h-24 bg-gray-400 rounded-full animate-pulse"></div>
                <div className="w-32 h-4 bg-gray-400 rounded animate-pulse"></div>
                <div className="w-24 h-3 bg-gray-400 rounded animate-pulse"></div>
              </div>
            </div>
          )}
          <Image
            src="/images/hero-image.jpg"
            alt="Rashedul Alam"
            className={`${styles.animate_float} w-full max-w-sm mx-auto rounded-xl shadow-xl ${imageLoaded ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-300`}
            width={300}
            height={100}
            onLoad={handleImageLoad}
            priority // Add this for above-the-fold images
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;