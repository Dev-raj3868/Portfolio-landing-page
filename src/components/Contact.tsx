
import ContactImage from './contact/ContactImage';
import ContactInfo from './contact/ContactInfo';
import ContactFooter from './contact/ContactFooter';

const Contact = () => {
  return (
    <section className="py-16 sm:py-20 relative px-4 sm:px-6" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-sm uppercase tracking-wider text-yellow-500 mb-4 hover:text-yellow-400 transition-colors duration-300">
            CONTACT
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text transition-all duration-500">
            Contact With Me
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left side - Contact Image */}
            <div className="order-2 lg:order-1">
              <ContactImage />
            </div>

            {/* Right side - Contact Information */}
            <div className="order-1 lg:order-2">
              <ContactInfo />
            </div>
          </div>

          <ContactFooter />
        </div>
      </div>
    </section>
  );
};

export default Contact;
