// FullWidthCard.tsx

import Image from "next/image";
import { BackgroundGradientAnimation } from "./ui/GradientBg";

const FullWidthCard = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-full max-w-screen-lg relative rounded-xl overflow-hidden">
        <BackgroundGradientAnimation
          className="p-8 relative z-10 rounded-xl text-center"
          containerClassName="rounded-xl w-full h-full"
          interactive={false} // Set this to false if interactive effect isn't needed
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Let's Connect!</h2>
          <p className="text-white/70 text-lg mb-8">
            Feel free to reach out on LinkedIn or check out my GitHub for projects and collaborations.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/your-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300"
              aria-label="LinkedIn"
            >
              <Image src="/link.svg" alt="LinkedIn" width={40} height={40} />
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300"
              aria-label="GitHub"
            >
              <Image src="/git.svg" alt="GitHub" width={40} height={40} />
            </a>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </div>
  );
};

export default FullWidthCard;
