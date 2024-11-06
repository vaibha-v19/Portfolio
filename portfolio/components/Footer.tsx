import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer id="footer"className="w-full pt-20 pb-10">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Let's Connect Section */}
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-semibold text-center mb-8">
          Let's <span className="text-purple">Connect!</span>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto tracking-tight md:text-xl my-4 text-center">
          Hi! Feel free to contact me for any inquiries, collaborations, or just to say hello. I am always open to discussing new projects, sharing insights, or exploring opportunities.
        </p>
        <a href="mailto:vaibhavmalhotra122002@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        {/* Added spacing after the button */}
        <div className="my-12" />
      </div>

      {/* Footer Content */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="text-center md:text-left">
          <p className="md:text-base text-sm md:font-normal font-light">
            Vaibhav Malhotra
          </p>
          <p className="md:text-base text-sm md:font-normal font-light">
            Full-Stack Developer | Open to Opportunities
          </p>
        </div>

        <div className="flex mt-4 md:mt-0 items-center md:gap-3 gap-6">
          <a
            href="https://www.linkedin.com/in/vaibhav-malhotra-830945253/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <img src="/link.svg" alt="LinkedIn" width={20} height={20} />
            </div>
          </a>
          <a
            href="https://github.com/vaibha-v19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <img src="/git.svg" alt="GitHub" width={20} height={20} />
            </div>
          </a>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm md:font-normal font-light">
          © 2024 Vaibhav Malhotra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
