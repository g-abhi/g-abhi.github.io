// import React, { useRef, useMemo } from 'react';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import * as THREE from 'three';

// const Trail = ({ count = 50 }) => {
//     const mesh = useRef();
//     const { viewport, mouse } = useThree();
//     const dummy = useMemo(() => new THREE.Object3D(), []);

//     // Buffer to store history of mouse positions
//     // Initialize all to 0,0,0
//     const history = useMemo(() => new Array(count).fill({ x: 0, y: 0 }), [count]);

//     useFrame(() => {
//         // Current mouse position in viewport units
//         const x = (mouse.x * viewport.width) / 2;
//         const y = (mouse.y * viewport.height) / 2;

//         // Shift history: remove oldest, add newest at start
//         history.pop();
//         history.unshift({ x, y });

//         // Update each instance
//         history.forEach((pos, i) => {
//             // Scale down gently for the tail
//             const scale = 1 - i / count;

//             dummy.position.set(pos.x, pos.y, 0);
//             dummy.scale.set(scale, scale, scale);
//             dummy.rotation.set(0, 0, i * 0.1);
//             dummy.updateMatrix();

//             mesh.current.setMatrixAt(i, dummy.matrix);
//         });
//         mesh.current.instanceMatrix.needsUpdate = true;
//     });

//     return (
//         <instancedMesh ref={mesh} args={[null, null, count]}>
//             <sphereGeometry args={[0.08, 16, 16]} />
//             <meshStandardMaterial color="#c78d75" transparent opacity={0.8} />
//         </instancedMesh>
//     );
// };

// const ParticleTrail = () => {
//     return (
//         <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
//             <Canvas
//                 camera={{ position: [0, 0, 10], fov: 75 }}
//                 eventSource={document.getElementById('root')}
//                 eventPrefix="client"
//             >
//                 <ambientLight intensity={0.5} />
//                 <pointLight position={[10, 10, 10]} />
//                 <Trail count={30} />
//             </Canvas>
//         </div>
//     );
// };

// export default ParticleTrail;


import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Trail({ count = 30 }) {
    const mesh = useRef()
    const { mouse, viewport } = useThree()
    const dummy = useMemo(() => new THREE.Object3D(), [])
    const history = useMemo(() => Array.from({ length: count }, () => ({ x: 0, y: 0 })), [count])

    useFrame(() => {
        const x = (mouse.x * viewport.width) / 2
        const y = (mouse.y * viewport.height) / 2

        history.pop()
        history.unshift({ x, y })

        history.forEach((p, i) => {
            const s = 1 - i / count
            dummy.position.set(p.x, p.y, 0)
            dummy.scale.setScalar(s * 0.4)
            dummy.updateMatrix()
            mesh.current.setMatrixAt(i, dummy.matrix)
        })

        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshStandardMaterial color="#F4A460" transparent opacity={0.35} />
        </instancedMesh>
    )
}

export default function ParticleTrail() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 6] }}>
                <ambientLight intensity={0.5} />
                <Trail />
            </Canvas>
        </div>
    )
}
