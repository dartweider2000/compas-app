<script setup lang="ts">
  defineProps<{
    imageSrc: string;
  }>();

  defineSlots<{
    title: () => any;
    text: () => any;
  }>();
</script>

<template>
  <div class="plus-card">
    <div class="plus-card__image">
      <img :src="imageSrc" alt="card-image" loading="lazy" />
    </div>
    <div class="plus-card__body">
      <h3 class="plus-card__title">
        <slot name="title" />
      </h3>
      <p class="plus-card__text">
        <slot name="text" />
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .plus-card {
    @apply py-[24px] px-[20px] rounded-[10px] border-[1px] border-[--card-border-gray] bg-[--card-fill] grid grid-flow-col gap-[22px] items-center justify-start;
    // .plus-card__image
    &__image {
    }
    // .plus-card__body
    &__body {
      @apply grid gap-[10px];
    }
    // .plus-card__title
    &__title {
      @apply font-bold text-[18px] leading-[120%] text-[--dark-blue];
    }
    // .plus-card__text
    &__text {
      @apply text-[15px] leading-[120%] text-[--black];
    }
  }
</style>
