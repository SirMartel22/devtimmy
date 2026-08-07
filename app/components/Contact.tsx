"use client";

import React, { useState } from "react";

interface ContactProps {
  id?: string;
  topSubtitleLine1?: string;
  topSubtitleLine2?: string;
  wordmarkLine1?: string;
  wordmarkLine2?: string;
  email?: string;
  phone?: string;
  location?: string;
}

export default function Contact({
  id = "contact",
  topSubtitleLine1 = "FULLSTACK",
  topSubtitleLine2 = "DEVELOPER",
  wordmarkLine1 = "DEV",
  wordmarkLine2 = "TIMMY",
  email = "devtimmyoyin@gmail.com",
  phone = "+234 816 440 4932",
  location = "Ilorin, Nigeria",
}: ContactProps) {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phoneOrMsg, setPhoneOrMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name && !userEmail && !phoneOrMsg) return;

    const formattedMsg = `Hello DevTimmy,\n\nApplication for a project:\nName: ${name}\nEmail: ${userEmail}\nDetails/Phone: ${phoneOrMsg}`;
    const waUrl = `https://wa.me/2348164404932?text=${encodeURIComponent(formattedMsg)}`;

    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id={id}
      className="relative min-h-screen w-full bg-[#EBEBEB] text-[#0A0A0A] flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 box-border overflow-hidden selection:bg-[#0A0A0A] selection:text-[#EBEBEB]"
    >
      {/* Top Header Row */}
      <header className="flex flex-row justify-between items-start w-full text-black font-sans font-bold uppercase tracking-wider text-[12px] sm:text-[13px] md:text-[14px] leading-tight">
        {/* Subtitle: Right on Mobile, Left on Desktop */}
        <div className="flex flex-col text-right md:text-left shrink-0 order-2 md:order-1 pt-1 sm:pt-2">
          <span>{topSubtitleLine1}</span>
          <span>{topSubtitleLine2}</span>
        </div>

        {/* Display Title: Left on Mobile, Right on Desktop */}
        <h1 className="font-display font-black uppercase text-black leading-none tracking-[-0.04em] text-[clamp(2.8rem,10vw,8.5rem)] select-none order-1 md:order-2 text-left md:text-right">
          CONTACT
        </h1>
      </header>

      {/* Middle Form Section */}
      <div className="w-full max-w-7xl mx-auto my-auto py-10 md:py-16">
        <h2 className="font-sans font-extrabold uppercase text-[12px] sm:text-[13px] tracking-[0.15em] text-black mb-8 sm:mb-12 text-left">
          LEAVE AN APPLICATION FOR A PROJECT
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 w-full">
          {/* Inputs Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full items-end">
            {/* Input 1: Name */}
            <div className="flex flex-col w-full">
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent border-b border-black/40 focus:border-black py-2.5 text-sm sm:text-base text-black placeholder:text-black/50 placeholder:lowercase outline-none transition-colors"
              />
            </div>

            {/* Input 2: E-mail */}
            <div className="flex flex-col w-full">
              <input
                type="email"
                placeholder="e-mail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
                className="w-full bg-transparent border-b border-black/40 focus:border-black py-2.5 text-sm sm:text-base text-black placeholder:text-black/50 placeholder:lowercase outline-none transition-colors"
              />
            </div>

            {/* Input 3: Phone / Message */}
            <div className="flex flex-col w-full">
              <input
                type="text"
                placeholder="+234 (081) 6440 4932"
                value={phoneOrMsg}
                onChange={(e) => setPhoneOrMsg(e.target.value)}
                required
                className="w-full bg-transparent border-b border-black/40 focus:border-black py-2.5 text-sm sm:text-base text-black placeholder:text-black/50 placeholder:lowercase outline-none transition-colors"
              />
            </div>
          </div>

          {/* Submit Button Row */}
          <div className="flex justify-end w-full pt-2">
            <button
              type="submit"
              className="bg-[#1A1A1A] text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-full font-sans font-bold uppercase text-[11px] sm:text-[12px] tracking-[0.2em] hover:bg-black transition-all active:scale-95 cursor-pointer shadow-sm"
            >
              {submitted ? "SENT!" : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Footer Row */}
      <footer className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full gap-8 sm:gap-4 mt-auto pt-8 border-t border-black/10">
        {/* Bottom Left: Logo Wordmark */}
        <div className="flex flex-col font-display font-black uppercase text-black leading-[0.82] text-2xl sm:text-3xl tracking-tight select-none">
          <span>{wordmarkLine1}</span>
          <span>{wordmarkLine2}</span>
        </div>

        {/* Bottom Center: Contact Info */}
        <div className="flex flex-col text-[12px] sm:text-[13px] leading-relaxed text-black/80 font-sans text-left">
          <span className="font-bold text-black uppercase tracking-wider text-[11px] mb-0.5">
            Contact info
          </span>
          <a
            href={`mailto:${email}`}
            className="hover:text-black transition-colors"
          >
            {email}
          </a>
          <a
            href="https://wa.me/2348164404932"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            {phone}
          </a>
          <span className="text-black/60">{location}</span>
        </div>

        {/* Bottom Right: Copyright */}
        <div className="text-[11px] sm:text-[12px] text-black/60 font-sans tracking-wider uppercase font-semibold text-left sm:text-right">
          © {wordmarkLine1} {wordmarkLine2} {new Date().getFullYear()}
        </div>
      </footer>
    </section>
  );
}
