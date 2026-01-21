import { useParams } from "react-router-dom";
import Shell from "../components/layout/Shell";
import Footer from "../components/layout/Footer";
import { PROJECTS } from "../data/projects";



export default function Project() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Shell>
        <div className="pt-32 text-center text-white/50 font-light">
          Project not found.
        </div>
      </Shell>
    );
  }

  // Helper to process the description into paragraphs
  // Falls back to summary if description isn't present
  const descriptionParagraphs = project.description
    ? project.description.split("\n\n")
    : [project.summary];

  return (
    <Shell>
{/* FULL-WIDTH HERO — NO SHADOW / NO FADE */}
<div className="relative left-1/2 right-1/2 w-full -ml-[50vw] -mr-[50vw] overflow-hidden bg-[#111111]">
  <div className="relative aspect-[16/9]">
    {project.mediaType === "video" ? (
      <video
        src={project.mediaSrc}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    ) : (
      <img
        src={project.mediaSrc}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
    )}
  </div>
</div>




      {/* 2. MAIN CONTENT (SCROLLING CURTAIN) */}
      <div className="relative z-10 bg-[#111111]">
        {/* Spacer to allow media to show initially */}
        <div />
        
        <div className="bg-[#111111] pb-32 shadow-2xl">
          <div className="page-container pt-12 md:pt-20">
            <div className="grid-12 items-start">
              
              {/* === LEFT COLUMN: Sticky Header === */}
              <div className="col-span-12 md:col-span-3 h-full mb-12 md:mb-0">
                <div className="md:sticky md:top-20 space-y-4">
                  <h1 className="text-2xl font-medium text-white/90">
                    {project.title}
                  </h1>
                  <div className="section-kicker">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* === RIGHT CONTENT AREA === */}
              <div className="col-span-12 md:col-span-9">
                
                {/* Description */}
                <div className="md:columns-2 gap-x-12 mb-20">
                  <div className="body-copy">
                    {descriptionParagraphs.map((paragraph, index) => (
                      <p key={index} className="mb-6 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 border-t border-white/10 pt-10 mb-20">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="section-kicker mb-3">Role</div>
                      <div className="content-title text-white/90">{project.role}</div>
                    </div>
                    <div>
                      <div className="section-kicker mb-3">Collaborators</div>
                      <ul className="space-y-1">
                        {project.collaborators.map((name, i) => (
                          <li key={i} className="content-title text-white/90">{name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="section-kicker mb-3">Duration</div>
                      <div className="content-title text-white/90">{project.year}</div>
                    </div>
                    <div>
                      <div className="section-kicker mb-3">Tools</div>
                      <ul className="space-y-1">
                        {project.tools.map((tool, i) => (
                          <li key={i} className="content-title text-white/90">{tool}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                {(project.liveUrl || project.repoUrl) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-32">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="group flex items-center justify-between border-b border-white/20 py-4 hover:border-white transition-colors"
                      >
                        <span className="section-kicker text-white/90">Open Live Site</span>
                        <sup className="highlight-link-sup group-hover:text-amber-400">↗</sup>
                      </a>
                    )}
                    
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="group flex items-center justify-between border-b border-white/20 py-4 hover:border-white transition-colors"
                      >
                        <span className="section-kicker text-white/90">Read Case Study</span>
                        <sup className="highlight-link-sup group-hover:text-amber-400">↗</sup>
                      </a>
                    )}
                  </div>
                )}

                {/* More Images / Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-12">
                  {project.gallery.map((imgSrc, i) => (
                    <div key={i} className="w-full bg-white/[0.02]">
                      <img
                        src={imgSrc}
                        alt={`${project.title} detail ${i + 1}`}
                        className="w-full h-auto opacity-90"
                      />
                      <div className="mt-2 text-[11px] text-white/40 tracking-widest uppercase font-mono">
                        Fig {i + 1}.0 — Detail View
                      </div>
                    </div>
                  ))}
                </div>
              )}


              </div>
            </div>
          </div>
        </div>

        {/* 3. Footer (Part of same z-10 layer) */}
        <div className="bg-[#111111]">
          <Footer />
        </div>
      </div>
    </Shell>
  );
}