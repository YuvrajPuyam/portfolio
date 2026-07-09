import { createBrowserRouter, Link } from "react-router-dom";
import Home from "../pages/home";
import Project from "../pages/project";
import Shell from "../components/layout/shell";

function NotFound() {
  return (
    <Shell>
      <div className="flex flex-col items-center justify-center py-40 text-center">
        <div className="section-kicker mb-4">404</div>
        <h1 className="text-2xl font-medium text-white/90 mb-2">Page not found</h1>
        <p className="body-copy text-white/50 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="highlight-link">
          ← Back home
        </Link>
      </div>
    </Shell>
  );
}

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/work/:slug", element: <Project /> },
  { path: "*", element: <NotFound /> },
]);
