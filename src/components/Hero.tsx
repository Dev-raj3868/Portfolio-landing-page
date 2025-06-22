
import { Github, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Professional Photo */}
          <div className="mb-8">
            <div className="w-80 h-80 mx-auto mb-8 rounded-full overflow-hidden animate-scale-in shadow-2xl">
              <img 
                src="/lovable-uploads/496c8a43-777b-4a91-89af-42fa3856b8b8.png"
                alt="Akash Nayar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Introduction Text */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in-left">
              Hi, I'm <span className="glow-text">Akash Nayar</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              a Professional Coder.
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            I design and develop websites for customers of all sizes, specializing in creating stylish, 
            modern websites, web services, online stores, LMS Solutions. My passion is to design 
            digital user experiences through the bold interface and meaningful interactions.
          </p>

          {/* Find With Me Section */}
          <div className="mb-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">FIND WITH ME</h3>
            <div className="flex gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card border-white/20 hover:border-white/40 text-white rounded-lg hover-glow w-16 h-16"
              >
                <Facebook className="h-6 w-6" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card border-white/20 hover:border-white/40 text-white rounded-lg hover-glow w-16 h-16"
              >
                <Instagram className="h-6 w-6" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card border-white/20 hover:border-white/40 text-white rounded-lg hover-glow w-16 h-16"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Features Section Title */}
          <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">FEATURES</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white">What I Do</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
