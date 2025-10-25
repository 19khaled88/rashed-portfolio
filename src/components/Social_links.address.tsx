'use client'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone, FaGlobe, FaFacebook } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface AddressInfo {
  location: string;
  phone: string;
  email: string;
  website: string;
}

const ContactInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  // Social links data
  const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/rashedulalam', icon: <FaGithub /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/trackingrashed/', icon: <FaLinkedin /> },
    
    { name: 'Instagram', url: 'https://www.instagram.com/rashedulalam362/', icon: <FaInstagram /> },
    { name: 'Facebook', url: 'https://www.facebook.com/md.rashedul.alam.639050/', icon: <FaFacebook /> },
  ];

  // Address information
  const addressInfo: AddressInfo = {
    location: 'Chittagong, Bangladesh',
    phone: '+880 17 3044 4520',
    email: 'your.email@example.com',
    website: 'yourportfolio.com',
  };

  return (
    <section ref={ref} className="min-h-[calc(100vh-4rem)] flex flex-col overflow-hidden">
      {/* Title at the top */}
      <div className={`pt-12 text-center transition-all duration-900 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Connect With Me</h1>
      </div>

      {/* Centered content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
          <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-900 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="md:flex">
              {/* Social Links Section */}
              <div className="md:w-1/2 p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                <h2 className="text-2xl font-bold mb-6">My Social Profiles</h2>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-3 rounded-lg transition-all duration-700 ease-out
                                  hover:bg-gradient-to-r hover:from-white/10 hover:to-white/20
                                  hover:shadow-lg hover:backdrop-blur-md
                                  hover:text-white hover:font-semibold
                                  hover:scale-[1.03] border border-transparent hover:border-white/10
                                  transform ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                      style={{
                        transitionDelay: `${index * 100}ms`,
                        transitionDuration: '500ms'
                      }}
                    >
                      <span className="text-xl mr-4">{link.icon}</span>
                      <span className="font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Address Info Section */}
              <div className="md:w-1/2 p-8 dark:text-white">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h2>
                <div className="space-y-5">
                  <div className={`flex items-start transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '100ms' }}>
                    <span className="text-purple-600 dark:text-purple-400 text-xl mt-1 mr-4">
                      <FaMapMarkerAlt />
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-700 dark:text-gray-300">Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">{addressInfo.location}</p>
                    </div>
                  </div>

                  <div className={`flex items-start transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '200ms' }}>
                    <span className="text-purple-600 dark:text-purple-400 text-xl mt-1 mr-4">
                      <FaPhone />
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-700 dark:text-gray-300">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">{addressInfo.phone}</p>
                    </div>
                  </div>

                  <div className={`flex items-start transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '300ms' }}>
                    <span className="text-purple-600 dark:text-purple-400 text-xl mt-1 mr-4">
                      <FaEnvelope />
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-700 dark:text-gray-300">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">{addressInfo.email}</p>
                    </div>
                  </div>

                  <div className={`flex items-start transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '400ms' }}>
                    <span className="text-purple-600 dark:text-purple-400 text-xl mt-1 mr-4">
                      <FaGlobe />
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-700 dark:text-gray-300">Website</h3>
                      <p className="text-gray-600 dark:text-gray-400">{addressInfo.website}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;