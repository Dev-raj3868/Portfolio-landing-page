
import { Mail, Phone, MessageCircle, Facebook, Linkedin, Instagram } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="glass-card p-6 sm:p-8 rounded-2xl animated-border hover:shadow-purple-500/30 transition-all duration-500">
      <div className="space-y-6 sm:space-y-8">
        {/* Name and Title */}
        <div className="text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text transition-all duration-300">
            Akash Nayar
          </h3>
          <p className="text-gray-400 text-lg mb-4 hover:text-gray-300 transition-colors duration-300">
            Senior Software Engineer
          </p>
          <p className="text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed hover:text-gray-100 transition-colors duration-300">
            I am available for freelance work. Connect with me via and call in to my account.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group">
            <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors duration-300">
              <Phone className="h-5 w-5 text-yellow-500" />
            </div>
            <span>Phone: <span className="text-white font-medium">+919958054061</span></span>
          </div>
          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group">
            <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors duration-300">
              <Mail className="h-5 w-5 text-yellow-500" />
            </div>
            <span>Email: <span className="text-white font-medium">akashnayar07@gmail.com</span></span>
          </div>
          <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group">
            <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors duration-300">
              <MessageCircle className="h-5 w-5 text-yellow-500" />
            </div>
            <span>Whatsapp: <span className="text-white font-medium">+919958054061</span></span>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center lg:text-left">
          <h4 className="text-gray-400 mb-4 uppercase tracking-wider text-sm hover:text-gray-200 transition-colors duration-300">
            FIND WITH ME
          </h4>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a href="#" className="w-12 h-12 glass-card rounded-lg flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-400/60 transition-all duration-300 hover:scale-110 group">
              <Facebook className="h-5 w-5 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a href="#" className="w-12 h-12 glass-card rounded-lg flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-400/60 transition-all duration-300 hover:scale-110 group">
              <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a href="#" className="w-12 h-12 glass-card rounded-lg flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-400/60 transition-all duration-300 hover:scale-110 group">
              <Instagram className="h-5 w-5 text-gray-300 group-hover:text-pink-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
