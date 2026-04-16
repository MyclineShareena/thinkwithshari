"use client"

import Image from "next/image"

const projects = [
  {
    title: "Prompt2Mesh",
    year: "2025",
    description: "Multi-agent AI platform on AWS EKS. Type a plain-English sentence and receive a fully modeled, editable 3D Blender file. LangGraph orchestrates the planning, MCP connects agents directly to Blender's tool API, and Claude Vision scores each modeling step from 1 to 10, self-correcting until quality thresholds are met. Reduced manual modeling effort by 60%.",
    tags: ["AWS EKS", "LangGraph", "FastAPI", "Docker", "Kubernetes", "MCP", "Claude Vision"],
    href: "https://github.com/Binary-Insights/Prompt2Mesh",
    image: "/projects/prompt2mesh.gif",
    live: null,
  },
  {
    title: "Prismly",
    year: "2025",
    description: "AI-powered competitive brand intelligence tool using GPT-4o-mini, Jungian brand archetypes, and RSS feeds via n8n on Render. Processes competitor content and surfaces emotional tone, brand archetype patterns, and strategic recommendations. Deployed live on Streamlit. Co-authored a research paper with Professors Nik Bear Brown and Nina Harris on Jungian brand archetype classification.",
    tags: ["GPT-4o-mini", "Streamlit", "n8n", "Python", "OpenAI"],
    href: "https://github.com/MyclineShareena/prismly",
    image: "/projects/prismly.png",
    live: "https://prismly.streamlit.app",
  },
  {
    title: "Project ORBIT",
    year: "2025",
    description: "Containerized RAG intelligence platform on AWS EC2. Airflow orchestrates scraping across 50 companies, Pinecone indexes semantics via OpenAI embeddings, and a FastAPI backend serves private equity due diligence queries through a Streamlit UI. Cut research time by 70%.",
    tags: ["AWS EC2", "Airflow", "Pinecone", "OpenAI", "Docker", "FastAPI"],
    href: "https://github.com/Binary-Insights/Assignment_05",
    image: "/projects/orbit.png",
    live: null,
  },
  {
    title: "Project AURELIA",
    year: "2024",
    description: "SEC XBRL filing parser with a full RAG pipeline. Arelle parses financial filings, Airflow orchestrates the ingestion, FastAPI serves queries, and Pinecone with OpenAI embeddings handles vector search. Retrieved 1,000+ financial concepts with precision at scale.",
    tags: ["FastAPI", "Pinecone", "OpenAI", "Arelle", "AWS", "Airflow"],
    href: "https://github.com/Binary-Insights/Assignment_03",
    image: "/projects/aurelia.png",
    live: null,
  },
  {
    title: "EcoCart",
    year: "2024",
    description: "Solo-built Java and MongoDB e-commerce platform with 8 user roles, MVC architecture, Factory and Observer design patterns, and compound indexing for query optimization. Full authentication, role-based access control, and a product catalog built from scratch.",
    tags: ["Java", "MongoDB", "MVC"],
    href: "https://github.com/MyclineShareena/EcoCart-AED_Final_Project",
    image: "/projects/ecocart.png",
    live: null,
  },
]

function ProjectCard({
  title, year, description, tags, href, image, live,
}: {
  title: string; year: string; description: string; tags: string[]; href: string; image: string; live: string | null
}) {
  return (
    <div className="bg-[#0A2342] border-t-[3px] border-[#00B4D8] rounded-lg overflow-hidden flex flex-col h-full transition-transform duration-200 hover:-translate-y-1">
      <div className="w-full h-48 relative overflow-hidden bg-[#1B2A3B]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={image.endsWith(".gif")}
        />
      </div>
      <div className="p-7 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-heading font-bold text-[18px] text-[#F5F0E8]">{title}</h3>
          <span className="font-body text-[12px] text-[#F5F0E8]/40">{year}</span>
        </div>
        <p className="font-body font-normal text-[15px] text-[#F5F0E8]/75 leading-[1.7] mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="font-body text-[11px] text-[#F4A261] bg-[#F4A261]/15 border border-[#F4A261] rounded px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-auto">
          <a href={href} target="_blank" rel="noopener noreferrer"
            className="font-body font-medium text-[14px] text-[#00B4D8] hover:underline transition-all duration-200">
            GitHub →
          </a>
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer"
              className="font-body font-medium text-[14px] text-[#F4A261] hover:underline transition-all duration-200">
              Live ↗
            </a>
          )}
        </div>
      </div>
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
