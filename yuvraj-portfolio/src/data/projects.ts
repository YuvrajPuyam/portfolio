// src/data/projects.ts

export type Project = {
  slug: string;
  title: string;
  category: string;

  // Hero Media
  mediaSrc: string;
  mediaType: "image" | "video";

  // Content
  summary: string;
  description: string;

  // Metadata
  role: string;
  year: string;
  tools: string[];
  collaborators: string[];

  // Links
  liveUrl?: string;
  repoUrl?: string;

  // Gallery
  gallery?: string[];
};

// Helper to prepend Vite base path (/ in dev, /portfolio/ in prod)
const withBase = (p: string) =>
  `${import.meta.env.BASE_URL}${p.replace(/^\/+/, "")}`;

export const PROJECTS: Project[] = [
  {
    slug: "biup-ai",
    title: "BiUP.ai",
    category: "Car Configurator",
    mediaSrc: withBase("media/projects/pc.mp4"),
    mediaType: "video",
    role: "Core Engineer",
    year: "2024 — 2025",
    tools: ["React", "Three.js", "WebGL", "Node.js", "AWS"],
    collaborators: ["BiUP Engineering Team", "Product Managers"],
    liveUrl: "https://www.biup.ai/",
    repoUrl: "https://github.com/YuvrajPuyam",
    summary:
      "Core engineer on the flagship Car Configurator product, owning features end to end across frontend and backend.",
    description:
      "This project involved re-engineering the core visualization pipeline for a high-fidelity automotive configurator.\n\nBeyond the frontend, I handled backend integration for asset delivery, optimizing geometry and texture streaming.",
    gallery: [
      withBase("media/projects/biup_1.png"),
      withBase("media/projects/biup_2.png"),
    ],
  },

  {
    slug: "monte-carlo-ray-tracer",
    title: "Monte Carlo Ray Tracer",
    category: "Built on CUDA",
    mediaSrc: withBase("media/projects/raytracer.png"),
    mediaType: "image",
    role: "Graphics Engineer",
    year: "2025",
    tools: ["C++", "CUDA", "OptiX", "CMake"],
    collaborators: ["Academic Project"],
    repoUrl: "https://github.com/YuvrajPuyam",
    summary: "Monte Carlo ray tracer built on CUDA (baseline, no BVH yet).",
    description:
      "A physically based renderer implemented from scratch using CUDA to leverage massive parallelism.\n\nFuture iterations will incorporate acceleration structures.",
    gallery: [
      withBase("media/projects/raytracer_debug.png"),
      withBase("media/projects/raytracer_result.png"),
    ],
  },

  {
    slug: "physics-aware-motion-generation",
    title: "Physics Aware Motion",
    category: "Ideas Lab",
    mediaSrc: withBase("media/projects/motiongeneration.mp4"),
    mediaType: "video",
    role: "Graduate Researcher",
    year: "2025 — Present",
    tools: ["Python", "PyTorch", "Mujoco", "Unity"],
    collaborators: ["Ideas Lab", "Prof. Bedrich Benes"],
    summary: "Physics-aware human motion generation research.",
    description:
      "This research focuses on generating realistic human motion that adheres to physical constraints.\n\nWork involves reinforcement learning and diffusion models.",
    gallery: [
      withBase("media/projects/motion_1.png"),
      withBase("media/projects/motion_2.png"),
    ],
  },

  {
    slug: "differentiable-rasterizer",
    title: "Differentiable Rasterizer",
    category: "Model Reconstruction",
    mediaSrc: withBase("media/projects/avocado_recon.gif"),
    mediaType: "image",
    role: "Researcher",
    year: "2025",
    tools: ["Python", "PyTorch3D", "OpenGL", "NumPy"],
    collaborators: ["Coursework"],
    repoUrl: "https://github.com/YuvrajPuyam",
    summary:
      "Differentiable rasterization + inverse rendering for 3D reconstruction.",
    description:
      "Inverse graphics pipeline using differentiable rasterization.\n\nSupports single and multi-view reconstruction.",
    gallery: [
      withBase("media/projects/recon_wireframe.png"),
      withBase("media/projects/recon_textured.png"),
    ],
  },

  {
    slug: "n-body-particle-simulator",
    title: "N-Body Particle Simulator",
    category: "Simulation",
    mediaSrc: withBase("media/projects/particle_simulator.mp4"),
    mediaType: "video",
    role: "Systems Engineer",
    year: "2024",
    tools: ["C++", "Vulkan", "Compute Shaders", "GLSL"],
    collaborators: ["Solo Project"],
    repoUrl: "https://github.com/YuvrajPuyam",
    summary: "GPU-driven particle simulation exploring N-body dynamics.",
    description:
      "High-performance particle simulation entirely offloaded to the GPU.\n\nUses compute shaders and instanced rendering.",
    gallery: [withBase("media/projects/particles_1.png")],
  },

  {
    slug: "forward-by-zs",
    title: "Forward by ZS",
    category: "Web Based Forecasting Suite",
    mediaSrc: withBase("media/projects/forward.png"),
    mediaType: "image",
    role: "Full Stack Engineer",
    year: "2022 — 2024",
    tools: ["Angular", "Python", "AWS", "PostgreSQL", "LLMs"],
    collaborators: ["ZS Enterprise Team", "Data Science Team"],
    liveUrl: "https://www.zs.com/",
    summary:
      "Full-stack engineering on FORWARD, ZS’s enterprise forecasting suite.",
    description:
      "Designed scalable backend services and led LLM integration R&D.\n\nBuilt retrieval-augmented generation workflows.",
    gallery: [],
  },

  {
    slug: "the-gallery-of-computation",
    title: "The Gallery Of Computation",
    category: "Generative Art Platform",
    mediaSrc: withBase("media/projects/goc.png"),
    mediaType: "image",
    role: "Solo Developer",
    year: "2023",
    tools: ["React", "p5.js", "Stripe API", "Firebase"],
    collaborators: ["Solo Project"],
    liveUrl: "https://galleryofcomputation.com",
    summary:
      "E-commerce platform for generative art — design, build, and delivery.",
    description:
      "Marketplace for algorithmic art with live previews.\n\nIntegrated payments and digital asset delivery.",
    gallery: [
      withBase("media/projects/goc_mobile.png"),
      withBase("media/projects/goc_checkout.png"),
    ],
  },

  {
    slug: "web-based-augmented-reality",
    title: "Web-Based AR",
    category: "3D Spatial Visualization",
    mediaSrc: withBase("media/projects/ar.png"),
    mediaType: "image",
    role: "Research Intern",
    year: "2022",
    tools: ["WebXR", "Three.js", "Python", "Colmap"],
    collaborators: ["ISRO Scientists"],
    liveUrl: "https://www.isro.gov.in/",
    summary:
      "Web-based AR research for interactive 3D visualization.",
    description:
      "Developed WebXR-based visualization tools.\n\nHandled SfM pipelines and mesh optimization.",
    gallery: [],
  },

  {
    slug: "depth-map-generation-and-refinement",
    title: "Depth Map Refinement",
    category: "Computer Vision",
    mediaSrc: withBase("media/projects/comparison.png"),
    mediaType: "image",
    role: "CV Engineer",
    year: "2022",
    tools: ["Python", "OpenCV", "NumPy", "Matplotlib"],
    collaborators: ["Academic Research"],
    repoUrl: "https://github.com/YuvrajPuyam",
    summary:
      "Depth map generation + edge-aware refinement pipeline.",
    description:
      "Reduced boundary artifacts using joint bilateral upsampling.\n\nImproved RMSE against ground truth datasets.",
    gallery: [],
  },
];
