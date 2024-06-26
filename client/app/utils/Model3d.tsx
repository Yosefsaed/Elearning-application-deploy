import React from "react";
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import Tut from "../components/Models3d/tut";
type Props = {}
const Model3d = (props: Props) => {
    return (
        <>
            <div className="h-[100vh] w-[100vw]">
                <Canvas>
                    <Environment preset="city" />
                    <OrbitControls />
                    <Tut />
                </Canvas>
            </div >
        </>
    )
}
export default Model3d