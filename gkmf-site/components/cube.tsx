import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export default function Cube (props: any){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap = useLoader(TextureLoader, '/Good Karma Logo_bluecircle.png');
  const [map1, map2, map3, map4, map5, map6] =  useLoader(TextureLoader, ['/YIC_LOGO.png', '/YIC_LOGO.png','/Good Karma Logo_bluecircle.png', '/Good Karma Logo_bluecircle.png','/Good Karma Logo_bluecircle.png', '/Good Karma Logo_bluecircle.png'])

  useFrame(({ clock }) => {

    if(meshRef.current !== null){
      meshRef.current.rotation.y = clock.getElapsedTime() / 2;
    }
  });

  return (
    <mesh {...props} ref={meshRef} castShadow>
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial attach="material-0" map={map1} />
      <meshBasicMaterial attach="material-1" map={map2} />
      <meshBasicMaterial attach="material-2" map={map3} />
      <meshBasicMaterial attach="material-3" map={map4} />
      <meshBasicMaterial attach="material-4" map={map5} />
      <meshBasicMaterial attach="material-5" map={map6} />
    </mesh>
  )
}