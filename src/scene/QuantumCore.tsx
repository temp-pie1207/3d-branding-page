import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import { SpectrumTheme, THEMES } from '../types';

interface QuantumCoreProps {
  theme: SpectrumTheme;
  wireframe: boolean;
  speed: number;
}

export const QuantumCore: React.FC<QuantumCoreProps> = ({ theme, wireframe, speed }) => {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const midRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const orbitalNodesRef = useRef<THREE.Group>(null);

  const activeTheme = THEMES[theme];

  useFrame((state, delta) => {
    const s = speed * delta;
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x += s * 0.4;
      outerRingRef.current.rotation.y += s * 0.6;
    }
    if (midRingRef.current) {
      midRingRef.current.rotation.y -= s * 0.5;
      midRingRef.current.rotation.z += s * 0.7;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x += s * 0.8;
      innerRingRef.current.rotation.z -= s * 0.5;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y += s * 0.3;
      // Gentle breathing scale
      const time = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(time * 2 * speed) * 0.04;
      coreRef.current.scale.set(scale, scale, scale);
    }
    if (orbitalNodesRef.current) {
      orbitalNodesRef.current.rotation.y += s * 0.3;
    }
  });

  return (
    <group>
      {/* Central Pulsating Quantum Core */}
      <Float speed={2 * speed} rotationIntensity={0.8} floatIntensity={0.6}>
        <mesh ref={coreRef} scale={1.3}>
          <icosahedronGeometry args={[1, 4]} />
          <MeshDistortMaterial
            color={activeTheme.primary}
            emissive={activeTheme.emissive}
            emissiveIntensity={wireframe ? 0.4 : 0.8}
            roughness={0.15}
            metalness={0.9}
            distort={wireframe ? 0.1 : 0.35}
            speed={2 * speed}
            wireframe={wireframe}
          />
        </mesh>
      </Float>

      {/* Outer Gyroscopic Ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2.5, 0.03, 16, 100]} />
        <meshStandardMaterial
          color={activeTheme.accent}
          emissive={activeTheme.primary}
          emissiveIntensity={1.2}
          wireframe={wireframe}
          metalness={1}
          roughness={0.1}
        />
      </mesh>

      {/* Middle Gyroscopic Ring */}
      <mesh ref={midRingRef}>
        <torusGeometry args={[2.0, 0.04, 16, 80]} />
        <meshStandardMaterial
          color={activeTheme.primary}
          emissive={activeTheme.emissive}
          emissiveIntensity={1.5}
          wireframe={wireframe}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Inner Slotted Ring */}
      <mesh ref={innerRingRef}>
        <cylinderGeometry args={[1.6, 1.6, 0.1, 32, 1, true]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive={activeTheme.primary}
          emissiveIntensity={0.8}
          wireframe={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Orbiting Satellite Crystals */}
      <group ref={orbitalNodesRef}>
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const radius = 2.8;
          const x = Math.cos(rad) * radius;
          const z = Math.sin(rad) * radius;
          const y = Math.sin(rad * 2) * 0.6;
          return (
            <mesh key={i} position={[x, y, z]} scale={0.18}>
              <octahedronGeometry />
              <meshStandardMaterial
                color={activeTheme.primary}
                emissive={activeTheme.primary}
                emissiveIntensity={1.8}
                wireframe={wireframe}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
};

