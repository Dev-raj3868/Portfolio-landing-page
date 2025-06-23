
const ContactFooter = () => {
  return (
    <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-2 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
        <span className="text-white font-bold text-sm">AKASH</span>
      </div>
      <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
        © 2021, All rights reserved by Akash Nayar
      </p>
    </div>
  );
};

export default ContactFooter;
