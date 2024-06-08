<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .container {
    @apply max-w-[--container-width] w-full px-[--container-padding] mx-auto;
  }
</style>
