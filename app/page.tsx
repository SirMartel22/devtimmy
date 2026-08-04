import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#0A0A0A] flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-[56px] box-border overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#0A0A0A]">
      {/* Top Row */}
      <header className="flex flex-row justify-between items-start w-full text-[#E5E5E5]">
        {/* Top-left: stacked date and title */}
        <div className="flex flex-col gap-0.5">
          <span className="text-[13px] md:text-[14px] font-normal text-[#E5E5E5]/90 tracking-normal">
            03 August, 2026
          </span>
          <span className="text-[15px] md:text-[16px] font-bold text-white tracking-tight">
            Full-Stack Developer
          </span>
        </div>

        {/* Top-right: author badge */}
        <div className="text-[13px] md:text-[14px] text-[#E5E5E5] text-right font-normal">
          Built By: DevTimmy
        </div>
      </header>

      {/* Center Section — Display Wordmark & Bio Paragraph */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12 w-full my-auto py-12 lg:py-0">
        {/* Display Wordmark */}
        <div className="flex flex-col select-none lg:w-[65%] shrink-0">
          <h1 className="font-display font-black tracking-[-0.085em] uppercase leading-[0.74] text-[clamp(4.8rem,15.5vw,12rem)] text-[#F5F5F0]">
            DEV
          </h1>
          <h1 className="font-display font-black tracking-[-0.085em] uppercase leading-[0.74] text-[clamp(4.8rem,15.5vw,12rem)] text-[#D4AF37] -mt-[0.05em]">
            TIMMY
          </h1>
        </div>

        {/* Right Side Bio Paragraph */}
        <div className="w-full lg:max-w-[290px] xl:max-w-[310px] lg:ml-auto self-start lg:self-center">
          <p className="text-[#E5E5E5] text-[13px] md:text-[14px] leading-[1.65] font-normal text-left">
            I&apos;m a frontend-focused developer moving deeper into backend systems — React, Next.js, Node, and PostgreSQL are my daily tools. I build SaaS tools from real team problems, and turn hackathon weekends into working products. Currently exploring AI integration and statistical computing alongside shipping code.
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <footer className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full gap-6 sm:gap-0 text-[13px] md:text-[14px] text-[#E5E5E5]">
        {/* Bottom Left: Two Columns */}
        <div className="flex flex-row gap-10 sm:gap-12 md:gap-16">
          {/* Column 1 */}
          <div className="flex flex-col leading-snug">
            <span className="text-[#E5E5E5]">@devtimmy</span>
            <span className="text-[#E5E5E5]">devtimmyoyin@gmail.com</span>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col leading-snug">
            <span className="text-[#E5E5E5]">devtimmy.com</span>
            <span className="text-[#E5E5E5]">Ilorin, Nigeria</span>
          </div>
        </div>
      </footer>

      {/* Unclosable Editorial Modal Overlay matching reference image */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md select-none overflow-y-auto">

        {/* Subtle Ambient Gold Glow Background */}
        <div className="absolute w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Modal Card Container with sharp corners */}
        <div className="relative w-full max-w-4xl md:min-h-[480px] lg:min-h-[520px] bg-[#1C1C1C] text-[#E5E5E5] rounded-none pt-8 sm:pt-10 md:pt-16 lg:pt-20 px-0 pb-0 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 overflow-hidden">

          {/* Left Column: Stacked Wordmark (DEV / TIMMY) */}
          <div className="flex flex-col justify-start md:justify-center my-0 md:my-auto select-none w-full md:w-[48%] shrink-0 px-6 sm:px-8 md:pl-3 md:pr-0 text-left items-start">
            <div className="flex flex-col text-left items-start">
              <h1 className="font-display font-black tracking-[-0.085em] uppercase leading-[0.74] text-[clamp(4rem,10.5vw,7.8rem)] text-[#F5F5F0]">
                DEV
              </h1>
              <h1 className="font-display font-black tracking-[-0.085em] uppercase leading-[0.74] text-[clamp(4rem,10.5vw,7.8rem)] text-[#D4AF37] -mt-[0.04em]">
                TIMMY
              </h1>
            </div>
          </div>

          {/* Right Column: Subtopic (Software Developer), Paragraph & Image */}
          <div className="flex flex-col justify-between w-full md:w-[50%] flex-1 self-stretch pt-2 md:pt-2 px-0 md:pl-8 md:pr-0">
            {/* Top Right: Subtopic & Paragraph Text */}
            <div className="flex flex-col gap-3 text-left px-6 sm:px-8 md:pl-0 md:pr-8 mb-6 md:mb-0">
              <span className="text-[14px] sm:text-[16px] md:text-[18px] font-bold tracking-[0.2em] uppercase text-[#F5F5F5]">
                Software Developer
              </span>
              <p className=" text-[14px] sm:text-[14px] md:text-[18px] leading-[1.45] text-[#F5F5F0] tracking-tight">
                Thank you for stopping by. Full portfolio experience coming soon!!!
              </p>
            </div>

            {/* Bottom Right: Image Block (Full width on mobile touching both side edges & bottom) */}
            <div className="relative w-full h-56 sm:h-64 md:h-64 lg:h-72 mt-auto">
              <Image
                src="/DevTimmy.jpeg"
                alt="DevTimmy"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}










