export default function House1930({
  width = 6.5,      // metres
  depth = 8.5,      // metres
  wallHeight = 5.2, // to eaves (approx 2 storey)
  roofHeight = 2.6, // eaves to ridge
  roofPitch = Math.PI / 6 // ~30 degrees
}) {
  const ridgeY = wallHeight + roofHeight; // ridge height above ground

  return (
    <group>
      {/* Main masonry volume */}
      <mesh position={[0, wallHeight / 2, 0]}>
        <boxGeometry args={[width, wallHeight, depth]} />
        <meshStandardMaterial color="#c9b29b" />
      </mesh>

      {/* Pitched roof (ridge runs left-right, roof pitches front-back) */}
      {/* Front slope */}
      <mesh
        position={[0, wallHeight + roofHeight / 2, -depth / 4]}
        rotation={[roofPitch, 0, 0]} // rotate around X
      >
        <boxGeometry args={[width * 1.06, roofHeight, depth / 2]} />
        <meshStandardMaterial color="#4f4f4f" />
      </mesh>

      {/* Rear slope */}
      <mesh
        position={[0, wallHeight + roofHeight / 2, depth / 4]}
        rotation={[-roofPitch, 0, 0]} // rotate around X opposite
      >
        <boxGeometry args={[width * 1.06, roofHeight, depth / 2]} />
        <meshStandardMaterial color="#4f4f4f" />
      </mesh>

      {/* Ridge cap (just to visually sell the ridge line) */}
      <mesh position={[0, ridgeY, 0]}>
        <boxGeometry args={[width * 1.05, 0.1, depth * 0.02]} />
        <meshStandardMaterial color="#3f3f3f" />
      </mesh>

      {/* Chimney stack (classic 1930s cue) */}
      <mesh position={[width / 2 - 0.55, ridgeY - 0.2, 0]}>
        <boxGeometry args={[0.8, 2.2, 0.8]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>
    </group>
  );
}
