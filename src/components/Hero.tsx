
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-scale-in">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-4xl font-bold glow-text">DN</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-slide-in-left">
              <span className="glow-text">Developer</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              & <span className="text-white">Creative</span>
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            Full-stack developer passionate about creating exceptional digital experiences 
            with modern technologies and clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full hover-glow transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card border-white/20 hover:border-white/40 text-white rounded-full hover-glow"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card border-white/20 hover:border-white/40 text-white rounded-full hover-glow"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card border-white/20 hover:border-white/40 text-white rounded-full hover-glow"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 mx-auto text-gray-400 animate-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
