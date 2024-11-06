import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';

const Hero = () => {
  return (
    <div id="home"className="pb-20 pt-36 relative h-screen w-full flex items-center justify-center dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.3]">
      
      {/* Background beams, positioned behind other elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundBeamsWithCollision children={undefined} />
      </div>
      
      {/* Responsive Background Spotlight */}
      <div className="absolute w-full h-full flex justify-center">
      
      <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />





      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white space-y-4 px-4">
        <TextGenerateEffect 
          className="text-xl md:text-7xl lg:text-8xl font-bold"
          words="Vaibhav Malhotra"
        />
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed">
          Hi! I am a passionate software developer specializing in web development with a focus on MERN Stack.
        </p>
        <a href="#about">
          <MagicButton 
            title="Welcome!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Overlay to create radial gradient effect */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle,white,transparent)]" />
    </div>
  );
};

export default Hero;
