import { Linkedin, Github, Mail } from "lucide-react"

const contactLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mycline-shareena-j-9b8128168/",
  },
  {
    icon: Github,
    label: "MyclineShareena",
    href: "https://github.com/MyclineShareena",
  },
  {
    icon: Mail,
    label: "johnpeterkennedy.m@northeastern.edu",
    href: "mailto:johnpeterkennedy.m@northeastern.edu",
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-[#0A2342] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body font-medium text-[12px] text-[#00B4D8] uppercase tracking-[0.15em] mb-4">
          CONTACT
        </p>
        <h2 className="font-heading font-bold text-[28px] md:text-[36px] text-[#F5F0E8] mb-4">
          {"Let's Connect"}
        </h2>
        <p className="font-body font-normal text-[16px] md:text-[17px] text-[#F5F0E8]/75 mb-10 max-w-xl mx-auto">
          MS Information Systems student at Northeastern University. Incoming Data Science Intern at Ascension Health starting May 2026. Open to full-time AI Engineer and Data Engineer roles from Dec 2026.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-medium text-[16px] text-[#00B4D8] hover:underline transition-all duration-200 flex items-center gap-2 min-h-[44px]"
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/MyclineShareena_Resume.pdf"
          download="MyclineShareena_Resume.pdf"
          className="inline-flex font-heading font-semibold text-[#0A2342] bg-[#00B4D8] px-8 py-3.5 rounded text-base hover:opacity-85 transition-opacity duration-200 min-h-[44px] items-center justify-center"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
