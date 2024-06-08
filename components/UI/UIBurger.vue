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
      @apply absolute w-[100%] h-[2px] bg-[--white];
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
        @apply top-[50%] rotate-[45deg] translate-y-[-50%];
      }

      &::after {
        @apply bottom-[50%] rotate-[-45deg] translate-y-[-50%];
      }

      & > span {
        @apply scale-0;
      }
    }
  }
</style>
