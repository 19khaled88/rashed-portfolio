'use client'
import React from 'react'
import SkillBar from './SkillBar'
import { useInView } from 'react-intersection-observer'
import { SiGoogleanalytics, SiGoogleads } from 'react-icons/si'

const About = () => {
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
        { name: "Conversion Tracking & Attribution", level: "95%" },
        { name: "Facebook Pixel & Conversion API (CAPI)", level: "90%" },
        { name: "Google Ads Conversion Tracking", level: "90%" },
        { name: "Meta Ads Tracking", level: "85%" },
        
      ]
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-col bg-white py-16 px-6 overflow-hidden"
      id="about" 
    >
      {/* Header Section */}
      <div className={`text-center  transition-all duration-700 ease-out pt-4 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Certified Google Analytics Strategist with 5+ years of experience helping businesses 
          build reliable data systems for smarter marketing decisions.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row gap-10 pt-12">
            
            {/* Left Column - Introduction */}
            <div className={`w-full transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm border border-blue-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-blue-500 rounded-full mr-3"></div>
                  Core Competence
                </h3>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    I specialize in implementing robust analytics infrastructure that transforms 
                    raw data into actionable insights for data-driven decision making.
                  </p>
                  
                  <div className="space-y-3 mt-6">
                    {[
                      "✅ Google Analytics 4 (GA4) Setup & Advanced Event Tracking",
                      "✅ Google Tag Manager (Web & Server-Side)",
                      "✅ Facebook Pixel & Conversion API (CAPI)",
                      "✅ Google Ads Conversion Tracking & Attribution",
                      "✅ Data Layer Design & Debugging",
                      "✅ Reporting & Dashboards with Looker Studio"
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`transition-all duration-500 ease-out ${
                          inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                        }`}
                        style={{ transitionDelay: `${index * 100 + 200}ms` }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className={`rounded-lg w-full transition-all duration-700 ease-out bg-gradient-to-br from-indigo-400 to-green-400 p-6  ${
              inView ? 'opacity-100 translate-x-0 delay-200' : 'opacity-0 translate-x-10'
            }`}>
              {/* Removed the Technical Skills heading and subtitle */}
              
              <div className="flex flex-col md:flex-row lg:flex-col gap-5">
                {skillCategories.map((category, index) => (
                  <div 
                    key={index}
                    className={`bg-white px-5 py-2 rounded-xl shadow-sm border border-gray-100 transition-all duration-700 ease-in-out md:w-full ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-2 bg-gray-50 rounded-lg mr-3">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {category.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar 
                          key={skillIndex}
                          name={skill.name}
                          percent={skill.level}
                          animate={inView}
                          delay={skillIndex * 100 + index * 100 + 400}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About