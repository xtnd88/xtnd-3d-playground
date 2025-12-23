import { useGLTF } from "@react-three/drei";

export default function House1930() {
  const { scene } = useGLTF("/models/house-1930.glb");
  return <primitive object={scene} />;
}
