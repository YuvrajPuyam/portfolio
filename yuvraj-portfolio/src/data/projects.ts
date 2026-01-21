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
  orgUrl?: string;

  // Gallery
  gallery?: string[];
};

// Helper to prepend Vite base path (/ in dev, /portfolio/ in prod)
const withBase = (p: string) =>
  `${import.meta.env.BASE_URL}${p.replace(/^\/+/, "")}`;

export const PROJECTS: Project[] = [
  {
    slug: "biup-ai",
    title: "BiUP.ai Configurator ",
    category: "Immersive Tech",
    mediaSrc: withBase("media/projects/pc.mp4"),
    mediaType: "video",
    role: "Full Stack Engineer",
    year: "2024 — 2025",
    tools: ["GoLang", "React", "Babylon.js", "WebGL","AWS"],
    collaborators: ["Paras Sain", "Rohit Ranjan"],
    liveUrl: "https://mg-configurator.biup.ai/astor",
    orgUrl: "https://www.biup.ai/",
    summary:
      "Core engineer on the flagship Car Configurator product, owning features end to end across frontend and backend.",
    description:
      `
At BiUP, I worked as a core engineer on the Car Configurator product, building real-time 3D experiences for automotive clients like MG, Škoda, and Volkswagen. Working in a small, fast-paced team, I learned how production systems are designed, deployed, and iterated on in a startup environment.

I collaborated closely with designers, product managers, and client teams to balance visual quality, performance, and reliability while shipping features across the frontend and backend. The role required moving fluidly between system design, deployment, and real-time rendering, developing a strong sense of ownership over the product. I also built smaller tools like showroom booking systems and internal utilities on the side.

My time at BiUP shaped how I approach building interactive systems with an emphasis on clarity, performance, and close collaboratio`,
    gallery: [
      
    ],
  },

  {
    slug: "monte-carlo-ray-tracer",
    title: "Monte Carlo Ray Tracer",
    category: "Built on CUDA",
    mediaSrc: withBase("media/projects/raytracer.png"),
    mediaType: "image",
    role: "Graphics Engineer",
    year: "4 Weeks",
    tools: ["C++", "CUDA", "CMake"],
    collaborators: ["Academic Project"],
    repoUrl: "https://github.com/YuvrajPuyam/Monte-Carlo-Ray-Tracer-in-Cuda",
    summary: "Monte Carlo ray tracer built on CUDA (baseline, no BVH yet).",
    description:
      `A CUDA-based Monte Carlo ray tracer built from the ground up to simulate realistic light transport on the GPU. The renderer supports high resolution output with up to 128 samples per pixel, enabling physically plausible lighting and global illumination.

The project began as an effort to reduce the runtime of Peter Shirley’s CPU-based ray tracer and evolved into a deeper exploration of GPU programming with CUDA. Through this work, I gained practical insight into parallelism, memory access patterns, and performance tradeoffs involved in GPU-based rendering.`,
    gallery: [
      withBase("media/projects/Ellipsoid.png"),
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
    year: "4 Weeks",
    tools: ["CUDA", "C++" ,"PyTorch"],
    collaborators: ["Coursework"],
    repoUrl: "https://github.com/YuvrajPuyam/Differentiable-Rasterizer-Cuda",
    summary:
      "Differentiable rasterization + inverse rendering for 3D reconstruction.",
    description:
      `A differentiable rasterizer is a rendering system that replaces the hard, discontinuous decisions in traditional rasterization (like visibility tests and triangle coverage) with smooth, gradient-friendly approximations. This allows gradients to flow from pixel-level losses back through the renderer to scene parameters like mesh vertices and camera poses, enabling inverse graphics tasks such as shape reconstruction and pose estimation.

      I built this project as my first step into neural rendering and as a way to bridge traditional graphics with modern machine learning. It also gave me a concrete reason to practice CUDA programming.
      \n\n\n
      I implemented a custom differentiable rasterizer from scratch in CUDA and C++ with a PyTorch interface, building all core components manually: rasterization, camera projection, loss functions, and the optimization loop. The system reconstructs 3D geometry from silhouette images alone using gradient-based optimization on vertex positions.`,
    gallery: [
      withBase("media/projects/tree_recon.gif"),
      withBase("media/projects/kettle_original.png"),
      withBase("media/projects/kettle_recon.gif"),
    ],
  },

  {
    slug: "n-body-particle-simulator",
    title: "N-Body Particle Simulator",
    category: "Simulation",
    mediaSrc: withBase("media/projects/nbody.mp4"),
    mediaType: "video",
    role: "Developer",
    year: "2 weeks",
    tools: ["WebGPU", "Compute Shaders", "WGSL"],
    collaborators: ["Solo Project"],
    repoUrl: "https://github.com/YuvrajPuyam/Gravity-Particle-Simulator-WebGPU",
    summary: "GPU-driven particle simulation exploring N-body dynamics.",
    description:
      `A real-time N-body gravity simulator running entirely on the GPU using WebGPU compute shaders. The simulation calculates gravitational interactions between thousands of particles in parallel, creating spiral galaxy formations around a central mass. Built with interactive controls to adjust particle count, workgroup size, and GPU power preference to explore how different parallelization parameters affect performance.`,
    gallery: [],
  },

  {
    slug: "forward-by-zs",
    title: "Forward by ZS",
    category: "Web Based Forecasting Suite",
    mediaSrc: withBase("media/projects/forward.png"),
    mediaType: "image",
    role: "Full Stack Engineer",
    year: "2022 — 2024",
    tools: ["Angular", "Flask", "AWS", "PostgreSQL", "LLMs"],
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
    category: "E-Commerce Generative Art Platform",
    mediaSrc: withBase("media/projects/gc1.png"),
    mediaType: "image",
    role: "Developer",
    year: "2023",
    tools: ["Django","HTML/CSS", "p5.js", "PayPal API" ],
    collaborators: ["Raunit Singh"],
    liveUrl: "https://galleryofcomputation.com",
    summary:
      "E-commerce platform for generative art — design, build, and delivery.",
    description:
      "Generative art refers to art that in whole or in part has been created with the use of an autonomous system. An autonomous system in this context is generally one that is non-human and can independently determine features of an artwork that would otherwise require decisions made directly by the artist. In some cases the human creator may claim that the generative system represents their own artistic idea, and in others that the system takes on the role of the creator.",
    gallery: [
      withBase("media/projects/shop.png"),
      withBase("media/projects/goc.png"),
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
    gallery: [withBase("media/projects/ar2.png"), withBase("media/projects/ar3.png")],
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
