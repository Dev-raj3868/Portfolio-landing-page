
import { Monitor, Palette, Star, Folder, Book, BarChart3 } from 'lucide-react';

const WhatIDo = () => {
  const services = [
    {
      icon: <Folder className="h-12 w-12 text-yellow-500" />,
      title: "Website Development",
      description: "Great websites get business. Don't let your website be just another URL on the web. I provide professional, quality website designing and web development."
    },
    {
      icon: <Book className="h-12 w-12 text-yellow-500" />,
      title: "Graphic Design",
      description: "We stay on top of current design trends and concepts, aiming to be ahead of the curve while also implementing classic design principles into our work. We can design your ( Logo, Banner, Social Media Posts, App UI/UX, Website UI/UX, etc.)"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-yellow-500" />,
      title: "Logo Design",
      description: "The first step to building your brand is designing a unique logo! We provide Logo Design Services to Enhance your Identity! Get your logo done at very reasonable cost."
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-sm uppercase tracking-wider text-yellow-500 mb-4">FEATURES</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">What I Do</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-6 sm:p-8 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
