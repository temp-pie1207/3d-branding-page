import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { SpectrumTheme, THEMES } from '../types';

interface BackgroundParticlesProps {
  theme: SpectrumTheme;
}

export const BackgroundParticles: React.FC<BackgroundParticlesProps> = ({ theme }) => {
  const groupRef = useRef<THREE.Group>(null);
  const activeTheme = THEMES[theme];

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.03;
      groupRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Background Starfield */}
      <Stars
        radius={50}
        depth={60}
        count={2500}
        factor={3}
        saturation={0.5}
        fade
        speed={1}
      />

      {/* Cyber Shimmer Sparkles in theme colors */}
      <Sparkles
        count={120}
        scale={16}
        size={2.5}
        speed={0.4}
        opacity={0.6}
        color={activeTheme.primary}
      />

      <Sparkles
        count={80}
        scale={12}
        size={3.5}
        speed={0.6}
        opacity={0.5}
        color={activeTheme.accent}
      />
    </group>
  );
};

