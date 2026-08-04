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

      {/* Unclosable Natural Landscape Modal Overlay with Subtle Gradient */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-black/90 via-[#0E0C09]/90 to-black/90 backdrop-blur-md select-none">

        {/* Subtle Ambient Gold Glow Background */}
        <div className="absolute w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Landscape Modal Card Container with Subtle Gradient */}
        <div className="relative w-full max-w-3xl md:max-w-4xl bg-gradient-to-br from-[#1A1A1A] via-[#121212] to-[#0D0D0D] text-[#E5E5E5] rounded-2xl p-6 sm:p-8 md:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center md:items-center gap-6 sm:gap-8 md:gap-12">

          {/* Left Column: Avatar + Name + Role */}
          <div className="flex flex-col items-center text-center shrink-0 w-full md:w-auto md:min-w-[210px]">
            {/* Image with Solid #F5F5F5 Outline */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#F5F5F5] shadow-xl">
              <Image
                src="/DevTimmy.jpeg"
                alt="DevTimmy"
                width={144}
                height={144}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Name with Dev in #F5F5F5 and Timmy in Gold */}
            <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none mt-4 mb-1">
              <span className="text-[#F5F5F5]">Dev</span>
              <span className="text-[#D4AF37]">Timmy</span>
            </h2>

            {/* Description in #F5F5F5 */}
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#F5F5F5]">
              Software Developer
            </span>
          </div>

          {/* Vertical Divider (Desktop) */}
          <div className="hidden md:block w-[1px] self-stretch bg-white/10 shrink-0" />

          {/* Horizontal Divider (Mobile) */}
          <div className="md:hidden w-full h-[1px] bg-white/10" />

          {/* Right Column: Main Caption */}
          <div className="flex flex-col justify-center flex-1 text-center md:text-left">
            <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#F5F5F0] leading-tight tracking-tight">
              &ldquo;Thank you for stopping by, full portfolio experience coming soon!!!&rdquo;
            </h3>
          </div>

        </div>
      </div>
    </main>
  );
}





