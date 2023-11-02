<template>
  <WorldWidget />
  <DirectionsWidget />
</template>

<script lang="ts">
import WorldWidget from '../widgets/WorldWidget.vue'
import DirectionsWidget from '../widgets/DirectionsWidget.vue'

export default {
  components: {
    WorldWidget,
    DirectionsWidget
  }
}
</script>
