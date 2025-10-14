'use client'
import React from 'react'
import SkillBar from './SkillBar'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '-50px 0px' // Triggers when 50px from viewport
  })



  return (
    <section 
      ref={sectionRef}
      className="min-h-[calc(100vh-4rem)] flex flex-col bg-white py-12 overflow-hidden"
      id="about" 
    >
      {/* Title */}
      <div className={`pt-8 text-center transition-all duration-500 ease-out ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About</h1>
      </div>

      {/* Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-7xl w-full px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column */}
            <div className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="font-semibold mb-3">About Me</h3>
              <p className="text-gray-600 mb-4">
                “A Certified Google Analytics Strategist with 5+ years of experience helping businesses build reliable data systems to make smarter marketing decisions.”
              </p>
              <ul className="space-y-2">
                <li className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 delay-100' : 'opacity-0'}`}>
                  ✅ Google Analytics 4 (GA4) Setup & Advanced Event Tracking
                </li>
                <li className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 delay-200' : 'opacity-0'}`}>
                  ✅ Google Tag Manager (Web & Server-Side)
                </li>
                <li className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 delay-200' : 'opacity-0'}`}>
                  ✅ Facebook Pixel & Conversion API (CAPI)
                </li>
                <li className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 delay-200' : 'opacity-0'}`}>
                  ✅ Google Ads Conversion Tracking & Attribution
                </li>
                <li className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 delay-200' : 'opacity-0'}`}>
                  ✅ Data Layer Design & Debugging
                </li>
                <li className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 delay-200' : 'opacity-0'}`}>
                  ✅ Reporting & Dashboards with Looker Studio
                </li>
              </ul>
            </div>
            
            {/* Right Column */}
            <div className={`bg-gray-50 p-6 rounded-lg transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0 delay-100' : 'opacity-0 translate-x-10'}`}>
              <h3 className="font-semibold mb-3">Core Competencies</h3>
              <div className="space-y-2">
                <SkillBar name="GA4" percent="95%" animate={inView} delay={100} />
                <SkillBar name="GTM" percent="900%" animate={inView} delay={200} />
                <SkillBar name="Facebook CAPI" percent="85%" animate={inView} delay={200} />
                <SkillBar name="Google Ads Tracking" percent="85%" animate={inView} delay={200} />
                <SkillBar name="Server-Side Tracking" percent="80%" animate={inView} delay={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About