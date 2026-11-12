import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { MainScene } from '../scene/MainScene';
import { ModelMode, SpectrumTheme } from '../types';

interface CanvasContainerProps {
  modelMode: ModelMode;
  theme: SpectrumTheme;
  wireframe: boolean;
  speed: number;
  scrollY: number;
}

export const CanvasContainer: React.FC<CanvasContainerProps> = (props) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <MainScene {...props} />
        </Suspense>
      </Canvas>
    </div>
  );
};

