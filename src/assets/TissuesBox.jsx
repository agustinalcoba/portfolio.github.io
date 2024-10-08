/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 .\public\models\TissuesBox.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function TissuesBox(props) {
  const { nodes, materials } = useGLTF('./models/TissuesBox.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.TissueBox} scale={[0.075, 0.025, 0.05]} />
      <mesh geometry={nodes.Box.geometry} material={materials.TissueBox} />
      <mesh geometry={nodes.Tissue.geometry} material={materials.Tissue} />
      <mesh geometry={nodes.Plane.geometry} material={materials.Tissue} />
      <mesh geometry={nodes.Plane001.geometry} material={materials.Plane} scale={2.373} />
    </group>
  )
}

useGLTF.preload('./models/TissuesBox.glb')
