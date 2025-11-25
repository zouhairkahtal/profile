import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

type GLTFResult = {
  nodes: {
    quill_pen_1_low_lambert1_0: THREE.Mesh<THREE.BufferGeometry>
    quill_pen_2_low_lambert1_0: THREE.Mesh<THREE.BufferGeometry>
    quill_pen_3_low_lambert1_0: THREE.Mesh<THREE.BufferGeometry>
  }
  materials: {
    lambert1: THREE.MeshLambertMaterial // غالباً هادي هي الصحيحة
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/free_quill-pen__lowpoly/scene.gltf') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group
        rotation={[-1.84550847, -0.48179413, 0.17215505]}
        scale={[1, 1, 1]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.quill_pen_1_low_lambert1_0.geometry} material={materials.lambert1} />
          <mesh geometry={nodes.quill_pen_2_low_lambert1_0.geometry} material={materials.lambert1} />
          <mesh geometry={nodes.quill_pen_3_low_lambert1_0.geometry} material={materials.lambert1} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/free_quill-pen__lowpoly/scene.gltf')
