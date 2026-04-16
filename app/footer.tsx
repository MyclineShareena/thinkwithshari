export function Footer() {
  return (
    <footer className="bg-[#0A2342] border-t border-[#1B2A3B] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body font-normal text-[13px] text-[#F5F0E8]/40">
          © 2026 thinkwithshari.ai · MyclineShareena John Peter Kennedy · Northeastern University
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://myclineshareena.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[13px] text-[#00B4D8] hover:opacity-75 transition-opacity"
          >
            Substack
          </a>
          <a
            href="https://www.linkedin.com/in/myclineshareena/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[13px] text-[#00B4D8] hover:opacity-75 transition-opacity"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MyclineShareena"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[13px] text-[#00B4D8] hover:opacity-75 transition-opacity"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
