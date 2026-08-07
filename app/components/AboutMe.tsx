import Image from "next/image";

interface AboutMeProps {
  id?: string;
  topSubtitleLine1?: string;
  topSubtitleLine2?: string;
  topRightNameLine1?: string;
  topRightNameLine2?: string;
  bioText?: string;
  imageSrc?: string;
  imageAlt?: string;
  contactHref?: string;
}

export default function AboutMe({
  id,
  topSubtitleLine1 = "FULLSTACK",
  topSubtitleLine2 = "DEVELOPER",
  topRightNameLine1 = "DEV",
  topRightNameLine2 = "TIMMY",
  bioText = "I'm Oluwatimileyin Oyinloye, a software engineer with a strong interest in automation and process optimization, passionate about building scalable digital products that solve real-world problems using modern frontend, backend, and AI technologies.",
  imageSrc = "/DevTimmy.jpeg",
  imageAlt = "About Me",
  contactHref = "https://github.com/SirMartel22/",
}: AboutMeProps) {
  return (
    <section id={id} className="relative min-h-screen w-full bg-[#EBEBEB] text-[#0A0A0A] flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 box-border overflow-hidden selection:bg-[#0A0A0A] selection:text-[#EBEBEB]">
      {/* Top Header Row */}
      <header className="flex flex-row justify-between items-start w-full text-black font-sans font-bold uppercase tracking-wider text-[12px] sm:text-[13px] md:text-[14px] leading-tight">
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

      {/* Center Section: Circular Image + Editorial Bio */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16 my-auto py-8 md:py-12 w-full max-w-7xl mx-auto">
        {/* Left Column: Large Circular Avatar Crop */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] lg:w-[410px] lg:h-[410px] mx-auto lg:mx-0 rounded-full overflow-hidden shrink-0 bg-[#D4D4D4] border border-black/10 shadow-md">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-top filter grayscale contrast-110"
            priority
          />
        </div>

        {/* Middle Column: Bio Paragraph & Contact Link */}
        <div className="flex flex-col gap-6 sm:gap-8 max-w-lg lg:max-w-xl text-left">
          <p className="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px] font-normal leading-[1.55] text-[#1A1A1A] tracking-normal">
            {bioText}
          </p>

          {/* Contact Link with extended arrow */}
          <a
            href={contactHref}
            className="group inline-flex items-center gap-3 sm:gap-4 text-[13px] sm:text-[14px] md:text-[15px] font-extrabold uppercase tracking-[0.18em] text-black hover:opacity-70 transition-opacity w-fit"
          >
            <span>FIND OUT MORE</span>
            <div className="flex items-center">
              <span className="w-16 sm:w-24 md:w-32 h-[1.5px] bg-black inline-block transition-all group-hover:w-20 sm:group-hover:w-28 md:group-hover:w-36" />
              <svg
                className="w-3 h-3 -ml-1 stroke-black fill-none stroke-[2]"
                viewBox="0 0 10 10"
              >
                <path d="M1 5H9M9 5L5 1M9 5L5 9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom Display Typography */}
      <footer className="w-full flex justify-start md:justify-end items-start md:items-end mt-auto pt-6 select-none">
        <h1 className="font-display font-black uppercase text-black leading-[0.78] tracking-[-0.04em] text-[clamp(2.6rem,9.5vw,11.5rem)] text-left md:text-right whitespace-nowrap">
          ABOUT ME
        </h1>
      </footer>
    </section>
  );
}
