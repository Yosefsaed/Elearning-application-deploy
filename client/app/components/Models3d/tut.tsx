import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Object3D, Mesh } from 'three'

type Props = {}

const Tut: React.FC<Props> = (props: Props) => {
    const { nodes, materials } = useGLTF('/untitled.glb')
    const meshGeometry = (nodes.Mesh_0 as Mesh).geometry

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={meshGeometry}
                material={materials['Material.001']}
                position={[0, 0.486, 0]}
                rotation={[Math.PI / 1.7, 0, 3]}
            />
        </group>
    )
}

export default Tut
