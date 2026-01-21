import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Project from "../pages/Project";

export const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/work/:slug", element: <Project /> },

    // Optional but recommended: simple 404
    {
      path: "*",
      element: (
        <div style={{ padding: 40 }}>
          <h1>404</h1>
          <p>Page not found</p>
        </div>
      ),
    },
  ],
 
);
