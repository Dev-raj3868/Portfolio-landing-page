
import { Github, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="slide-in-animation">
            {/* Introduction Text */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 stagger-animation">
                Hi, I'm <span className="glow-text hover:scale-105 transition-transform duration-300 inline-block cursor-pointer">Akash Nayar</span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white stagger-animation hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:bg-clip-text transition-all duration-500 cursor-pointer" style={{animationDelay: '0.2s'}}>
                a Designer.
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed stagger-animation hover:text-gray-100 transition-colors duration-300" style={{animationDelay: '0.4s'}}>
              I design and develop website for customers of all sizes, specializing in creating stylish, 
              modern websites, web services, online stores, LMS Solutions. My passion is to design 
              digital user experiences through the bold interface and meaningful interactions.
            </p>

            {/* Find With Me Section */}
            <div className="mb-12 stagger-animation" style={{animationDelay: '0.6s'}}>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4 hover:text-gray-200 transition-colors duration-300">FIND WITH ME</h3>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass-card border-white/20 hover:border-blue-400/60 text-white rounded-lg hover-glow w-16 h-16 group hover:bg-blue-500/20 transition-all duration-500"
                >
                  <Facebook className="h-6 w-6 group-hover:scale-125 group-hover:text-blue-400 transition-all duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass-card border-white/20 hover:border-pink-400/60 text-white rounded-lg hover-glow w-16 h-16 group hover:bg-pink-500/20 transition-all duration-500"
                >
                  <Instagram className="h-6 w-6 group-hover:scale-125 group-hover:text-pink-400 transition-all duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass-card border-white/20 hover:border-blue-400/60 text-white rounded-lg hover-glow w-16 h-16 group hover:bg-blue-600/20 transition-all duration-500"
                >
                  <Linkedin className="h-6 w-6 group-hover:scale-125 group-hover:text-blue-400 transition-all duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Professional Photo with enhanced styling */}
          <div className="flex justify-center lg:justify-end stagger-animation hover-scale" style={{animationDelay: '0.8s'}}>
            <div className="w-96 h-96 lg:w-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl animated-border hover:shadow-blue-500/30 transition-all duration-500 group">
              <img 
                src="/lovable-uploads/4862e230-66d1-4bab-b904-383295f0f37d.png"
                alt="Akash Nayar - Senior Software Engineer & Designer"
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
