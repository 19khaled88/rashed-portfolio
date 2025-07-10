'use client'
import React, { useEffect } from 'react';
import heroImg from '../assets/hero-image.png'; // Update with your image path
import Image from 'next/image';
import styles from '../components/Hero.module.css';

const Hero = () => {

  useEffect(()=>{
    const nav_top_container = document.getElementById('nav-bar-top');
    console.log(nav_top_container)
  },[]);
  
  return (
    <section className="bg-gray-100 min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I&apos;m <span className="text-indigo-600">Rashedul Alam</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            A passionate <span className="font-semibold text-gray-800">Digital Marketing Strategist</span> focused on driving measurable online growth.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg text-sm hover:bg-indigo-50 transition">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Floating Image */}
        <div className="flex-1 relative">
          <Image
            src={heroImg}
            alt="Rashedul Alam"
            className={ `${styles.animate_float} w-full max-w-sm mx-auto rounded-xl shadow-xl`}
            
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
