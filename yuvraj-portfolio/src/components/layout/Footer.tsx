type Props = {
  version?: string;
};

export default function Footer({ version = "v1.0.0" }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-16 bg-neutral-900  flex flex-col justify-end">
      <div className="page-container w-full">
        {/* Top divider */}
        <div className="h-px w-full bg-white/10" />

        <div className="grid-12 py-20 text-[14.5px]">
          {/* LEFT — Version & Copyright — col-span-6 */}
          <div className="col-span-12 md:col-span-6 space-y-2 mb-6 md:mb-0">
            {/* UPDATED: font-light (thinner) and tracking-widest (spaced out) */}
            <div className="font-light text-[14px]">
              <span className="inline-block border border-amber-400 rounded-full px-4 py-1 text-amber-400 tracking-widest">
                {version}
              </span>
            </div>
            <div className="text-white/60 text-[13px]">
              LAST UPDATED {currentYear}-12-31
            </div>
          </div>

          {/* MIDDLE — Links — col-span-2 */}
          <div className="col-span-12 md:col-span-2 space-y-2 mb-6 md:mb-0">
            <div>
              <a
                href="https://www.are.na/"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                Reading
              </a>
              <sup className="highlight-link-sup" aria-hidden="true">↗</sup>
            </div>
            
            <div>
              <a
                href="https://www.linkedin.com/in/yuvraj-puyam-3066b513b/"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                LinkedIn
              </a>
              <sup className="highlight-link-sup" aria-hidden="true">↗</sup>
            </div>

            <div>
              <a
                href="https://github.com/YuvrajPuyam"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                GitHub
              </a>
              <sup className="highlight-link-sup" aria-hidden="true">↗</sup>
            </div>
          </div>

          {/* RIGHT — Contact — col-span-4 */}
          <div className="col-span-12 md:col-span-4 space-y-2">
            <div className="font-medium text-white/90">
              Let's build something together.
            </div>
            <div>
              <a
                href="mailto:ypuyam@purdue.edu"
                className="highlight-link"
              >
                ypuyam@purdue.edu
              </a>
              <sup className="highlight-link-sup" aria-hidden="true">↗</sup>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}