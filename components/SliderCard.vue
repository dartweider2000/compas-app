<script setup lang="ts">
  defineSlots<{
    title: () => any;
    text: () => any;
  }>();

  defineProps<{
    to: string;
  }>();
</script>

<template>
  <div class="slider-card">
    <h2 class="slider-card__title">
      <slot name="title" />
    </h2>
    <p class="slider-card__text">
      <slot name="text" />
    </p>
    <NuxtLink class="slider-card__button btn btn_light-blue" :to="to">
      Перейти
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
  .slider-card {
    @apply p-[25px] bg-[--white] grid gap-[15px] grid-rows-[auto,1fr,auto] rounded-[10px] min-h-[450px];
    box-shadow: 0px 0px 10px 0.5px rgba(0, 0, 0, 0.12);
    // .slider-card__title
    &__title {
      @apply font-bold text-[31px] leading-[120%] text-[--dark-blue];
    }
    // .slider-card__text
    &__text {
      @apply text-[18px] leading-[120%] text-[--black];
    }
    // .slider-card__button
    &__button {
      @apply text-center;
    }
  }
</style>
