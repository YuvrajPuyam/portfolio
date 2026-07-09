import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[#111111] text-white">
      <ScrollToTop />

      <Header
        name="Yuvraj Puyam"
        role="AI Engineer · 3D Vision"
        locationText="West Lafayette, IN"
      />

      {/* Constrained content */}
      <main className="page-container pt-0 pb-0 px-0">
        {children}
      </main>

      {/* Full-width footer background */}
      <Footer />
    </div>
  );
}
