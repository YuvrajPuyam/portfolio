import { useState } from "react";
import { Link } from "react-router-dom";
import Shell from "../components/layout/Shell";
import Footer from "../components/layout/Footer";
import { PROJECTS } from "../data/projects";

type ExperienceRow = {
  id: string; // Added for numbering "01", "02", etc.
  team: React.ReactNode; // Changed to ReactNode to allow links
  dates: string;
  desc: React.ReactNode;
};

const EXPERIENCE: ExperienceRow[] = [
  {
    id: "01",
    team: (
      <>
        <a 
          href="https://www.biup.ai/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="highlight-link"
        >
          BiUP.ai
        </a>
        <sup className="highlight-link-sup" aria-hidden="true"></sup>
      </>
    ),
    dates: "2024 — 2025",
    desc: (
      <>
        <p>
          Core engineer on the flagship Car Configurator product, owning features end to end across frontend and backend. 
          Delivered high-impact, production-grade capabilities for automotive clients including{" "}
          <a href="https://mg-configurator.biup.ai/astor" target="_blank" rel="noopener noreferrer" className="highlight-link">
            Morrison Garage
          </a>
          <sup className="highlight-link-sup" aria-hidden="true">↗</sup>,{" "}
          <a href="https://www.vw.com/en.html" target="_blank" rel="noopener noreferrer" className="highlight-link">
            Volkswagen
          </a>
          <sup className="highlight-link-sup" aria-hidden="true">↗</sup>, and{" "}
          <a href="https://www.skoda-auto.com/" target="_blank" rel="noopener noreferrer" className="highlight-link">
            Škoda
          </a>
          <sup className="highlight-link-sup" aria-hidden="true">↗</sup>.
        </p>
      </>
    ),
  },
  {
    id: "02",
    team: (
      <>
        <a 
          href="https://www.zs.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="highlight-link"
        >
          ZS
        </a>
        <sup className="highlight-link-sup" aria-hidden="true"></sup>
      </>
    ),
    dates: "2022 — 2024",
    desc: (
      <>
        <p>
          Full-stack engineer on  {" "}
          <a href="https://www.youtube.com/watch?v=H8nBGqrBSCo" target="_blank" rel="noopener noreferrer" className="highlight-link">
            Forward
          </a><sup className="highlight-link-sup" aria-hidden="true">↗</sup>,{" "} ZS's enterprise forecasting suite, owning backend services and system workflows. 
          Led LLM integration R&D, building AI-powered features for enhanced forecasting, automation, and decision support.
        </p>
      </>
    ),
  },
  {
    id: "03",
    team: (
      <>
        <a 
          href="https://www.isro.gov.in/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="highlight-link"
        >
          Indian Space Research Organisation
        </a>
        <sup className="highlight-link-sup" aria-hidden="true"></sup>
      </>
    ),
    dates: "2022 — 2022",
    desc: (
      <>
        <p>
          Worked on a web-based augmented reality system for interactive 3D visualization. 
          Applied structure-from-motion pipelines and 3D model optimization techniques to improve reconstruction quality and real-time performance.
        </p>
      </>
    ),
  },
];

export default function Home() {
  return (
    <Shell>
      {/* CURTAIN EFFECT PART 1:
        - bg-[#111111]: Matches the requested color.
        - relative z-10: Sits above the footer.
      */}
      <div className="relative z-10 pt-3 bg-[#111111]">
        
        {/* ===== Intro: 12-col grid ===== */}
        <section className="grid-12 px-3">
          {/* ABOUT (6) */}
          <div className="col-span-12 lg:col-span-6 pr-[50px]">
            <div className="section-kicker">About</div>

            <p className="mt-2 body-copy">
              I design software at the intersection of mathematics, performance, and visual experience.
              My interests lie in Artificial Intelligence, Graphics, and High-performance systems, how visual systems are built,
              scaled, and infused with intelligence through rendering and simulation pipelines. <br/><br/> I have Bachelor's Degree in
              Computer Science and am currently pursuing a Master's at Purdue University,
              specializing in Artificial Intelligence for Computer Graphics. Currently researching at{" "}
              <a href="#" className="highlight-link">
                Games Innovation Lab 
              </a><sup className="highlight-link-sup" aria-hidden="true">↗</sup>{" "}
              &{" "}
              <a href="#" className="highlight-link">
                Ideas Lab 
              </a><sup className="highlight-link-sup" aria-hidden="true">↗</sup>
              . If you're exploring ambitious ideas in Visual/Spatial computing or GPU-driven systems, I'd love to connect{" "}
              <a href="#contact" className="highlight-link">
                Get in touch 
              </a><sup className="highlight-link-sup" aria-hidden="true">↗</sup>
              .
            </p>
          </div>

          {/* RIGHT SIDE (6 total): TEAM (2) + DESCRIPTION (4) */}
          <div className="col-span-12 lg:col-span-6">
            {/* Header Row */}
            <div className="grid grid-cols-6 gap-x-4 lg:gap-x-6">
              <div className="col-span-2">
                <div className="section-kicker">Team</div>
              </div>
              <div className="col-span-4">
                <div className="section-kicker">Description</div>
              </div>
            </div>

            {/* Experience Rows */}
            <div className="mt-2 space-y-8">
              {EXPERIENCE.map((r) => (
                <div
                  key={r.id}
                  className="grid grid-cols-6 gap-x-4 lg:gap-x-6 group"
                >
                  {/* TEAM cell (2/6 of right side) */}
                  <div className="col-span-2">
                    {/* Numbering (01, 02...) */}
                    {/* <div className="text-[12px] text-white/40 mb-1 font-mono">{r.id}</div> */}
                    <div className="font-medium text-white/90 content-title">
                      {r.team}
                    </div>
                    <div className="font-medium text-white/90 content-title mt-0.5">
                      {r.dates}
                    </div>
                  </div>

                  {/* DESCRIPTION cell (4/6 of right side) */}
                  <div className="col-span-4 font-medium text-white/90 content-title">
                    {r.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Projects Section ===== */}
        <section className="mt-10 px-3 pb-2"> 
          <div className="masonry">
            {PROJECTS.map((p) => (
              <div key={p.slug} className="masonry-item">
                <ProjectTile
                  title={p.title}
                  category={p.category}
                  to={`/work/${p.slug}`}
                  mediaSrc={p.mediaSrc}
                  mediaType={p.mediaType}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CURTAIN EFFECT PART 2: Sticky Footer */}
      <div className="sticky bottom-0 z-0 w-full">
        <Footer />
      </div>
    </Shell>
  );
}

function ProjectTile({
  title,
  category,
  to,
  mediaSrc,
  mediaType = "image",
}: {
  title: string;
  category: string;
  to: string;
  mediaSrc?: string;
  mediaType?: "image" | "video";
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link
      to={to}
      // UPDATED: bg-[#111111] matches the main background
      className="group block w-full overflow-hidden bg-[#111111] hover:bg-white/[0.06]"
    >
      <div className="relative w-full">
        {/* 1. LOADER STATE */}
        {isLoading && mediaSrc && (
          <div className="flex h-64 w-full items-center justify-center bg-white/5 text-center">
             {/* UPDATED: Cyan text color for "Sci-Fi/AI" look */}
            <div className="font-mono text-xs uppercase tracking-widest text-grey-500/80 animate-pulse">
              &gt; Synthesizing view...
            </div>
          </div>
        )}

        {/* 2. ACTUAL MEDIA */}
        {mediaSrc ? (
          mediaType === "video" ? (
            <video
              src={mediaSrc}
              className={`block w-full h-auto transition-opacity duration-500 ${
                isLoading ? "opacity-0 absolute top-0 h-0" : "opacity-100"
              }`}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onLoadedData={() => setIsLoading(false)} 
            />
          ) : (
            <img
              src={mediaSrc}
              alt={title}
              className={`block w-full h-auto transition-opacity duration-500 ${
                isLoading ? "opacity-0 absolute top-0 h-0" : "opacity-100"
              }`}
              loading="lazy"
              onLoad={() => setIsLoading(false)}
            />
          )
        ) : (
          <div className="h-64 w-full bg-white/5" />
        )}
      </div>

      <div className="p-5">
        <div className="text-[16px] font-medium text-white/90">{title}</div>
        <div className="text-[12px] uppercase tracking-[0.18em] text-white/40">
          {category}
        </div>
      </div>
    </Link>
  );
}