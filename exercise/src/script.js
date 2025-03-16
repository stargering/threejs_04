import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
/* 
mesh.position.x = 0.7
mesh.position.y = -0.6
mesh.position.z = 1
*/
scene.add(mesh)

mesh.position.set(0.7, -0.6, 1)

//rotation
mesh.rotation.reorder('YXZ')
mesh.rotation.y= Math.PI * 0.25
mesh.rotation.x= Math.PI * 0.25
mesh.rotation.z = 0

//Scale
mesh.scale.set(2, 0.5, 0.5)

//Axes Helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = 0
camera.position.x = 0
scene.add(camera)

camera.lookAt(mesh.position)
  

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)