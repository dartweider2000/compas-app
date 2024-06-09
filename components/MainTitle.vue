<script setup lang="ts">
  defineSlots<{
    default: () => any;
  }>();
</script>

<template>
  <h2 class="title">
    <slot />
  </h2>
</template>

<style scoped lang="scss">
  .title {
    @apply font-bold text-[41px] leading-[120%] text-[--black];

    @media (max-width: 768px) {
      @apply text-[30px];
    }
  }
</style>
