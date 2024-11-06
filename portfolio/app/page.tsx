import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import MouseEffect from "@/components/MouseEffect";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
   <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
    <FloatingNav navItems={navItems} />
      <MouseEffect />
      
      <Hero />
      <LogoTicker />
      <RecentProjects />
      <Experience />
      <Footer />
    </div>
   </main>
  );
}
