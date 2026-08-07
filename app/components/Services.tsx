import Image from "next/image";

export interface ServiceItem {
  id: string;
  title: string;
  action1Text?: string;
  action2Text?: string;
  bookHref?: string;
}

interface ServicesProps {
  id?: string;
  topSubtitleLine1?: string;
  topSubtitleLine2?: string;
  topRightNameLine1?: string;
  topRightNameLine2?: string;
  tags?: string[];
  servicesList?: ServiceItem[];
  bannerImageSrc?: string;
}

export default function Services({
  id,
  topSubtitleLine1 = "FULLSTACK",
  topSubtitleLine2 = "DEVELOPER",
  topRightNameLine1 = "DEV",
  topRightNameLine2 = "TIMMY",
  tags = [
    "FRONTEND DEVELOPMENT",
    "BACKEND DEVELOPMENT",
    "WORDPRESS DEVELOPMENT",
    "ECOMMERCE DEVELOPMENT",
    "SEARCH ENGINE OPTIMIZATION",
    "FULL STACK WEB DEVELOPMENT",
  ],
  servicesList = [
    {
      id: "1",
      title: "SOFTWARE DEVELOPMENT",
      action1Text: "WANT TO FIND OUT MORE?",
      action2Text: "REACH OUT ->",
      bookHref: "https://wa.me/2348164404932",
    },
  ],
  bannerImageSrc = "/services-software.jpeg",
}: ServicesProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen w-full bg-[#0A0A0A] text-white flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 pb-0 sm:pb-0 md:pb-0 lg:pb-0 box-border overflow-hidden selection:bg-white selection:text-[#0A0A0A]"
    >
      {/* Top Header Row */}
      <header className="flex flex-row justify-between items-start w-full text-white font-sans font-bold uppercase tracking-wider text-[12px] sm:text-[13px] md:text-[14px] leading-tight">
        {/* Top Left: Subtitle */}
        <div className="flex flex-col">
          <span>{topSubtitleLine1}</span>
          <span>{topSubtitleLine2}</span>
        </div>

        {/* Top Right: Name */}
        <div className="flex flex-col text-right">
          <span>{topRightNameLine1}</span>
          <span>{topRightNameLine2}</span>
        </div>
      </header>

      {/* Middle Grid */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 lg:gap-16 my-auto pt-6 sm:pt-8 pb-6 sm:pb-12 w-full max-w-7xl mx-auto">
        {/* Left Side: Tags & Display Heading */}
        <div className="flex flex-col justify-between h-full text-left">
          {/* Hashtags / Badges */}
          <div className="flex flex-col text-left font-sans font-bold uppercase tracking-wider text-[10px] sm:text-[12px] md:text-[13px] leading-relaxed text-white/80 space-y-0.5 sm:space-y-1 max-w-sm">
            {tags.map((tag, idx) => (
              <span key={idx}># {tag}</span>
            ))}
          </div>

          {/* Display Heading */}
          <h1 className="font-display font-black uppercase text-white leading-[0.78] tracking-[-0.04em] text-[clamp(2.6rem,10vw,10.5rem)] text-left mt-6 sm:mt-12 lg:mt-16 select-none whitespace-nowrap">
            SERVICES
          </h1>
        </div>

        {/* Right Side: Service Item */}
        <div className="flex flex-col gap-4 w-full lg:w-[420px] shrink-0 pt-2 lg:pt-0 text-left">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="flex flex-col gap-2.5 sm:gap-3 pb-4 sm:pb-6 border-b border-white/20 text-left"
            >
              <h3 className="text-[20px] sm:text-[28px] md:text-[36px] font-extrabold uppercase tracking-wide text-white leading-tight text-left">
                {service.title}
              </h3>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 text-[11px] sm:text-[13px] font-bold uppercase tracking-widest text-white/90 mt-1 text-left">
                <span className="text-white/70">{service.action1Text}</span>
                <a
                  href={service.bookHref || "https://wa.me/2348164404932"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 border-b border-white pb-0.5 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors text-white"
                >
                  <span>{service.action2Text}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wide Banner Image (Full Viewport Width) */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 h-56 sm:h-72 md:h-96 lg:h-[450px] mt-auto overflow-hidden border-t border-white/10">
        <Image
          src={bannerImageSrc}
          alt="Services Banner"
          fill
          className="object-cover object-center filter brightness-95 contrast-105"
          priority
        />
      </div>
    </section>
  );
}
