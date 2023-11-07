import { defineStore } from 'pinia'
import * as THREE from 'three'

export type PlayerStore = {
  step: number
  goLeft: () => undefined
  goRight: () => undefined
  goUp: () => undefined
  goDown: () => undefined
  player: THREE.Mesh
}

export const usePlayerStore = defineStore('player', {
  state: () => ({
    step: 1
  }),
  actions: {
    goLeft(): undefined {
      this.player.position.x -= this.step
    },
    goRight(): undefined {
      this.player.position.x += this.step
    },
    goUp(): undefined {
      this.player.position.y += this.step
    },
    goDown(): undefined {
      this.player.position.y -= this.step
    }
  },
  getters: {
    player: (): THREE.Mesh => {
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      const cube = new THREE.Mesh(geometry, material)

      return cube
    }
  }
})
