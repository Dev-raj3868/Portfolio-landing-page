
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section className="py-20 relative" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-6">
            <span className="glow-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-slide-in-left">
            <div className="glass-card p-8 rounded-2xl hover-glow h-full">
              <h3 className="text-3xl font-bold text-white mb-8">Let's Connect</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300">hello@developer.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="text-gray-300 leading-relaxed">
                <p className="mb-4">
                  I'm always excited to work on new projects and collaborate with passionate teams. 
                  Whether you have a specific project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
                <p>
                  Currently available for freelance projects and full-time opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="glass-card p-8 rounded-2xl hover-glow">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <Input 
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <Input 
                      type="email"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Subject</label>
                  <Input 
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <Textarea 
                    rows={6}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-full hover-glow transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
