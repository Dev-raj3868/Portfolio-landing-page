
import { Mail, Phone, MessageCircle, Facebook, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 relative" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-wider text-yellow-500 mb-4">CONTACT</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Contact With Me</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-xl">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="w-80 h-64 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/17aaa429-5c3b-4a35-a438-714dc25c2d9b.png" 
                  alt="Akash Nayar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Akash Nayar</h3>
              <p className="text-gray-400 text-lg mb-4">Senior Software Engineer</p>
              <p className="text-gray-300 max-w-2xl mx-auto">
                I am available for freelance work. Connect with me via and call in to my account.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Phone className="h-5 w-5" />
                <span>Phone: <span className="text-white">+919958054061</span></span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Mail className="h-5 w-5" />
                <span>Email: <span className="text-white">akashnayar07@gmail.com</span></span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp: <span className="text-white">+919958054061</span></span>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center mb-8">
              <h4 className="text-gray-400 mb-4 uppercase tracking-wider text-sm">FIND WITH ME</h4>
              <div className="flex justify-center gap-6">
                <a href="#" className="w-12 h-12 glass-card rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Facebook className="h-5 w-5 text-gray-300" />
                </a>
                <a href="#" className="w-12 h-12 glass-card rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Linkedin className="h-5 w-5 text-gray-300" />
                </a>
                <a href="#" className="w-12 h-12 glass-card rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Instagram className="h-5 w-5 text-gray-300" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AKASH</span>
              </div>
              <p className="text-gray-400 text-sm">© 2021, All rights reserved by Akash Nayar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
