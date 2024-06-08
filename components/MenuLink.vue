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
    transition: var(--trans);

    @media (max-width: 768px) {
      @apply text-[22px];
    }

    @media (hover: hover) {
      &:hover {
        @apply text-[--light-blue];
      }
    }

    @media (hover: none) {
      &:active {
        @apply text-[--light-blue];
      }
    }
  }
</style>
