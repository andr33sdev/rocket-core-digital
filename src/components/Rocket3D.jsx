import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";

// Modelo del cohete (lo ajustamos para la nueva vista)
function RocketModel({ modelPath }) {
    const { scene } = useGLTF(modelPath);
    const ref = useRef();

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.005;
            ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    // Ajustamos escala y posición para que se vea bien en su columna
    return (
        <primitive object={scene} ref={ref} scale={1.3} position={[0, -0.5, 0]} />
    );
}

// Componente principal del Canvas 3D
export default function Rocket3D() {
    const rocketModelPath = "/models/scene.glb"; // Asegúrate de que tu modelo esté en /public/models/

    return (
        // ESTE ES EL CAMBIO CLAVE:
        // El canvas ahora es 'relative' y toma el 100% del div que lo contiene.
        <Canvas
            camera={{ position: [0, 0, 5], fov: 70 }} // Aumentamos fov (zoom out) para que se vea bien en un espacio más angosto
            style={{ position: "relative", width: "100%", height: "100%", zIndex: 1 }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.8} />

            <Suspense fallback={null}>
                <RocketModel modelPath={rocketModelPath} />
                {/* Usamos un preset que da buenos reflejos sin distraer */}
                <Environment preset="city" />
            </Suspense>
        </Canvas>
    );
}