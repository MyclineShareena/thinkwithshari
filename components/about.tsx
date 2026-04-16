import Image from "next/image"

const skills = [
  "Python", "AWS", "Databricks", "LangGraph", "FastAPI", "Docker",
  "Kubernetes", "Pinecone", "OpenAI API", "SQL", "Apache Airflow",
  "Azure", "Streamlit", "Java", "LangChain", "Anthropic API",
]

export function About() {
  return (
    <section id="about" style={{ backgroundColor: "#F5F0E8" }} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-body font-medium text-[12px] uppercase tracking-[0.15em] mb-4" style={{ color: "#00B4D8" }}>
          ABOUT
        </p>
        <h2 className="font-heading font-bold text-[28px] md:text-[36px] mb-12" style={{ color: "#0A2342" }}>
          Building where cloud, data, and AI intersect.
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-[200px] flex-shrink-0">
            <div className="rounded-xl overflow-hidden w-[200px] h-[240px] relative" style={{ border: "2px solid #00B4D8" }}>
              <Image
                src="/shari-photo.jpeg"
                alt="MyclineShareena"
                fill
                className="object-cover object-top"
                sizes="200px"
              />
            </div>
          </div>
          <div className="lg:w-[50%]">
            <p className="font-body font-normal text-[16px] md:text-[17px] leading-[1.8]" style={{ color: "#0A2342" }}>
              {"I'm MyclineShareena, an MS Information Systems student at Northeastern University graduating May 2027 and an AI Engineer who designs and ships production-grade intelligent systems. Before my MS, I spent 1.5 years as a Data Analyst at BankBazaar, building ETL pipelines and automation workflows for India's largest financial marketplace. I own the full stack: orchestration, pipeline, deployment."}
            </p>
            <p className="font-body font-normal text-[16px] md:text-[17px] leading-[1.8] mt-4" style={{ color: "#0A2342" }}>
              {"I started in electronics engineering in Chennai and followed the signal wherever it pointed toward systems that could think rather than just process. That path led me to LangGraph, multi-agent orchestration, and building tools that close the gap between raw data and useful decisions. I'm interning at Ascension Health's Data Science Institute starting May 2026."}
            </p>
          </div>
          <div className="lg:w-[30%]">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-heading font-medium text-[13px] rounded-[20px] px-3.5 py-1.5"
                  style={{ color: "#0A2342", border: "1.5px solid #0A2342", backgroundColor: "transparent" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
