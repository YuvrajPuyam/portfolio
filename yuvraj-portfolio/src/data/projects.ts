// src/data/projects.tsx

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

export const PROJECTS: Project[] = [
  {
    slug: "biup-ai",
    title: "BiUP.ai",
    category: "Car Configurator",
    // FIXED: Added leading slash
    mediaSrc: "/media/projects/pc.mp4",
    mediaType: "video",
    role: "Core Engineer",
    year: "2024 — 2025",
    tools: ["React", "Three.js", "WebGL", "Node.js", "AWS"],
    collaborators: ["BiUP Engineering Team", "Product Managers"],
    liveUrl: "https://www.biup.ai/",
    repoUrl: "https://github.com/YuvrajPuyam", 
    summary:
      "Core engineer on the flagship Car Configurator product, owning features end to end across frontend and backend. Delivered production-grade capabilities for Morrison Garage, Volkswagen, and Škoda.",
    description:
      "This project involved re-engineering the core visualization pipeline for a high-fidelity automotive configurator. The challenge was to deliver photorealistic real-time rendering on the web while maintaining performance across a wide range of consumer devices. I architected the state management system that synchronizes the 3D scene graph with the user interface, ensuring instantaneous feedback for user customizations.\n\nBeyond the frontend, I handled the backend integration for asset delivery, optimizing geometry and texture streaming to reduce load times by 40%. The system was successfully deployed for major automotive clients, handling thousands of concurrent users during product launch events. This work bridged the gap between visual fidelity and web performance.",
    gallery: [
      "/media/projects/biup_1.png", // FIXED
      "/media/projects/biup_2.png"  // FIXED
    ]
  },
  {
    slug: "monte-carlo-ray-tracer",
    title: "Monte Carlo Ray Tracer",
    category: "Built on CUDA",
    mediaSrc: "/media/projects/raytracer.PNG", // FIXED
    mediaType: "image",
    role: "Graphics Engineer",
    year: "2025",
    tools: ["C++", "CUDA", "OptiX", "CMake"],
    collaborators: ["Academic Project"],
    repoUrl: "https://github.com/YuvrajPuyam",
    summary: "Monte Carlo ray tracer built on CUDA (baseline, no BVH yet).",
    description:
      "A physically based renderer implemented from scratch using CUDA to leverage massive parallelism. This project explores the fundamentals of light transport simulation, implementing path tracing with next-event estimation to reduce noise convergence times. The core kernel handles ray generation, intersection testing, and shading in a purely GPU-driven pipeline.\n\nCurrently, the system implements a brute-force approach without Bounding Volume Hierarchies (BVH) to establish a performance baseline. Future iterations will incorporate acceleration structures and importance sampling strategies. The result is a renderer capable of generating global illumination effects, soft shadows, and color bleeding with progressive refinement.",
    gallery: [
      "/media/projects/raytracer_debug.png", // FIXED
      "/media/projects/raytracer_result.png" // FIXED
    ]
  },
  {
    slug: "physics-aware-motion-generation",
    title: "Physics Aware Motion",
    category: "Ideas Lab",
    mediaSrc: "/media/projects/motiongeneration.mp4", // FIXED
    mediaType: "video",
    role: "Graduate Researcher",
    year: "2025 — Present",
    tools: ["Python", "PyTorch", "Mujoco", "Unity"],
    collaborators: ["Ideas Lab", "Prof. Bedrich Benes"],
    summary:
      "Physics-aware human motion generation work tied to Ideas Lab research (in progress).",
    description:
      "This research focuses on generating realistic human motion that adheres to physical constraints, addressing the common issue of 'floating' or sliding artifacts in kinematic-based generation methods. By integrating reinforcement learning with diffusion models, we are developing a framework where characters learn to balance and interact with their environment dynamically.\n\nMy contributions involve setting up the simulation environment in Mujoco and designing the reward functions that penalize physically implausible poses. We are currently experimenting with control policies that allow for text-conditioned motion synthesis, aiming to bridge the gap between generative AI and physically simulated character animation.",
    gallery: [
      "/media/projects/motion_1.png", // FIXED
      "/media/projects/motion_2.png"  // FIXED
    ]
  },
  {
    slug: "differentiable-rasterizer",
    title: "Differentiable Rasterizer",
    category: "Model Reconstruction",
    mediaSrc: "/media/projects/avocado_recon.gif", // FIXED
    mediaType: "image",
    role: "Researcher",
    year: "2025",
    tools: ["Python", "PyTorch3D", "OpenGL", "NumPy"],
    collaborators: ["Coursework"],
    repoUrl: "https://github.com/YuvrajPuyam",
    summary:
      "Differentiable rasterization + inverse rendering for 3D model reconstruction from images.",
    description:
      "An exploration into inverse graphics, this project utilizes differentiable rasterization to reconstruct 3D meshes from 2D reference images. By propagating gradients from the image loss back through the rendering pipeline, the system optimizes mesh vertices and texture maps to match the input target.\n\nThe pipeline allows for single-view and multi-view reconstruction. I implemented custom loss functions to enforce geometric smoothness and prevent artifacts during the optimization process. This work demonstrates the potential of differentiable rendering in bridging the gap between computer vision and computer graphics.",
    gallery: [
      "/media/projects/recon_wireframe.png", // FIXED
      "/media/projects/recon_textured.png"   // FIXED
    ]
  },
  {
    slug: "n-body-particle-simulator",
    title: "N-Body Particle Simulator",
    category: "Simulation",
    mediaSrc: "/media/projects/particle_simulator.mp4", // FIXED
    mediaType: "video",
    role: "Systems Engineer",
    year: "2024",
    tools: ["C++", "Vulkan", "Compute Shaders", "GLSL"],
    collaborators: ["Solo Project"],
    repoUrl: "https://github.com/YuvrajPuyam",
    summary:
      "GPU/compute-driven particle simulation exploring large-scale N-body dynamics.",
    description:
      "A high-performance particle system capable of simulating millions of interacting agents in real-time. The simulation logic is entirely offloaded to the GPU using Compute Shaders, utilizing shared memory to optimize the N-squared complexity of gravitational interactions. \n\nThe renderer uses instanced drawing to visualize the particles efficiently. I implemented various integration schemes, including Velocity Verlet, to ensure energy conservation and stability in the system. This project serves as a testbed for optimizing compute-heavy workloads on modern graphics hardware.",
    gallery: [
      "/media/projects/particles_1.png" // FIXED
    ]
  },
  {
    slug: "forward-by-zs",
    title: "Forward by ZS",
    category: "Web Based Forecasting Suite",
    mediaSrc: "/media/projects/forward.png", // FIXED
    mediaType: "image",
    role: "Full Stack Engineer",
    year: "2022 — 2024",
    tools: ["Angular", "Python", "AWS", "PostgreSQL", "LLMs"],
    collaborators: ["ZS Enterprise Team", "Data Science Team"],
    liveUrl: "https://www.zs.com/",
    summary:
      "Full-stack engineering on FORWARD, ZS’s enterprise forecasting suite; backend services + workflows and LLM integration R&D.",
    description:
      "Worked on the core architecture of FORWARD, a large-scale enterprise forecasting platform used by pharmaceutical giants. My primary focus was on designing scalable backend services that could handle complex data workflows and massive datasets. I optimized API response times and database queries to support real-time analytics dashboards.\n\nIn the latter stages, I led the R&D initiative to integrate Large Language Models (LLMs) into the workflow. This involved building a retrieval-augmented generation (RAG) system to allow users to query their forecasting data using natural language, significantly reducing the barrier to entry for non-technical stakeholders.",
    gallery: []
  },
  {
    slug: "the-gallery-of-computation",
    title: "The Gallery Of Computation",
    category: "Generative Art Platform",
    mediaSrc: "/media/projects/goc.png", // FIXED
    mediaType: "image",
    role: "Solo Developer",
    year: "2023",
    tools: ["React", "p5.js", "Stripe API", "Firebase"],
    collaborators: ["Solo Project"],
    liveUrl: "https://galleryofcomputation.com", 
    summary:
      "E-commerce platform for generative art—design, build, and delivery of a complete web product.",
    description:
      "A dedicated marketplace for generative art, designed to treat algorithmic creations with the same reverence as traditional fine art. I built the entire platform from the ground up, integrating p5.js sketches directly into the product pages to allow for live, interactive previews of the artwork.\n\nThe platform handles user authentication, secure payments via Stripe, and digital asset delivery. The design philosophy focuses on minimalism to let the art take center stage. This project merged my passion for creative coding with full-stack web development.",
    gallery: [
      "/media/projects/goc_mobile.png",   // FIXED
      "/media/projects/goc_checkout.png"  // FIXED
    ]
  },
  {
    slug: "web-based-augmented-reality",
    title: "Web-Based AR",
    category: "3D Spatial Visualization",
    mediaSrc: "/media/projects/ar.png", // FIXED
    mediaType: "image",
    role: "Research Intern",
    year: "2022",
    tools: ["WebXR", "Three.js", "Python", "Colmap"],
    collaborators: ["ISRO Scientists"],
    liveUrl: "https://www.isro.gov.in/",
    summary:
      "Research internship work on web-based AR for interactive 3D visualization, including SfM and 3D model optimization.",
    description:
      "During my time at the Indian Space Research Organisation (ISRO), I worked on democratizing access to complex 3D visualizations. We developed a WebXR-based application that allowed users to view high-fidelity satellite models and terrain data directly in their mobile browsers without requiring specialized apps.\n\nA key component of the work involved processing raw imagery using Structure from Motion (SfM) pipelines to generate 3D assets. I implemented mesh optimization techniques to ensure these assets could render smoothly on mobile devices with limited processing power.",
    gallery: []
  },
  {
    slug: "depth-map-generation-and-refinement",
    title: "Depth Map Refinement",
    category: "Computer Vision",
    mediaSrc: "/media/projects/comparison.png", // FIXED
    mediaType: "image",
    role: "CV Engineer",
    year: "2022",
    tools: ["Python", "OpenCV", "NumPy", "Matplotlib"],
    collaborators: ["Academic Research"],
    repoUrl: "https://github.com/YuvrajPuyam",
    summary:
      "Depth map generation + edge-aware refinement pipeline for sharper boundaries and improved visual quality.",
    description:
      "This project addressed the common issue of noisy boundaries in depth maps generated from stereo vision. I implemented a refinement pipeline using joint bilateral upsampling and edge-aware filtering to align depth discontinuities with color edges in the reference image.\n\nThe algorithm significantly reduced 'bleeding' artifacts at object boundaries, resulting in cleaner point clouds when back-projected into 3D space. The results were quantitatively evaluated against ground truth datasets, showing marked improvement in RMSE metrics.",
    gallery: []
  },
];