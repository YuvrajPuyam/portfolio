// src/data/projects.ts

export type Project = {
  slug: string;
  title: string;
  category: string;

  // Home-grid sort order: 1 = most recent, shown first
  order: number;

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

const ALL_PROJECTS: Project[] = [
  {
    slug: "laplace",
    order: 2,
    title: "Laplace",
    category: "Digital Twin · Agentic AI",
    mediaSrc: withBase("media/projects/laplace.mp4"),
    mediaType: "video",
    role: "Creator & Researcher",
    year: "2025 — Present",
    tools: ["Python", "FastAPI", "MCP", "Claude", "Three.js", "Isaac Sim / PhysX", "USD"],
    collaborators: ["Games Innovation Lab"],
    repoUrl: "https://github.com/YuvrajPuyam/laplace",
    orgUrl: "https://polytechnic.purdue.edu/facilities/games-innovation-laboratory",
    summary:
      "A decision twin for warehouse operations: an AI agent that answers operational questions by running experiments in simulation.",
    description:
      `Laplace is a decision twin for warehouse operations: an AI agent paired with a fast, deterministic simulator that answers operational questions by running experiments instead of guessing. Ask it something like "Should we open a cross-aisle between A3 and A4?" or "How many AMRs do we need to hit our SLA?" and it designs and runs paired, common-random-number experiments in simulation, returning a recommendation where every number traces back to a measured result rather than a guess.

The hero is the digital twin. Built on NVIDIA Isaac Sim / PhysX and USD, Laplace ingests a real warehouse scene, extracts the floor plan, runs the experiment, and renders the resulting robot fleet back into the environment. Physics run headless on a GPU cluster and stream to a browser Three.js viewer. The link is bidirectional, so dragging a station or editing the fleet re-simulates the consequences on the running twin in seconds.

Rigorous, honest measurement is the core. Agent decisions are graded by a held-out harness of known-optimum scenarios, reaching 1.00 decision accuracy and confidence-interval coverage across 228 rollouts versus 0.75 for an LLM-alone baseline. The simulator itself is validated against M/M/c queueing closed forms and byte-for-byte determinism, and its fidelity is bounded against full Isaac / PhysX, with typical per-leg agreement within ~10%. 270+ automated tests; no figure is reported without a traceable source.`,
    gallery: [
      withBase("media/projects/laplace_twin.png"),
      withBase("media/projects/laplace_hero.jpg"),
      withBase("media/projects/laplace_setup.webp"),
      withBase("media/projects/laplace_run.webp"),
    ],
  },

  {
    slug: "bodyplot",
    order: 4,
    title: "BodyPlot",
    category: "Spatial Interaction Analytics",
    mediaSrc: withBase("media/projects/bodyplot.mp4"),
    mediaType: "video",
    role: "Developer",
    year: "2025",
    tools: ["Human3R", "SMPL-X", "PyTorch", "MotionBERT", "FastAPI", "Three.js"],
    collaborators: ["Course Project"],
    repoUrl: "https://github.com/YuvrajPuyam/human3r-sitl",
    summary:
      "Monocular video in, a navigable 3D scene out: body meshes, action labels, and real-time interaction analytics.",
    description:
      `BodyPlot turns a single monocular video (one phone camera or one CCTV feed) into a fully navigable 3D scene with body meshes, per-person action labels, and real-time interaction analytics. No depth sensor, no multi-camera rig, no body-worn sensors.

Built on Human3R, it reconstructs SMPL-X body meshes for every person, a dense colored point cloud of the environment, and the full camera trajectory in a single forward pass. On top of that I built an analytics layer covering proxemics zones, gaze convergence, approach and retreat dynamics, contact scoring, and conversational-group detection, plus a six-class action recognizer, all visualized in a Three.js dashboard with an interactive timeline and a bird's-eye floor heatmap.

Under the hood, a three-stage async pipeline (inference → analytics → serve) runs behind a FastAPI service with live progress streaming. The zero-build React + Three.js viewer streams vertex data as compact Float32 binary, roughly 5× smaller than JSON and immune to Chrome's ~512 MB string limit that full-resolution scenes would otherwise hit.`,
    gallery: [
      withBase("media/projects/bodyplot_dashboard.png"),
      withBase("media/projects/bodyplot_heatmap.png"),
      withBase("media/projects/bodyplot_upload.png"),
    ],
  },

  {
    slug: "human-object-interaction",
    order: 1,
    title: "Human-Object Interaction",
    category: "4D Reconstruction · Research",
    mediaSrc: withBase("media/projects/motiongeneration.mp4"),
    mediaType: "video",
    role: "Graduate Researcher",
    year: "2025 — Present",
    tools: ["PyTorch", "SMPL-X", "Isaac Gym", "Diffusion Models", "3D Reconstruction"],
    collaborators: ["Ideas Lab", "Prerit Gupta"],
    orgUrl: "https://ideas.cs.purdue.edu/",
    summary:
      "One research thread at the Ideas Lab: from physics-aware motion generation to reconstructing human-object interaction from video.",
    description:
      `This is one continuing line of research at the Ideas Lab: teaching machines how humans move, touch, and interact with the physical world.

It began with physics-aware human motion generation, producing stable, realistic motion without reference motion data by enforcing physical constraints directly during optimization. The work involved replicating and extending a reinforcement-learning and diffusion-based single-human framework, then expanding it toward physically consistent two-person interaction.

Generating believable interaction exposed the harder upstream problem: understanding interaction as it actually happens. The current focus is reconstructing humans, objects, and their contact in 3D directly from monocular video. The goal is a single model that recovers the full scene (multiple people, the objects they interact with, and the contact between them) from ordinary video, online and in real time.

The reconstruction work is pre-publication; details intentionally limited.`,
    gallery: [withBase("media/projects/hoi.png")],
  },

  {
    slug: "biup-ai",
    order: 5,
    title: "BiUP.ai Configurator ",
    category: "Immersive Tech",
    mediaSrc: withBase("media/projects/pc.mp4"),
    mediaType: "video",
    role: "Full Stack Engineer",
    year: "2024 — 2025",
    tools: ["GoLang", "React", "Babylon.js", "WebGL","AWS"],
    collaborators: ["Paras Sain", "Rohit Ranjan", "Ram Asheesh Vishvkarma"],
    liveUrl: "https://mg-configurator.biup.ai/astor",
    orgUrl: "https://www.biup.ai/",
    summary:
      "Core engineer on the flagship Car Configurator product, owning features end to end across frontend and backend.",
    description:
      `
At BiUP, I worked as a core engineer on the Car Configurator product, building real-time 3D experiences for automotive clients like MG, Škoda, and Volkswagen. Working in a small, fast-paced team, I learned how production systems are designed, deployed, and iterated on in a startup environment.

I collaborated closely with designers, product managers, and client teams to balance visual quality, performance, and reliability while shipping features across the frontend and backend. The role required moving fluidly between system design, deployment, and real-time rendering, developing a strong sense of ownership over the product. I also built smaller tools like showroom booking systems and internal utilities on the side.

My time at BiUP shaped how I approach building interactive systems with an emphasis on clarity, performance, and close collaboration`,
    gallery: [
      
    ],
  },

  {
    slug: "monte-carlo-ray-tracer",
    order: 8,
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
    slug: "differentiable-rasterizer",
    order: 6,
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
    order: 7,
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
    order: 9,
    title: "Forward by ZS",
    category: "Web Based Forecasting Suite",
    mediaSrc: withBase("media/projects/forward.png"),
    mediaType: "image",
    role: "Full Stack Engineer",
    year: "2022 — 2024",
    tools: ["Angular", "Flask", "AWS", "PostgreSQL", "LLMs"],
    collaborators: ["Anurag Mohta", "Sushant Sachdeva", "Muskan Jain", "Kunal Pal", "..."],
    orgUrl: "https://www.zs.com/",
    summary:
      "Full-stack engineering on FORWARD, ZS’s enterprise forecasting suite.",
    description:
      `FORWARD is a cloud-native forecasting solution developed at ZS Associates that helps organizations modernize forecasting through centralized governance, advanced analytics, and enterprise-grade reporting.

This was my longest-running and highest-impact project at ZS. I worked across the full stack, contributing to:

Angular frontend development for scalable, user-facing workflows

Flask backend services powering forecasting logic and APIs

AWS system architecture, including modernization and performance tuning

Re-implementation and optimization of legacy components integrated into FORWARD

Through architectural redesign and API-level optimizations, I improved concurrency and latency by up to 96%, enabling the platform to scale reliably for high-traffic enterprise use cases.

FORWARD went on to win ZS’s Impact Award and became one of the firm’s most successful and commercially impactful products, used by major clients for large-scale forecasting and planning.`,  
 gallery: [withBase("media/projects/forward2.png"),
  withBase("media/projects/forward3.png"),
 ],
  },

  {
    slug: "the-gallery-of-computation",
    order: 12,
    title: "The Gallery Of Computation",
    category: "E-Commerce Generative Art Platform",
    mediaSrc: withBase("media/projects/gc1.png"),
    mediaType: "image",
    role: "Developer",
    year: "16 Weeks",
    tools: ["Django","HTML/CSS", "p5.js", "PayPal API" ],
    collaborators: ["Raunit Singh"],
    liveUrl: "https://galleryofcomputation.store/",
    repoUrl: "https://github.com/raunit-x/The-Gallery-of-Computation",
    summary:
      "E-commerce platform for generative art: design, build, and delivery.",
    description:
      "Generative art refers to art that in whole or in part has been created with the use of an autonomous system. An autonomous system in this context is generally one that is non-human and can independently determine features of an artwork that would otherwise require decisions made directly by the artist. In some cases the human creator may claim that the generative system represents their own artistic idea, and in others that the system takes on the role of the creator.",
    gallery: [
      withBase("media/projects/shop.png"),
      withBase("media/projects/goc.png"),
    ],
  },

  {
    slug: "web-based-augmented-reality",
    order: 11,
    title: "Web-Based AR",
    category: "3D Spatial Visualization",
    mediaSrc: withBase("media/projects/ar.png"),
    mediaType: "image",
    role: "Research Intern",
    year: "12 weeks",
    tools: ["WebXR", "Blender", "Python", "PyTorch"],
    collaborators: ["Puyam S Singh"],
    orgUrl: "https://www.isro.gov.in/",
    summary:
      "Web-based AR research for interactive 3D visualization.",
    description:
      `At ISRO, I built a web-based AR viewer for 3D terrain models reconstructed from UAV imagery. The system used a Structure-from-Motion pipeline to generate terrain models and displayed them in AR for visualization and analysis. I improved mobile AR performance by 80% through mesh decimation and texture compression in Blender, making the models practical to view on mobile devices.`,
    gallery: [withBase("media/projects/ar2.png"), withBase("media/projects/ar3.png")],
  },

  {
    slug: "depth-map-generation-and-refinement",
    order: 10,
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
    description:`This project implements an edge-aware refinement module for monocular depth estimation. Starting from a baseline depth prediction (Depth Anything V2), the model sharpens object boundaries, corrects spatial inconsistencies, and improves metric accuracy on NYUv2 and KITTI.

The refinement module uses a Conditional Random Field inspired affinity mechanism, where pairwise weights are computed from feature and edge differences to guide edge-aware message passing.`,
    gallery: [],
  },
];

// Most recent first, per each entry's order field
export const PROJECTS: Project[] = [...ALL_PROJECTS].sort(
  (a, b) => a.order - b.order
);
