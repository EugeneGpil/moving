<template>
  <canvas ref="canvas"></canvas>
</template>

<script lang="ts">
import { mapStores } from 'pinia'
import { usePlayerStore } from '@/stores/player/playerStore.js'
import { useRendererStore } from '@/stores/rendererStore'

export default {
  mounted(): undefined {
    this.rendererStore.setCanvas(this.$refs.canvas as HTMLCanvasElement)
    this.rendererStore.run()
  },
  computed: {
    ...mapStores(usePlayerStore, useRendererStore)
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
