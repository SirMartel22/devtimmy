export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0A0A0A] flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-[56px] box-border overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#0A0A0A]">
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
    </main>
  );
}

