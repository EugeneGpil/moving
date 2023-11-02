<template>
  <BaseArrowFeatureVue direction="down" @click="move()" />
</template>

<script lang="ts">
    import BaseArrowFeatureVue from './BaseArrowFeature.vue';

    import { usePlayerStore } from '@/stores/playerStore';

    export default {
        components: {
            BaseArrowFeatureVue
        },
        methods: {
            move(): undefined {
                usePlayerStore().goDown()
            },
        },
    }
</script>
