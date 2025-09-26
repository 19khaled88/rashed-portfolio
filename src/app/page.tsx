import About from "@/components/About.me";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ContactInfo from "@/components/Social_links.address";


export default function Home() {
  return (
      <main>
        
        <Hero />
        <About />
        <Skills />
        <ContactInfo />
        <Footer />
      </main>
  );
}
