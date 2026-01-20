import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-white ">
      <ScrollToTop />
      <Header
        name="Yuvraj Puyam"
        role="Graphics & AI Engineer"
        locationText="West Lafayette, IN"
      />
      <main className="page-container py-5 px-0 pb-0 pt-0 bg-[#111111]" >{children}</main>
    </div>
  );
}
