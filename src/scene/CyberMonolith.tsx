import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { SpectrumTheme, THEMES } from '../types';

interface CyberMonolithProps {
  theme: SpectrumTheme;
  wireframe: boolean;
  speed: number;
}

export const CyberMonolith: React.FC<CyberMonolithProps> = ({ theme, wireframe, speed }) => {
  const monolithRef = useRef<THREE.Mesh>(null);
  const corePrismRef = useRef<THREE.Mesh>(null);
  const haloGroupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const activeTheme = THEMES[theme];

  useFrame((state, delta) => {
    const s = speed * delta;
    if (monolithRef.current) {
      monolithRef.current.rotation.y += s * 0.5;
    }
    if (corePrismRef.current) {
      corePrismRef.current.rotation.y -= s * 0.8;
      const t = state.clock.getElapsedTime();
      corePrismRef.current.position.y = Math.sin(t * 3 * speed) * 0.15;
    }
    if (haloGroupRef.current) {
      haloGroupRef.current.rotation.z += s * 0.4;
      haloGroupRef.current.rotation.x += s * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += s * 0.3;
      ringRef.current.rotation.y += s * 0.4;
    }
  });

  return (
    <group>
      <Float speed={2 * speed} rotationIntensity={0.6} floatIntensity={0.8}>
        {/* Outer Hexagonal Obelisk */}
        <mesh ref={monolithRef} scale={[1.2, 2.6, 1.2]}>
          <cylinderGeometry args={[0.8, 1.1, 2.4, 6]} />
          <meshPhysicalMaterial
            color={wireframe ? activeTheme.primary : '#0c1020'}
            emissive={activeTheme.emissive}
            emissiveIntensity={wireframe ? 0.8 : 0.25}
            roughness={0.1}
            metalness={0.9}
            transmission={wireframe ? 0 : 0.75}
            ior={1.6}
            thickness={1.5}
            wireframe={wireframe}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Inner Floating Energy Diamond */}
        <mesh ref={corePrismRef} scale={[0.65, 1.3, 0.65]}>
          <octahedronGeometry />
          <meshStandardMaterial
            color={activeTheme.accent}
            emissive={activeTheme.primary}
            emissiveIntensity={2.0}
            wireframe={wireframe}
            roughness={0.1}
            metalness={1.0}
          />
        </mesh>

        {/* Floating Cyber Rings */}
        <mesh ref={ringRef} position={[0, 0, 0]}>
          <torusGeometry args={[2.2, 0.02, 16, 64]} />
          <meshStandardMaterial
            color={activeTheme.primary}
            emissive={activeTheme.primary}
            emissiveIntensity={2}
          />
        </mesh>

        <group ref={haloGroupRef}>
          <mesh position={[0, 1.2, 0]}>
            <ringGeometry args={[1.2, 1.25, 32]} />
            <meshBasicMaterial
              color={activeTheme.primary}
              side={THREE.DoubleSide}
              wireframe
            />
          </mesh>
          <mesh position={[0, -1.2, 0]}>
            <ringGeometry args={[1.4, 1.45, 32]} />
            <meshBasicMaterial
              color={activeTheme.accent}
              side={THREE.DoubleSide}
              wireframe
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
};

