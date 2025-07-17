'use client'
import React, { useEffect, useRef, useState } from 'react';

const SkillBar = ({ name, percent,animate = false, delay = 0 }:{name:string,percent:string,animate?:boolean,delay?:number}) => {
    const [width, setWidth] = useState('0%');
    const barRef = useRef(null);

     useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
            setWidth(percent);
            }
        },
        { threshold: 0.1 }
        );

        if (barRef.current) {
        observer.observe(barRef.current);
        }

        

        if (animate) {
          const timer = setTimeout(() => {
            setWidth(percent)
          }, delay)
          return () => clearTimeout(timer)
        }
    }, [animate,delay,percent]);

  return (
    <div className="mb-4 animate-growWidth" ref={barRef}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs text-gray-500">{percent}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out" 
          style={{ width }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;