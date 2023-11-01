<template>
  <canvas ref="canvas"></canvas>
</template>

<script lang="ts">
import { mapStores } from 'pinia'
import { usePlayerStore } from '@/stores/playerStore'
import { useRendererStore } from '@/stores/rendererStore'

export default {
  mounted(): undefined {
    this.rendererStore.setCanvas(this.$refs.canvas as HTMLCanvasElement)
    this.rendererStore.run()

    setTimeout(() => {
      usePlayerStore().goUp()
    }, 1000)
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
