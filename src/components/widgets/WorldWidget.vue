<template>
  <WorldEntity>
    <template #world>
      <WorldFeature />
    </template>
  </WorldEntity>
</template>

<script lang="ts">
import WorldEntity from '../entities/WorldEntity.vue'
import WorldFeature from '../features/WorldFeature.vue'

export default {
  components: {
    WorldEntity,
    WorldFeature
  }
}
</script>
