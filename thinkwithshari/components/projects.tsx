"use client"

const projects = [
  {
    title: "Prompt2Mesh",
    description: "Multi-agent AI platform on AWS EKS. Converts natural language into editable 3D Blender models using LangGraph, FastAPI, and Claude Vision API. Reduced manual modeling effort by 60%.",
    tags: ["AWS EKS", "LangGraph", "FastAPI", "Docker", "Kubernetes", "MCP"],
    href: "https://github.com/Binary-Insights/Prompt2Mesh",
  },
  {
    title: "Project ORBIT",
    description: "Containerized RAG intelligence platform on AWS EC2. Airflow orchestrates scraping, Pinecone indexes semantics, OpenAI powers retrieval. Cut due-diligence research time by 70% across 50 companies.",
    tags: ["AWS EC2", "Airflow", "Pinecone", "OpenAI", "Docker"],
    href: "https://github.com/Binary-Insights/Assignment_05",
  },
  {
    title: "Project AURELIA",
    description: "SEC filing parser with RAG pipeline. FastAPI serves queries, Pinecone and OpenAI handle vector search. Retrieved 1,000+ financial concepts with precision at scale.",
    tags: ["FastAPI", "Pinecone", "OpenAI", "Arelle", "AWS"],
    href: "https://github.com/Binary-Insights/Assignment_03",
  },
  {
    title: "Prismly",
    description: "AI-powered competitive intelligence tool using GPT-4o-mini, Jungian brand archetypes, and RSS feeds. Deployed live on Streamlit.",
    tags: ["GPT-4o-mini", "Streamlit", "n8n", "Python"],
    href: "https://github.com/MyclineShareena/prismly",
  },
  {
    title: "EcoCart",
    description: "Solo-built Java + MongoDB e-commerce platform with 8 user roles, MVC architecture, Factory and Observer design patterns, compound indexing for query optimization.",
    tags: ["Java", "MongoDB", "MVC"],
    href: "https://github.com/MyclineShareena/EcoCart-AED_Final_Project",
  },
]

function ProjectCard({
  title, description, tags, href,
}: {
  title: string; description: string; tags: string[]; href: string
}) {
  return (
    <div className="bg-[#0A2342] border-t-[3px] border-[#00B4D8] rounded-lg p-7 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1">
      <h3 className="font-heading font-bold text-[18px] text-[#F5F0E8] mb-3">{title}</h3>
      <p className="font-body font-normal text-[15px] text-[#F5F0E8]/75 leading-[1.7] mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="font-body text-[11px] text-[#F4A261] bg-[#F4A261]/15 border border-[#F4A261] rounded px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="font-body font-medium text-[14px] text-[#00B4D8] hover:underline transition-all duration-200 mt-auto">
        View on GitHub →
      </a>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="bg-[#1B2A3B] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-body font-medium text-[12px] text-[#00B4D8] uppercase tracking-[0.15em] mb-4">PROJECTS</p>
        <h2 className="font-heading font-bold text-[28px] md:text-[36px] text-[#F5F0E8] mb-12">
          Production AI systems — built, deployed, documented.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
