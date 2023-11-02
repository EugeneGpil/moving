<template>
    <div class="direction-button">
        <font-awesome-icon :icon="`arrow-${direction}`" />
    </div>
</template>

<script lang="ts">
export default {
    props: {
        direction: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped>
.direction-button {
    background-color: var(--color-feature);
    color: var(--color-feature-text);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    margin: 5px;
    font-size: 30px;
}
</style>
