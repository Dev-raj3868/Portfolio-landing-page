
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-card backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Made rectangular and fully visible */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/e4513a62-d401-4e9d-9a53-ed044c87ea1a.png" 
                alt="Logo"
                className="w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 object-contain border border-white/20 shadow-lg rounded-lg bg-white/10 backdrop-blur-sm"
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
                  className={`transition-colors duration-200 relative group text-sm font-medium ${
                    item.isButton 
                      ? 'bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {!item.isButton && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
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
              className="text-white"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Sidebar Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-20 z-40">
            <div className="glass-card h-full w-80 max-w-[90vw] p-6 animate-slide-in-left">
              {/* Profile Section */}
              <div className="mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="/lovable-uploads/e4513a62-d401-4e9d-9a53-ed044c87ea1a.png" 
                    alt="Akash Nayar"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold">I'M AKASH NAYAR</div>
                    <div className="text-gray-400 text-sm">A Lead Website Developer based</div>
                    <div className="text-gray-400 text-sm">in INDIA</div>
                  </div>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="mb-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200 text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Find With Me Section */}
              <div>
                <h3 className="text-sm text-gray-400 mb-4">FIND WITH ME</h3>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-card border-white/20 hover:border-white/40 text-white rounded-lg w-10 h-10 p-0"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-card border-white/20 hover:border-white/40 text-white rounded-lg w-10 h-10 p-0"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-card border-white/20 hover:border-white/40 text-white rounded-lg w-10 h-10 p-0"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 -z-10"
              onClick={() => setIsOpen(false)}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
