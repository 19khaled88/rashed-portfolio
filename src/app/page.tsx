import About from "@/components/About.me";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Social_links from "@/components/Social_links.address";




export default function Home() {
  
  return (
    <main >
      
      <Hero />
      <About />
      <Skills />
      <Social_links />
      <Footer />
    </main>
  );
}
