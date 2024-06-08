<script setup lang="ts">
  defineProps<{
    to: string;
  }>();

  defineSlots<{
    default: () => any;
  }>();
</script>

<template>
  <NuxtLink class="menu-link" :to="to">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
  .menu-link {
    @apply text-[--white] text-[18px] leading-[23px];
  }
</style>
