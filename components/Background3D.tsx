
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <Sphere args={[1.5, 64, 64]} ref={meshRef} position={[2, 0, 0]}>
      <MeshDistortMaterial
        color="#4338ca"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* Fix: suppress intrinsic element error for ambientLight provided by R3F */}
        {/* @ts-ignore */}
        <ambientLight intensity={0.5} />
        {/* Fix: suppress intrinsic element error for pointLight provided by R3F */}
        {/* @ts-ignore */}
        <pointLight position={[10, 10, 10]} intensity={1} />
        {/* Fix: suppress intrinsic element error for spotLight provided by R3F */}
        {/* @ts-ignore */}
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        <FloatingShape />
      </Canvas>
    </div>
  );
};

export default Background3D;
