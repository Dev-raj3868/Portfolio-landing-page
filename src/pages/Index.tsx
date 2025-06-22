
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import WhatIDo from '@/components/WhatIDo';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <Testimonials />
        <WhatIDo />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="glass-card border-t border-white/10 py-6 sm:py-8 mt-16 sm:mt-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 AKASH NAYAR Portfolio. Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
