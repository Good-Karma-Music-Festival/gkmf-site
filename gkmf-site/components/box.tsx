import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

interface Props {
  image1: string,
  image2: string,
  image3: string,
  image4: string,
  image5: string,
  image6: string
}
export default function Box({image1, image2, image3, image4, image5, image6} : Props){
  const meshRef = React.useRef<THREE.Mesh>(null);

  const [map1, map2, map3, map4, map5, map6] =  useLoader(TextureLoader, [image1, image2, image3, image4, image5, image6])

  useFrame(({ clock }) => {

    if(meshRef.current !== null){

      meshRef.current.rotation.y = clock.getElapsedTime() / 4;
    }

  });

  return (

    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[5, 3, 3]} />
      <meshBasicMaterial attach="material-0" map={map1} />
      <meshBasicMaterial attach="material-1" map={map2} />
      <meshBasicMaterial attach="material-2" map={map3} />
      <meshBasicMaterial attach="material-3" map={map4} />
      <meshBasicMaterial attach="material-4" map={map5} />
      <meshBasicMaterial attach="material-5" map={map6} />
    </mesh>
  )


}