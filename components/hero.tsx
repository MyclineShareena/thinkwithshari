export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0A2342] flex flex-col items-center justify-center px-6 pt-20 relative"
    >
      <div className="text-center max-w-3xl mx-auto">
        {/* Name */}
        <h1 className="font-heading font-bold text-[#F5F0E8] text-[40px] md:text-[64px] leading-tight">
          MyclineShareena
        </h1>

        {/* Role */}
        <p className="font-heading font-normal text-[#00B4D8] text-[16px] md:text-[22px] tracking-[0.1em] uppercase mt-4">
          AI ENGINEER · thinkwithshari.ai
        </p>

        {/* Description */}
        <p className="font-body font-normal text-[#F5F0E8]/80 text-[16px] md:text-[18px] max-w-[600px] mx-auto mt-6 leading-relaxed">
          I close the gap between raw data and production AI — architecting
          orchestration, building pipelines, deploying systems on AWS.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="font-heading font-semibold text-[#0A2342] bg-[#00B4D8] px-8 py-3.5 rounded text-base hover:opacity-85 transition-opacity duration-200 min-h-[44px] flex items-center justify-center"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="font-heading font-semibold text-[#00B4D8] border-[1.5px] border-[#00B4D8] px-8 py-3.5 rounded text-base hover:opacity-85 transition-opacity duration-200 min-h-[44px] flex items-center justify-center"
          >
            {"Let's Connect"}
          </a>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#00B4D8]/20" />
    </section>
  )
}
