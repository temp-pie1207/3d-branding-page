import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ModelMode, SpectrumTheme, THEMES } from '../types';
import { QuantumCore } from './QuantumCore';
import { CyberMonolith } from './CyberMonolith';
import { NeuralLattice } from './NeuralLattice';
import { BackgroundParticles } from './BackgroundParticles';

interface MainSceneProps {
  modelMode: ModelMode;
  theme: SpectrumTheme;
  wireframe: boolean;
  speed: number;
  scrollY: number;
}

export const MainScene: React.FC<MainSceneProps> = ({
  modelMode,
  theme,
  wireframe,
  speed,
  scrollY,
}) => {
  const sceneGroupRef = useRef<THREE.Group>(null);
  const activeTheme = THEMES[theme];

  useFrame((state, delta) => {
    // 1. Mouse Parallax Damping
    if (sceneGroupRef.current) {
      const targetRotX = (state.pointer.y * Math.PI) / 8;
      const targetRotY = (state.pointer.x * Math.PI) / 6;

      sceneGroupRef.current.rotation.x = THREE.MathUtils.damp(
        sceneGroupRef.current.rotation.x,
        targetRotX,
        3.5,
        delta
      );
      sceneGroupRef.current.rotation.y = THREE.MathUtils.damp(
        sceneGroupRef.current.rotation.y,
        targetRotY,
        3.5,
        delta
      );
    }

    // 2. Camera Journey based on scrollY
    // Normalize scroll (0 to 1 based on page height, approx 3000px)
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

    // Interpolate camera position and target
    // Section 1: Hero (scroll 0 - 0.25): model right-shifted or centered
    // Section 2: Architecture (0.25 - 0.5): camera shifts
    // Section 3: HoloLab (0.5 - 0.75): close-up centered
    // Section 4: Contact/Footer (0.75 - 1.0): elevated perspective
    let targetX = 0;
    let targetY = 0;
    let targetZ = 6.2;

    if (scrollProgress < 0.25) {
      // Hero: slightly right so left text has breathing room on desktop
      const p = scrollProgress / 0.25;
      targetX = THREE.MathUtils.lerp(1.2, 0.4, p);
      targetY = THREE.MathUtils.lerp(0.0, -0.3, p);
      targetZ = THREE.MathUtils.lerp(6.2, 6.0, p);
    } else if (scrollProgress < 0.55) {
      // Bento Architecture: offset to left
      const p = (scrollProgress - 0.25) / 0.3;
      targetX = THREE.MathUtils.lerp(0.4, -1.2, p);
      targetY = THREE.MathUtils.lerp(-0.3, 0.2, p);
      targetZ = THREE.MathUtils.lerp(6.0, 5.8, p);
    } else if (scrollProgress < 0.8) {
      // HoloLab: center stage
      const p = (scrollProgress - 0.55) / 0.25;
      targetX = THREE.MathUtils.lerp(-1.2, 0.0, p);
      targetY = THREE.MathUtils.lerp(0.2, 0.0, p);
      targetZ = THREE.MathUtils.lerp(5.8, 5.0, p);
    } else {
      // Telemetry / Terminal: elevate
      const p = (scrollProgress - 0.8) / 0.2;
      targetX = THREE.MathUtils.lerp(0.0, 0.0, p);
      targetY = THREE.MathUtils.lerp(0.0, 0.8, p);
      targetZ = THREE.MathUtils.lerp(5.0, 6.8, p);
    }

    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, targetX, 2.5, delta);
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, targetY, 2.5, delta);
    state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, targetZ, 2.5, delta);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* Dynamic Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.8} color={activeTheme.primary} />
      <pointLight position={[0, 4, 3]} intensity={2.5} color={activeTheme.accent} distance={10} />
      <pointLight position={[0, -4, -3]} intensity={2.0} color={activeTheme.primary} distance={10} />

      {/* Ambient Starfield & Theme Sparkles */}
      <BackgroundParticles theme={theme} />

      {/* Main 3D Interactive Group */}
      <group ref={sceneGroupRef}>
        {modelMode === 'core' && (
          <QuantumCore theme={theme} wireframe={wireframe} speed={speed} />
        )}
        {modelMode === 'monolith' && (
          <CyberMonolith theme={theme} wireframe={wireframe} speed={speed} />
        )}
        {modelMode === 'lattice' && (
          <NeuralLattice theme={theme} wireframe={wireframe} speed={speed} />
        )}
      </group>
    </>
  );
};

