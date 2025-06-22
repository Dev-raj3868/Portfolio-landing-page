
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
    { name: 'FEATURES', href: '#about' },
    { name: 'PORTFOLIO', href: '#projects' },
    { name: 'RESUME', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
    { name: 'WHATSAPP', href: '#whatsapp' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-card backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" 
                alt="Akash Nayar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="text-lg font-bold text-white">AKASH</div>
                <div className="text-lg font-bold glow-text">NAYAR</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.slice(0, 5).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group text-sm font-medium"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
          <div className="md:hidden fixed inset-0 top-16 z-40">
            <div className="glass-card h-full w-80 p-6 animate-slide-in-left">
              {/* Profile Section */}
              <div className="mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
                    alt="Akash Nayar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="text-white font-semibold">I'M Akash Nayar</div>
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
