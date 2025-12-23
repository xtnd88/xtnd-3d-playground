import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import House1930 from "./scene/House1930";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [12, 8, 12], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 15, 10]} intensity={1} />

        <Grid args={[50, 50]} />

        <House1930 />

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}

