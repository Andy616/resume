'use client';

import { FC, memo, Suspense, ReactNode } from "react";
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Outlines, Stars } from '@react-three/drei';
import { TextureLoader, DoubleSide } from "three";

const SphericalToCartesian = (lat: number, lon: number, radius: number): [number, number, number] => {

  const latRad = lat * (Math.PI / 180);
  const lonRad = -lon * (Math.PI / 180);

  const x = Math.cos(latRad) * Math.cos(lonRad) * radius;
  const y = Math.sin(latRad) * radius;
  const z = Math.cos(latRad) * Math.sin(lonRad) * radius

  return [x, y, z];
};

function Earth({ radius }: { radius: number }) {
  const map = useLoader(TextureLoader, '/textures/earth.png')
  const bumpMap = useLoader(TextureLoader, '/textures/earth_bump.png')

  return (
    <>
      <mesh>
        <sphereGeometry args={[radius, 64, 64]}/>
        <meshStandardMaterial
          map={map}
          bumpMap={bumpMap}
          bumpScale={3}
          transparent={true}
          opacity={0.9}
          side={DoubleSide}
        />
        <Outlines thickness={0.01} color={"#4be4fa"} transparent={true}/>
      </mesh>
    </>

  )
}

function PinLocation(props: { lat: number, lon: number, radius: number, color: string }): ReactNode {
  return (
    <mesh
      position={SphericalToCartesian(props.lat, props.lon, props.radius * 1.06)}
      rotation={[0.0, (props.lon - 180) * (Math.PI / 180), -props.lat * (Math.PI / 180) - Math.PI * 0.5]}
      // rotation={[0.0, lon * (Math.PI / 180), lat * (Math.PI / 180) - Math.PI * 0.5]}
    >
      <coneGeometry args={[0.05, 0.25, 4, 1]}/>
      <meshStandardMaterial color={props.color}/>
    </mesh>
  )
}

const Globe: FC = memo(function Globe(): ReactNode {
  const radius = 2.5;

  return (
    <Canvas style={{ minHeight: 'inherit' }}>
      <Suspense fallback={null}>

        <ambientLight intensity={2}/>
        <pointLight color={'#fff'} position={[-3.75, 3.3, -6]} intensity={30}/>

        <group>
          <OrbitControls
            autoRotate={true}
            enableZoom={true}
            enablePan={true}
            autoRotateSpeed={1}
            rotateSpeed={0.2}
            panSpeed={0.2}
            zoomSpeed={0.3}
            maxDistance={radius * 2}
            minDistance={radius * 1.2}
          />

          <Stars radius={30} depth={60} count={1000} fade={true} saturation={0}/>

          <Earth radius={radius}/>
          <PinLocation lat={25} lon={121.5} radius={radius} color={'#e04444'}/>

          {/*<axesHelper args={[5]}/>*/}
          {/*<gridHelper/>*/}
        </group>
      </Suspense>
    </Canvas>
  )
})

export default Globe;