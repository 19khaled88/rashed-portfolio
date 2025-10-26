'use client'
import React from 'react';
import SkillBar from './SkillBar';
import { useInView } from 'react-intersection-observer'

import { 
    SiGoogleanalytics, 
    SiGoogleads, 
    // SiLookerstudio 
} from 'react-icons/si';

const Skills = () => {
  const [sectionRef, inView] = useInView({
      triggerOnce: false,
      threshold: 0.1,
      rootMargin: '-50px 0px'
  })

  const skillCategories = [
    {
      title: "Analytics & Data",
      icon: <SiGoogleanalytics className="text-blue-500 text-2xl" />,
      skills: [
        { name: "Google Analytics 4 (GA4)", level: "95%" },
        { name: "Google Tag Manager (Web & Server-Side)", level: "90%" },
        { name: "Looker Studio Dashboards", level: "90%" },
      ]
    },
    {
      title: "Tracking & Marketing",
      icon: <SiGoogleads className="text-red-500 text-2xl" />,
      skills: [
        { name: "Conversion Tracking & Attributions", level: "95%" },
        { name: "Facebook Pixel & Conversion API (CAPI)", level: "90%" },
        { name: "Google Ads Conversion Tracking", level: "90%" },
        { name: "Meta Ads Tracking", level: "85%" },
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="min-h-[calc(100vh-4rem)] py-12 bg-slate-100 flex flex-col overflow-hidden"
    >
      {/* Title at the top */}
      <div className={`pt-8 text-center transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Technical Skills</h2>
      </div>

      {/* Centered content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-7xl w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-xl shadow-sm transition-all duration-700 ease-in-out delay-${index * 100} 
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex}
                      name={skill.name}
                      percent={skill.level}
                      animate={inView}
                      delay={skillIndex * 100 + index * 100}
                     
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;