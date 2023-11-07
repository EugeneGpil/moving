<template>
  <BaseArrowFeatureVue direction="right" @click="move()" />
</template>

<script lang="ts">
import { usePlayerStore } from '@/stores/player/playerStore'
import BaseArrowFeatureVue from './BaseArrowFeature.vue'

export default {
  components: {
    BaseArrowFeatureVue
  },
  methods: {
    move() {
      usePlayerStore().goRight()
    }
  }
}
</script>
