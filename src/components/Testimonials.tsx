
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-wider text-yellow-500 mb-4">WHAT CLIENTS SAY</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Testimonial</h2>
        </div>

        {/* Video Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-xl">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/HlxqbgoC_pQ"
                title="Andrea Testimonial"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Client Info */}
            <div className="mt-6 text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <h4 className="text-lg font-semibold text-white">Andrea DSouza</h4>
              <p className="text-yellow-500 text-sm">CELESTLIFE</p>
              <p className="text-gray-400 text-sm">www.celestlife.com/</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
