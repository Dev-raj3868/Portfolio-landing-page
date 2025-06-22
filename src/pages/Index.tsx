
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <Features />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <footer className="glass-card border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Developer Portfolio. Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
