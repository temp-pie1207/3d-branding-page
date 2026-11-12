import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { SpectrumTheme, THEMES } from '../types';

interface NeuralLatticeProps {
  theme: SpectrumTheme;
  wireframe: boolean;
  speed: number;
}

export const NeuralLattice: React.FC<NeuralLatticeProps> = ({ theme, wireframe, speed }) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreNodesRef = useRef<THREE.Points>(null);
  const activeTheme = THEMES[theme];

  // Generate 80 nodes on sphere and inside
  const [positions, connections] = useMemo(() => {
    const nodeCount = 50;
    const pos = [];
    const pts: THREE.Vector3[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const r = 1.6 + (Math.random() - 0.5) * 0.6;

      const x = r * Math.cos(theta) * Math.sin(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);

      pos.push(x, y, z);
      pts.push(new THREE.Vector3(x, y, z));
    }

    // Connect close neighbors
    const lineIndices: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dist = pts[i].distanceTo(pts[j]);
        if (dist < 1.1) {
          lineIndices.push(pts[i].x, pts[i].y, pts[i].z);
          lineIndices.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }

    return [new Float32Array(pos), new Float32Array(lineIndices)];
  }, []);

  useFrame((state, delta) => {
    const s = speed * delta;
    if (groupRef.current) {
      groupRef.current.rotation.y += s * 0.5;
      groupRef.current.rotation.x += s * 0.2;
    }
    if (coreNodesRef.current) {
      const t = state.clock.getElapsedTime();
      const sVal = 1 + Math.sin(t * 3 * speed) * 0.05;
      coreNodesRef.current.scale.set(sVal, sVal, sVal);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2 * speed} rotationIntensity={0.8} floatIntensity={0.6}>
        {/* Lattice Lines */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[connections, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color={activeTheme.primary}
            opacity={wireframe ? 0.9 : 0.6}
            transparent
            linewidth={1}
          />
        </lineSegments>

        {/* Outer Nodes */}
        <points ref={coreNodesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[positions, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.12}
            color={activeTheme.accent}
            sizeAttenuation
            transparent
            opacity={0.9}
          />
        </points>

        {/* Central Core Pulse */}
        <mesh scale={0.7}>
          <dodecahedronGeometry />
          <meshStandardMaterial
            color={activeTheme.primary}
            emissive={activeTheme.emissive}
            emissiveIntensity={1.8}
            wireframe={true}
          />
        </mesh>

        {/* Pulsing Outer Wire Sphere */}
        <mesh scale={2.4}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial
            color={activeTheme.primary}
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>
      </Float>
    </group>
  );
};

