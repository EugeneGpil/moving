<template>
  <DirectionsEntity>
    <template #left-arrow>
      <LeftArrowFeature />
    </template>
    <template #up-arrow>
      <UpArrowFeature />
    </template>
    <template #right-arrow>
      <RightArrowFeature />
    </template>
    <template #down-arrow>
      <DownArrowFeature />
    </template>
  </DirectionsEntity>
</template>

<script lang="ts">
import DirectionsEntity from '../entities/DirectionsEntity.vue'
import LeftArrowFeature from '../features/directions/LeftArrowFeature.vue'
import UpArrowFeature from '../features/directions/UpArrowFeature.vue'
import RightArrowFeature from '../features/directions/RightArrowFeature.vue'
import DownArrowFeature from '../features/directions/DownArrowFeature.vue'

export default {
  components: {
    DirectionsEntity,
    LeftArrowFeature,
    UpArrowFeature,
    RightArrowFeature,
    DownArrowFeature
  }
}
</script>
