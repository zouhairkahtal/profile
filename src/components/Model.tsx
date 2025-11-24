import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

type GLTFResult = {
  nodes: {
    quill_pen_1_low_lambert1_0: THREE.Mesh
    quill_pen_2_low_lambert1_0: THREE.Mesh
    quill_pen_3_low_lambert1_0: THREE.Mesh
  }
  materials: {
    lambert1: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  // useGLTF return type can be cast directly to GLTFResult
  const { nodes, materials } = useGLTF('/free_quill-pen__lowpoly/scene.gltf') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group
        rotation={[-1.84550847, -0.48179413, 0.17215505]}
        scale={[0.99999998, 0.99999998, 0.99999999]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.quill_pen_1_low_lambert1_0.geometry} material={materials.lambert1} />
          <mesh geometry={nodes.quill_pen_2_low_lambert1_0.geometry} material={materials.lambert1} />
          <mesh geometry={nodes.quill_pen_3_low_lambert1_0.geometry} material={materials.lambert1} />
        </group>
      </group>
    </group>
  )
}

// preload without type import
useGLTF.preload('/free_quill-pen__lowpoly/scene.gltf')
