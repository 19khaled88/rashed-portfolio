import About from "@/components/About.me";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import ServicesAndProjects from "@/components/ServicesAndProjects";
import Skills from "@/components/Skills";
import VideoDemo from "@/components/VideoDemo";
// import ContactInfo from "@/components/Social_links.address";


export default function Home() {
  return (
      <main>
        
        <Hero />
        <About />
       
        {/* <ContactInfo /> */}
        
        <Services />
        <Projects />
        <VideoDemo />
        <Footer />
      </main>
  );
}
