
import { Mail, Phone, MessageCircle, Facebook, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 relative" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-wider text-yellow-500 mb-4">CONTACT</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Contact With Me</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Contact Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-md rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/05b9d584-587f-4572-8f78-a3879829e522.png"
                  alt="Akash Nayar at workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Contact Information */}
            <div className="space-y-8">
              {/* Name and Title */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Akash Nayar</h3>
                <p className="text-gray-400 text-lg mb-4">Senior Software Engineer</p>
                <p className="text-gray-300 max-w-lg">
                  I am available for freelance work. Connect with me via and call in to my account.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="h-5 w-5 text-yellow-500" />
                  <span>Phone: <span className="text-white">+919958054061</span></span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-yellow-500" />
                  <span>Email: <span className="text-white">akashnayar07@gmail.com</span></span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MessageCircle className="h-5 w-5 text-yellow-500" />
                  <span>Whatsapp: <span className="text-white">+919958054061</span></span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-gray-400 mb-4 uppercase tracking-wider text-sm">FIND WITH ME</h4>
                <div className="flex gap-4">
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
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-white/10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AKASH</span>
            </div>
            <p className="text-gray-400 text-sm">© 2021, All rights reserved by Akash Nayar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
