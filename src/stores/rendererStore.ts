import { defineStore } from 'pinia'
import { usePlayerStore } from './playerStore'
import * as THREE from 'three'

type State = {
  canvas: HTMLCanvasElement | null
}

export const useRendererStore = defineStore('renderer', {
  state: (): State => ({
    canvas: null
  }),
  actions: {
    setCanvas(canvas: HTMLCanvasElement): undefined {
      this.canvas = canvas
    },
    render(): undefined {
      this.renderer.render(this.scene, this.camera)
    },
    run(): undefined {
      const animate = (): undefined => {
        requestAnimationFrame(animate)
        this.render()
      }
      animate()
    }
  },
  getters: {
    renderer(): THREE.WebGLRenderer {
      return new THREE.WebGLRenderer({
        canvas: this.canvas as HTMLCanvasElement
      })
    },
    scene: (): THREE.Scene => {
      const scene = new THREE.Scene()

      scene.add(usePlayerStore().player)

      return scene
    },
    camera: (): THREE.PerspectiveCamera => {
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )

      camera.position.z = 5

      return camera
    }
  }
})
