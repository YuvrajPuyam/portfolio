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
      {/* 1. MAIN IMAGE (STICKY BACKGROUND) */}
      <div className="sticky top-0 z-0 w-full h-screen bg-[#111111] overflow-hidden">
        {project.mediaType === "video" ? (
          <video
            src={project.mediaSrc}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={project.mediaSrc}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-30" />
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
                      <p key={index} className={index > 0 ? "mt-6 md:mt-0" : ""}>
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
                    {/* First image (Full Width) */}
                    <div className="w-full bg-white/[0.02]">
                      <img 
                        src={project.gallery[0]} 
                        alt={`${project.title} detail 1`} 
                        className="w-full h-auto opacity-90"
                      />
                      {/* Optional caption if needed, static for now per your template */}
                      <div className="mt-2 text-[11px] text-white/40 tracking-widest uppercase font-mono">
                        Fig 1.1 — Detail View
                      </div>
                    </div>
                    
                    {/* Remaining images (Grid) */}
                    {project.gallery.length > 1 && (
                      <div className="grid grid-cols-2 gap-6">
                        {project.gallery.slice(1).map((imgSrc, i) => (
                          <div key={i}>
                             <img 
                                src={imgSrc}
                                alt={`${project.title} detail ${i + 2}`}
                                className="bg-white/[0.05] aspect-[4/3] w-full object-cover opacity-90"
                             />
                          </div>
                        ))}
                      </div>
                    )}
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