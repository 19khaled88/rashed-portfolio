
import React from 'react'
import SkillBar from './SkillBar'

const About = () => {
  return (
    
    // <script src="https://cdn.tailwindcss.com"></script>

    // <body className="bg-white text-gray-800">

    // {/* <!-- Header --> */}
    // <header className="text-center py-10 px-4 bg-gray-100">
    //     <h1 className="text-3xl md:text-5xl font-bold text-blue-900">Md. Khaled Ahasan</h1>
    //     <p className="text-xl text-gray-600 mt-2">Digital Marketing Strategist & Google Analyst</p>
    //     <p className="mt-4 max-w-xl mx-auto text-gray-500">I specialize in developing data-driven marketing strategies and optimizing digital campaigns to boost traffic and conversions.</p>
    //     <div className="mt-6 flex justify-center gap-4">
    //     <a href="#contact" className="bg-blue-900 text-white px-5 py-2 rounded-lg">Get in Touch</a>
    //     <a href="#projects" className="border border-blue-900 px-5 py-2 rounded-lg text-blue-900">View My Work</a>
    //     </div>
    // </header>

    // {/* <!-- About Section --> */}
    // <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-14">
    //     <Image src="" width={180} height={180} alt="Md. Khaled Ahasan" className="rounded-full shadow-md" />
    //     <div className="max-w-md">
    //     <h2 className="text-2xl font-semibold mb-2">About Me</h2>
    //     <p className="text-gray-600">Expert in <strong>Google Analytics</strong>, <strong>SE/PPC</strong>, and <strong>content marketing</strong>, using insights to drive strategy and deliver ROI-focused solutions.</p>
    //     </div>
    // </section>

    // {/* <!-- Featured Projects --> */}
    // <section id="projects" className="bg-gray-50 py-14 px-6 text-center">
    //     <h2 className="text-3xl font-semibold mb-10">Featured Projects</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    //     <div className="p-6 bg-white rounded-xl shadow-md">
    //         <p className="text-xl font-bold mb-2">📊 Marketing Analytics Dashboard</p>
    //         <p className="text-gray-600 text-sm">Tracking and visualizing key performance metrics.</p>
    //     </div>
    //     <div className="p-6 bg-white rounded-xl shadow-md">
    //         <p className="text-xl font-bold mb-2">✉️ Automated Email Campaigns</p>
    //         <p className="text-gray-600 text-sm">Optimizing and automating email workflows.</p>
    //     </div>
    //     <div className="p-6 bg-white rounded-xl shadow-md">
    //         <p className="text-xl font-bold mb-2">📈 SEO Strategy Development</p>
    //         <p className="text-gray-600 text-sm">Improving organic traffic and rankings.</p>
    //     </div>
    //     <div className="p-6 bg-white rounded-xl shadow-md">
    //         <p className="text-xl font-bold mb-2">📢 PPC Ad Management</p>
    //         <p className="text-gray-600 text-sm">Managing cost-effective PPC advertising campaigns.</p>
    //     </div>
    //     </div>
    // </section>

    // {/* <!-- Skills Section --> */}
    // <section className="py-14 px-6 text-center">
    //     <h2 className="text-3xl font-semibold mb-6">Skills</h2>
    //     <ul className="flex flex-wrap justify-center gap-4 text-sm text-white">
    //     <li className="bg-blue-800 px-4 py-2 rounded-full">Google Analytics (GA4)</li>
    //     <li className="bg-blue-800 px-4 py-2 rounded-full">Google Tag Manager</li>
    //     <li className="bg-blue-800 px-4 py-2 rounded-full">SEO & SEM</li>
    //     <li className="bg-blue-800 px-4 py-2 rounded-full">Facebook Ads</li>
    //     <li className="bg-blue-800 px-4 py-2 rounded-full">Email Marketing</li>
    //     <li className="bg-blue-800 px-4 py-2 rounded-full">Looker Studio</li>
    //     <li className="bg-blue-800 px-4 py-2 rounded-full">Python for Data</li>
    //     </ul>
    // </section>

    // {/* <!-- Contact & Socials --> */}
    // <footer id="contact" className="bg-gray-100 py-10 px-6 text-center">
    //     <h2 className="text-2xl font-semibold mb-4">Contact</h2>
    //     <p className="text-gray-600 mb-2">Feel free to reach out for any inquiries or collaboration opportunities.</p>
    //     <p className="mb-1"><strong>Email:</strong> <a href="mailto:mdkhaledahasan@example.com" className="text-blue-900">mdkhaledahasan@example.com</a></p>
    //     <p><strong>Phone:</strong> +1234567330</p>

    //     <div className="flex justify-center gap-6 mt-6 text-gray-700 text-xl">
    //     <a href="https://linkedin.com" target="_blank" className="hover:text-blue-700">🔗</a>
    //     <a href="https://twitter.com" target="_blank" className="hover:text-blue-500">🐦</a>
    //     <a href="https://github.com" target="_blank" className="hover:text-gray-900">💻</a>
    //     </div>
    // </footer>

    // </body>




    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Certified Google Analytics strategist with 5+ years of experience...
            </p>
            <ul className="space-y-2">
              <li>✅ Google Analytics 4 & Looker Studio Expert</li>
              <li>✅ Data-Driven Marketing Campaigns</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">My Skills</h3>
            <div className="space-y-2">
              <SkillBar name="GA4" percent="95%" />
              <SkillBar name="SEO" percent="90%" />
            </div>
          </div>
        </div>
      </div>
    </section>



  )
}

export default About
