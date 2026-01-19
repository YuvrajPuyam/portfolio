import { Link, useLocation, useNavigate } from "react-router-dom";

type Props = {
  name: string;
  role: string;
  locationText: string;
};

export default function Header({ name, role, locationText }: Props) {
  const nav = useNavigate();
  const loc = useLocation();
  const isProject = loc.pathname.startsWith("/work/");

  return (
    <header className="sticky top-0 z-50 backdrop-blur">
      <div className="page-container">
        <div className="relative grid-12 h-12 items-center text-[14.5px]">
          {/* LEFT — always 6 */}
          <div className="col-span-6 font-medium text-white/90 text-[15.5px]">
            <Link to="/" className="hover:text-white">
              {name}
            </Link>
          </div>

          {/* ROLE — mobile takes remaining 6, md+ is strict 2 */}
          <div className="col-span-6 md:col-span-2 font-medium text-white/90 truncate">
            {role}
          </div>

          {/* RIGHT — hidden on mobile, md+ is strict 4 */}
          <div className="hidden md:block md:col-span-4 font-medium text-white/90 pr-12">
            {locationText}
          </div>

          {/* CROSS — positioned absolutely to far right */}
          {isProject && (
            <button
              onClick={() => nav(-1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 flex-shrink-0 font-bold text-[16px] leading-none rounded px-1.5 py-0.5 hover:text-yellow-400"
              aria-label="Close"
              title="Close"
            >
              ✕
            </button>
          )}
        </div>

        {/* single divider */}
        <div className="h-px w-full bg-white/10" />
      </div>
    </header>
  );
}