
import AboutHeader from './about/AboutHeader';
import AboutJourney from './about/AboutJourney';
import AboutProfile from './about/AboutProfile';
import AboutSkills from './about/AboutSkills';

const About = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden px-4 sm:px-6" id="about">
      <div className="container mx-auto">
        <AboutHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <AboutJourney />
          <AboutProfile />
        </div>

        <AboutSkills />
      </div>
    </section>
  );
};

export default About;
