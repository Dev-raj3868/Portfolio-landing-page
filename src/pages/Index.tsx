
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
        
        <WhatIDo />
        <Testimonials />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
