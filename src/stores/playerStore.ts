import { defineStore } from 'pinia'
import * as THREE from 'three'

export const usePlayerStore = defineStore('player', {
  state: () => ({}),
  actions: {
    goLeft(): undefined {
      this.player.position.x--
    },
    goRight(): undefined {
      this.player.position.x++
    },
    goUp(): undefined {
      this.player.position.y++
    },
    goDown(): undefined {
      this.player.position.y--
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
