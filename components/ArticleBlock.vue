<script setup lang="ts">
  defineSlots<{
    title: () => any;
    body: () => any;
  }>();
</script>

<template>
  <div class="article-block">
    <h3 class="article-block__title">
      <slot name="title" />
    </h3>
    <div class="article-block__body">
      <slot name="body" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .article-block {
    @apply grid gap-[25px];

    @media (max-width: 1100px) {
      @apply gap-[15px];
    }
    // .article-block__title
    &__title {
      @apply font-bold text-[41px] leading-[120%] text-[--article-title];
    }
    // .article-block__body
    &__body {
      @apply grid gap-[15px];

      @media (max-width: 1100px) {
        @apply gap-[10px];
      }
      & > * {
        @apply text-[18px] leading-[120%] text-[--black];
      }
    }
  }
</style>
