<template>
  <canvas ref="canvas"></canvas>
</template>

<script lang="ts">
import * as THREE from 'three'

export default {
  mounted() {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({
      canvas: this.$refs.canvas as HTMLCanvasElement
    })

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5

    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)

      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
    }
    animate()
  }
}
</script>

<style scoped>
canvas {
  display: block;
  width: 100%;
  height: 100vh;
}
</style>
