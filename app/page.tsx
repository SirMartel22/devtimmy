import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { FaEnvelope, FaWhatsapp, FaXTwitter, FaFacebook, FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="w-full">
      <main className="relative min-h-screen w-full bg-[#0A0A0A] flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-[56px] box-border overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#0A0A0A]">
        {/* Top Row */}
        <header className="flex flex-row justify-between items-start w-full text-[#E5E5E5]">
          {/* Top-left: title */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[15px] md:text-[16px] font-bold text-white tracking-tight">
              FULL STACK <br /> DEVELOPER
            </span>
          </div>

          {/* Top-right: author badge */}
          {/* <div className="text-[13px] md:text-[14px] text-[#E5E5E5] text-right font-normal">
            DevTimmy
          </div> */}
        </header>

        {/* Center Section — Display Wordmark */}
        <div className="flex flex-col select-none shrink-0 my-auto mt-16 sm:mt-20 md:mt-24 lg:mt-28 py-12 lg:py-0 mb-16 sm:mb-20 lg:mb-24">
          <h1 className="font-display font-black tracking-[-0.085em] uppercase leading-[0.74] text-[clamp(6rem,20vw,16.5rem)] text-[#525252]">
            DEV
          </h1>
          <h1 className="font-display font-black tracking-[-0.085em] uppercase leading-[0.74] text-[clamp(6rem,20vw,16.5rem)] text-[#EDF5F0] -mt-[0.05em]">
            TIMMY
          </h1>
        </div>

        {/* Bottom Row */}
        <footer className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full gap-6 sm:gap-0 text-[13px] md:text-[14px] text-[#E5E5E5]">
          {/* Bottom Left: Handle & Social Icons */}
          <div className="flex flex-col gap-3">
            {/* <span className="text-[#E5E5E5] font-medium">@devtimmy</span> */}
            <div className="flex flex-row items-center gap-5 text-white">
              <a
                href="mailto:devtimmyoyin@gmail.com"
                title="Email"
                aria-label="Email"
                className="text-white hover:text-[#D4AF37] transition-colors text-xl sm:text-2xl"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://wa.me/2348164404932"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                aria-label="WhatsApp"
                className="text-white hover:text-[#D4AF37] transition-colors text-xl sm:text-2xl"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://x.com/SirMartel_22"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter (X)"
                aria-label="Twitter (X)"
                className="text-white hover:text-[#D4AF37] transition-colors text-xl sm:text-2xl"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61553764657871"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                aria-label="Facebook"
                className="text-white hover:text-[#D4AF37] transition-colors text-xl sm:text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/SirMartel22/"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
                className="text-white hover:text-[#D4AF37] transition-colors text-xl sm:text-2xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* About Me Editorial Section */}
      <AboutMe id="about" />

      {/* Services Editorial Section */}
      <Services id="services" />

      {/* Contact Section & Footer */}
      <Contact id="contact" />
    </div>
  );
}











