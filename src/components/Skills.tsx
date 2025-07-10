'use client'
import React from 'react';
import SkillBar from './SkillBar';
import { 
    SiGoogleanalytics, 
    SiGoogleads, 
    // SiLookerstudio 
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Google Analytics",
      icon: <SiGoogleanalytics className="text-blue-500 text-2xl" />,
      skills: [
        { name: "GA4", level: "95%" },
        { name: "Looker Studio", level: "90%" },
        { name: "BigQuery", level: "85%" },
        { name: "Universal Analytics", level: "80%" }
      ]
    },
    {
      title: "Digital Marketing",
      icon: <SiGoogleads className="text-red-500 text-2xl" />,
      skills: [
        { name: "Google Ads", level: "90%" },
        { name: "SEO", level: "85%" },
        { name: "Meta Ads", level: "80%" },
        { name: "Conversion Tracking", level: "95%" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">My Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
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
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;