<template>
  <BaseArrowFeatureVue direction="up" @click="move()" />
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
      usePlayerStore().goUp()
    }
  }
}
</script>
