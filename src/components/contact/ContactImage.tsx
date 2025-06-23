
const ContactImage = () => {
  return (
    <div className="flex justify-center">
      <div className="glass-card p-4 sm:p-6 rounded-2xl overflow-hidden animated-border hover:shadow-blue-500/30 transition-all duration-500">
        <div className="w-full max-w-md h-80 sm:h-96 md:h-[28rem] rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/05b9d584-587f-4572-8f78-a3879829e522.png"
            alt="Akash Nayar at workspace"
            className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactImage;
