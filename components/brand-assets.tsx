const colors = [
  { name: "Shari Ink", hex: "#0A2342", textColor: "#F5F0E8" },
  { name: "Shari Deep Space", hex: "#1B2A3B", textColor: "#F5F0E8" },
  { name: "Shari Turquoise", hex: "#00B4D8", textColor: "#0A2342" },
  { name: "Shari Amber", hex: "#F4A261", textColor: "#0A2342" },
  { name: "Shari Parchment", hex: "#F5F0E8", textColor: "#0A2342" },
]

export function BrandAssets() {
  return (
    <section id="brand" className="bg-[#0A2342] py-16 px-6 border-t border-[#1B2A3B]">
      <div className="max-w-6xl mx-auto">
        <p className="font-body font-medium text-[12px] text-[#00B4D8] uppercase tracking-[0.15em] mb-4">
          BRAND SYSTEM
        </p>
        <h2 className="font-heading font-bold text-[28px] md:text-[32px] text-[#F5F0E8] mb-10">
          thinkwithshari — Brand Identity
        </h2>

        {/* Logo display */}
        <div className="mb-10">
          <p className="font-body text-[13px] text-[#F5F0E8]/50 uppercase tracking-widest mb-4">Logotype</p>
          <div className="bg-[#1B2A3B] rounded-lg p-8 inline-block border border-[#1B2A3B]">
            <span className="font-heading text-[36px] font-normal text-[#F5F0E8]">thinkwith</span>
            <span className="font-heading text-[36px] font-bold text-[#00B4D8]">shari</span>
          </div>
        </div>

        {/* Color palette */}
        <div className="mb-10">
          <p className="font-body text-[13px] text-[#F5F0E8]/50 uppercase tracking-widest mb-4">Color Palette</p>
          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <div key={color.hex} className="flex flex-col gap-1">
                <div
                  className="w-24 h-16 rounded-md border border-white/10 flex items-end p-2"
                  style={{ backgroundColor: color.hex }}
                >
                  <span
                    className="font-body text-[10px] font-medium"
                    style={{ color: color.textColor }}
                  >
                    {color.hex}
                  </span>
                </div>
                <span className="font-body text-[11px] text-[#F5F0E8]/60">{color.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div>
          <p className="font-body text-[13px] text-[#F5F0E8]/50 uppercase tracking-widest mb-4">Typography</p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-[#1B2A3B] rounded-lg p-6 flex-1 border border-[#1B2A3B]">
              <p className="font-body text-[11px] text-[#00B4D8] uppercase tracking-widest mb-2">Primary — DM Sans</p>
              <p className="font-heading font-bold text-[28px] text-[#F5F0E8]">Heading Bold</p>
              <p className="font-heading font-normal text-[20px] text-[#F5F0E8]/80">Heading Regular</p>
            </div>
            <div className="bg-[#1B2A3B] rounded-lg p-6 flex-1 border border-[#1B2A3B]">
              <p className="font-body text-[11px] text-[#00B4D8] uppercase tracking-widest mb-2">Secondary — Inter</p>
              <p className="font-body font-normal text-[16px] text-[#F5F0E8]/80 leading-relaxed">
                Body text for paragraphs, labels, and UI elements. Clean, readable, professional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
