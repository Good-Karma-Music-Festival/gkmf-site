import React, { useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Texture, TextureLoader } from 'three';

export default function Cube (props: any){
  const meshRef = React.useRef();
  const colorMap = useLoader(TextureLoader, '/gkmf-logo.png')


  useFrame(({ clock }) => {

    meshRef.current.rotation.y = clock.getElapsedTime() / 2;

  });

  return (
    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )
}