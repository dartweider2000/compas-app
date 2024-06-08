<script setup lang="ts">
  const isOpen = defineModel<boolean>();
</script>

<template>
  <button class="burger" :class="{ burger_active: isOpen }">
    <span></span>
  </button>
</template>

<style scoped lang="scss">
  .burger {
    @apply relative w-[30px] h-[20px];

    &::before,
    &::after {
      content: "";
    }

    &::before,
    &::after,
    & > span {
      @apply absolute w-[100%] h-[2px] bg-[--white] left-0;
      transition: var(--trans);
    }

    &::before {
      @apply top-0;
    }

    &::after {
      @apply bottom-0;
    }

    & > span {
      @apply top-[50%] translate-y-[-50%];
    }

    &_active {
      &::before {
        @apply top-[9px] rotate-[45deg];
      }

      &::after {
        @apply bottom-[9px] rotate-[-45deg];
      }

      & > span {
        @apply scale-0;
      }
    }
  }
</style>
