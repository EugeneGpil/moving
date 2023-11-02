<template>
  <div class="fixed-container">
    <div class="buttons-container">
      <div></div>
      <slot name="up-arrow" />
      <div></div>
      <slot name="left-arrow" />
      <slot name="down-arrow" />
      <slot name="right-arrow" />
    </div>
  </div>
</template>

<style scoped>
.fixed-container {
  display: flex;
  justify-content: center;
}
.buttons-container {
  position: fixed;
  bottom: -0%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 10px;
}
</style>
