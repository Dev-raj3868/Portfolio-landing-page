
import { Monitor, Palette, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Monitor className="h-12 w-12 text-yellow-500" />,
      title: "Website Development",
      description: "Great websites get business. Don't let your website be just another URL on the web. I provide professional, quality website designing and web development."
    },
    {
      icon: <Palette className="h-12 w-12 text-yellow-500" />,
      title: "Graphic Design",
      description: "We stay on top of current design trends and concepts, aiming to be ahead of the curve while also implementing classic design principles into our work. We can design your ( Logo, Banner, Social Media Posts, App UI/UX, Website UI/UX, etc.)"
    },
    {
      icon: <Star className="h-12 w-12 text-yellow-500" />,
      title: "Logo Design",
      description: "The first step to building your brand is designing a unique logo! We provide Logo Design Services to Enhance your Identity! Get your logo done at very reasonable cost."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-wider text-yellow-500 mb-4">FEATURES</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">What I Do</h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
