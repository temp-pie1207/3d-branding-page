# Nexus Cybernetics — Futuristic 3D Interactive Brand Experience

<div align="center">

  [![Live Web Demo](https://img.shields.io/badge/Live_Demo-Nexus_3D_Experience-00FFFF?style=for-the-badge&logo=vercel&logoColor=black)](https://3d-branding-page.vercel.app)
  [![React 19](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![Three.js](https://img.shields.io/badge/Three.js-r174-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
  [![React Three Fiber](https://img.shields.io/badge/R3F-v9-white?style=for-the-badge&logo=threedotjs&logoColor=black)](https://docs.pmnd.rs/react-three-fiber)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

  <p align="center">
    <strong>A high-end, cinematic cyberpunk 3D branding experience engineered with React 19 and React Three Fiber. Features an interactive procedural CyberMonolith, NeuralLattice particle physics, a QuantumCore, real-time telemetry HUD, and synthetic Web Audio sound effects.</strong>
  </p>

  <p align="center">
    <a href="https://3d-branding-page.vercel.app"><strong>⚡ Explore Live 3D Experience (Vercel) ↗</strong></a> •
    <a href="https://github.com/temp-pie1207/3d-branding-page">GitHub Repository</a> •
    <a href="https://naman-portfolio-theta.vercel.app">Author Portfolio</a>
  </p>

</div>

---

## ✦ Scene Architecture & Visual Engineering

The 3D stage utilizes React Three Fiber's virtual DOM reconciliation alongside raw Three.js shaders for 60fps performance:

```
                                 ┌─────────────────────────────────┐
                                 │       React 19 Application      │
                                 └────────────────┬────────────────┘
                                                  │
                                                  ▼
                                 ┌─────────────────────────────────┐
                                 │     <CanvasContainer /> (R3F)   │
                                 └────────────────┬────────────────┘
                                                  │
             ┌────────────────────────┬───────────┴───────────┬────────────────────────┐
             ▼                        ▼                       ▼                        ▼
  ┌─────────────────────┐  ┌────────────────────┐  ┌────────────────────┐  ┌─────────────────────┐
  │   <CyberMonolith>   │  │  <NeuralLattice>   │  │   <QuantumCore>    │  │ <BackgroundParticles│
  │ • Emissive neon glow│  │ • 1,500 particles  │  │ • Concentric rings │  │ • Floating cyber-   │
  │ • Mouse tilt matrix │  │ • Dynamic lines    │  │ • Quantum spin math│  │   space ambient dust│
  │ • Holographic rim   │  │ • Proximity springs│  │ • Normal dispersion│  │ • Perspective bloom │
  └─────────────────────┘  └────────────────────┘  └────────────────────┘  └─────────────────────┘
```

---

## ✦ Key Features

- **💠 CyberMonolith 3D Object**: Procedural geometric monolith with metallic roughness, chromatic aberration, pointer-reactive rotational physics, and dynamic lighting highlights.
- **⚡ NeuralLattice Network**: Real-time connected graph simulation dynamically rendering pulses across nodes based on user cursor coordinates.
- **🌌 QuantumCore Orbital Mechanics**: Layered gyro rings reacting to camera angle and scroll progression.
- **🔊 Procedural Web Audio Engine**: Integrated synthetic sound effects engine (`soundEffects.ts`) using the browser's native Web Audio API oscillators — zero external sound file latency.
- **📊 Interactive Telemetry Bento**: High-density editorial Bento grid with live diagnostic metrics, neural speedometers, and quantum encryption readouts.
- **🧪 HoloLab Interactive Playground**: Real-time parameter tweaking allowing visitors to manipulate particle density, glitch intensity, and light hues.
- **💻 Cyberpunk Terminal Contact**: Interactive CLI-style inquiry console with command parsing and animated responses.
- **🎯 Hardware-Accelerated Custom Cursor**: Fluid spring physics cursor with hover-magnetism and neon trail effects.

---

## ✦ Technology Stack

| Layer | Technology | Purpose |
|:---|:---|:---|
| **Core Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Next-generation React concurrency and strict types |
| **3D Rendering** | [Three.js](https://threejs.org/) (r174) | WebGL rendering pipeline |
| **3D React Layer** | [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) & [@react-three/drei](https://github.com/pmndrs/drei) | Declarative Three.js component architecture |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS | Futuristic typography, glassmorphism blur, and grid layouts |
| **Audio** | [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) | Procedural synthetic sound synthesis without external MP3s |
| **Bundler** | [Vite 6](https://vitejs.dev/) | Lightning-fast development and optimized production compilation |
| **Hosting** | [Vercel](https://vercel.com/) | Edge cloud static CDN deployment |

---

## ✦ Getting Started Locally

### Prerequisites
- Node.js 18+ (Node 20+ recommended)
- npm or yarn

### 1. Clone & Install
```bash
git clone https://github.com/temp-pie1207/3d-branding-page.git
cd 3d-branding-page
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Navigate to **`http://localhost:5173`** in any WebGL-capable browser.

### 3. Production Build
```bash
npm run build
```

---

## ✦ Live Production Deployment

This project is deployed live on **Vercel**:

```bash
npx --yes vercel --prod --yes
```

- **Production URL**: [https://3d-branding-page.vercel.app](https://3d-branding-page.vercel.app)

---

## ✦ Author & Contact

**Naman Kashyap**
- 🐙 GitHub: [@temp-pie1207](https://github.com/temp-pie1207)
- 🌐 Echo Portfolio: [naman-portfolio-theta.vercel.app](https://naman-portfolio-theta.vercel.app)
- 💼 Davies Portfolio: [davies-ten.vercel.app](https://davies-ten.vercel.app)
- 💻 LeetCode: [Naman_1207](https://leetcode.com/u/Naman_1207/)
- 📧 Email: [namankashyap484@gmail.com](mailto:namankashyap484@gmail.com)

---

## ✦ License

This project is open-source and released under the [MIT License](LICENSE).
