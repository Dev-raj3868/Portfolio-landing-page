
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-slide-up">
            {/* Introduction Text */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in-left">
                Hi, I'm <span className="text-yellow-500">Akash Nayar</span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white animate-slide-in-right" style={{animationDelay: '0.2s'}}>
                a Designer.
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
              I design and develop website for customers of all sizes, specializing in creating stylish, 
              modern websites, web services, online stores, LMS Solutions. My passion is to design 
              digital user experiences through the bold interface and meaningful interactions.
            </p>

            {/* Find With Me Section */}
            <div className="mb-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">FIND WITH ME</h3>
              <div className="flex gap-4">
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
          </div>

          {/* Right side - Professional Photo */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{animationDelay: '0.8s'}}>
            <div className="w-96 h-96 lg:w-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/4862e230-66d1-4bab-b904-383295f0f37d.png"
                alt="Akash Nayar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
