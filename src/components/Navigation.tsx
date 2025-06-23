
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'FEATURES', href: '#features' },
    { name: 'PORTFOLIO', href: '#projects' },
    { name: 'RESUME', href: '#resume' },
    { name: 'CONTACT', href: '#contact' },
    { name: 'Hire Now', href: '#contact', isButton: true }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass-card backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Enhanced with better visibility and hover effects */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/e4513a62-d401-4e9d-9a53-ed044c87ea1a.png" 
                alt="Akash Nayar - Senior Software Engineer Logo"
                className="w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 object-contain border border-white/30 shadow-xl rounded-lg bg-white/15 backdrop-blur-sm hover:bg-white/25 hover:border-white/50 transition-all duration-500 hover:scale-105 hover:shadow-blue-500/30"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-300 relative group text-sm font-medium ${
                    item.isButton 
                      ? 'button-hover bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-orange-400 hover:shadow-lg hover:shadow-yellow-500/30' 
                      : 'text-gray-300 hover:text-white hover:scale-105'
                  }`}
                >
                  {item.name}
                  {!item.isButton && (
                    <>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full"></span>
                      <span className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
                    </>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Sidebar Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-20 z-40">
            <div className="glass-card h-full w-80 max-w-[90vw] p-6 slide-in-animation">
              {/* Profile Section */}
              <div className="mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center space-x-3 mb-4 group">
                  <img 
                    src="/lovable-uploads/e4513a62-d401-4e9d-9a53-ed044c87ea1a.png" 
                    alt="Akash Nayar"
                    className="w-20 h-16 object-contain rounded-lg border border-white/30 bg-white/15 group-hover:bg-white/25 transition-all duration-300"
                  />
                  <div>
                    <div className="text-white font-semibold hover:text-blue-400 transition-colors duration-300">I'M AKASH NAYAR</div>
                    <div className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">A Lead Software Engineer based</div>
                    <div className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">in INDIA</div>
                  </div>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="mb-8">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium rounded-lg hover:translate-x-2 stagger-animation"
                    style={{animationDelay: `${index * 0.1}s`}}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Find With Me Section */}
              <div>
                <h3 className="text-sm text-gray-400 mb-4 hover:text-gray-200 transition-colors duration-300">FIND WITH ME</h3>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-card border-white/20 hover:border-blue-400/60 text-white rounded-lg w-10 h-10 p-0 hover:bg-blue-500/20 hover:scale-110 transition-all duration-300"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-card border-white/20 hover:border-pink-400/60 text-white rounded-lg w-10 h-10 p-0 hover:bg-pink-500/20 hover:scale-110 transition-all duration-300"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-card border-white/20 hover:border-blue-400/60 text-white rounded-lg w-10 h-10 p-0 hover:bg-blue-600/20 hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm -z-10 animate-fade-in"
              onClick={() => setIsOpen(false)}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
