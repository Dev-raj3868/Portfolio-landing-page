
import { ExternalLink, Heart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Codingrad",
      url: "https://codingradweb.graphy.com/",
      description: "Learn Top Technologies in Regional Languages",
      image: "/lovable-uploads/1511a37e-4d11-4f0a-ab38-a5f4f271264f.png",
      likes: "500+"
    },
    {
      title: "Aneri Patel",
      url: "https://mentoringbyaneri.com/",
      description: "Fashion Designer | Stylist | Faculty | Merchandiser | Consultant",
      image: "/lovable-uploads/17aaa429-5c3b-4a35-a438-714dc25c2d9b.png",
      likes: "500+"
    },
    {
      title: "Credencetax",
      url: "#",
      description: "Financial Accounting and Tax Consultancy Firm",
      image: "/lovable-uploads/4862e230-66d1-4bab-b904-383295f0f37d.png",
      likes: "500+"
    },
    {
      title: "Guinet Technologies",
      url: "https://guinett.com/",
      description: "Learn NextGen Technologies with GuiNet",
      image: "/lovable-uploads/496c8a43-777b-4a91-89af-42fa3856b8b8.png",
      likes: "500+"
    },
    {
      title: "SSEI Markets",
      url: "https://www.sseimarkets.com/",
      description: "BUILDING ATMANIRBHAR TRADERS",
      image: "/lovable-uploads/05b9d584-587f-4572-8f78-a3879829e522.png",
      likes: "500+"
    },
    {
      title: "Midhafin",
      url: "https://www.midhafin.com/",
      description: "Boost your career in Finance with mentorship you can bank on!",
      image: "/lovable-uploads/1511a37e-4d11-4f0a-ab38-a5f4f271264f.png",
      likes: "500+"
    },
    {
      title: "Kundan Kishore",
      url: "https://www.kundankishore.in/",
      description: "A COMPLETE COURSE ON THE INDIAN STOCK MARKET",
      image: "/lovable-uploads/17aaa429-5c3b-4a35-a438-714dc25c2d9b.png",
      likes: "500+"
    },
    {
      title: "Breakthroughwithkaranrawat",
      url: "https://www.breakthroughwithkaranrawat.com/",
      description: "Become a strategic brand & marketing professional",
      image: "/lovable-uploads/4862e230-66d1-4bab-b904-383295f0f37d.png",
      likes: "500+"
    },
    {
      title: "Thinking Bridge",
      url: "https://www.thinkingbridge.in/",
      description: "Get Skilled Get Placed",
      image: "/lovable-uploads/496c8a43-777b-4a91-89af-42fa3856b8b8.png",
      likes: "500+"
    },
    {
      title: "Jatin Khirbat (Model)",
      url: "https://www.jatinkhirbat.com/courses/OVERVIEW-OF-THE-MODEL-MENTORSHIP-PROGRAM-62d8f69ce4b02ed61b9ab411",
      description: "Model Mentorship Program",
      image: "/lovable-uploads/05b9d584-587f-4572-8f78-a3879829e522.png",
      likes: "500+"
    },
    {
      title: "Debjit Patoa",
      url: "https://www.infinityclubonline.com/",
      description: "Empowering Your Financial Future",
      image: "/lovable-uploads/1511a37e-4d11-4f0a-ab38-a5f4f271264f.png",
      likes: "500+"
    },
    {
      title: "Kundan Kishore",
      url: "https://www.kundankishore.in/s/pages/home101",
      description: "Simplifying Investing & Trading for INDIA",
      image: "/lovable-uploads/17aaa429-5c3b-4a35-a438-714dc25c2d9b.png",
      likes: "150,000+"
    },
    {
      title: "YK Technologies",
      url: "https://yogeshkumar6203.graphy.com/",
      description: "Learn NextGen Technologies with YK Technologies",
      image: "/lovable-uploads/4862e230-66d1-4bab-b904-383295f0f37d.png",
      likes: "500+"
    },
    {
      title: "CelestLife",
      url: "https://www.celestlife.com/",
      description: "Experience the joy of transformation today!",
      image: "/lovable-uploads/496c8a43-777b-4a91-89af-42fa3856b8b8.png",
      likes: "500+"
    },
    {
      title: "The school of bass",
      url: "https://www.theschoolofbass.in/s/store/courses/description/Bass-guitar-lessons-for-beginners-in-Hindi",
      description: "Saurabh Suman",
      image: "/lovable-uploads/05b9d584-587f-4572-8f78-a3879829e522.png",
      likes: "500+"
    },
    {
      title: "Coach Nikhil Gambhir",
      url: "https://www.coachnikhilgambhir.com/",
      description: "Nikhil Gambhir",
      image: "/lovable-uploads/1511a37e-4d11-4f0a-ab38-a5f4f271264f.png",
      likes: "500+"
    },
    {
      title: "Neuron",
      url: "https://www.neuronnursingacademy.com/",
      description: "NEURON NURSING ACADEMY",
      image: "/lovable-uploads/17aaa429-5c3b-4a35-a438-714dc25c2d9b.png",
      likes: "500+"
    },
    {
      title: "LOUISE HAY",
      url: "https://www.infoworldeducation.com/",
      description: "LOUISE HAY",
      image: "/lovable-uploads/4862e230-66d1-4bab-b904-383295f0f37d.png",
      likes: "500+"
    },
    {
      title: "Languageveda",
      url: "https://jayadeepamaria6883.ongraphy.com/",
      description: "Language matters",
      image: "/lovable-uploads/496c8a43-777b-4a91-89af-42fa3856b8b8.png",
      likes: "500+"
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative" id="projects">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <span className="text-lg text-gray-400 mb-4 block">Visit my portfolio and keep your feedback</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="glow-text">My Portfolio</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl overflow-hidden hover-glow transition-all duration-300 hover:scale-105 animate-scale-in group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} - Website Development by Akash Nayar`}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs sm:text-sm text-blue-400 font-medium">
                    {project.description}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm">{project.likes}</span>
                  </div>
                </div>
                
                <h4 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-200">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    {project.title}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
