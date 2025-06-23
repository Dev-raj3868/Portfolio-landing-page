
const AboutProfile = () => {
  return (
    <div className="animate-slide-in-right order-1 lg:order-2">
      <div className="relative">
        <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl animated-border">
          <div className="w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] rounded-xl overflow-hidden mb-4">
            <img 
              src="/lovable-uploads/fe7b02fb-6940-45d8-95bf-1a0ccc5e21a7.png" 
              alt="AKASH NAYAR Portrait" 
              className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
            />
          </div>
          <div className="text-center">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">AKASH NAYAR</h4>
            <p className="text-gray-400 text-sm sm:text-base">Full-Stack Developer & Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;
