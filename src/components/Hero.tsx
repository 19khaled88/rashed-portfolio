'use client'
import React, { useRef, useEffect } from 'react';

import Image from 'next/image';
import styles from '../components/Hero.module.css';

const Hero = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    
    if (navRef.current && heroRef.current) {
      const navHeight = navRef.current.offsetHeight;
      heroRef.current.style.minHeight = `calc(100vh - ${navHeight}px)`;
    }
  }, []);

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-gray-200 flex items-center  px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I&apos;m <span className="text-indigo-600">Rashedul Alam</span>
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            A passionate <span className="font-semibold text-gray-800">Digital Marketing Strategist</span> focused on driving measurable online growth.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition cursor-pointer" >
              View Projects
            </button>
            <a href="#contact" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg text-sm hover:bg-indigo-50 transition">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Floating Image */}
        <div className="flex-1 relative">
          <Image
            src="/images/hero-image.png"
            alt="Rashedul Alam"
            className={`${styles.animate_float} w-full max-w-sm mx-auto rounded-xl shadow-xl`}
            width={300}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
