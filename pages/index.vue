<script setup lang="ts"></script>

<template>
  <main class="main-page">
    <MainPageFormBlock class="main-page__form-block" />
    <MainPagePlusCards class="main-page__cards-block" />
    <LazyMainPageSlider class="main-page__slider-block" />
  </main>
</template>

<style scoped lang="scss">
  .main-page {
    @apply mb-[10px];
    // .main-page__form-block
    &__form-block {
      @apply mt-[79px];

      @media (max-width: 1100px) {
        @apply mt-[20px];
      }
    }
    // .main-page__cards-block
    &__cards-block {
      @apply mt-[98px];

      @media (max-width: 1100px) {
        @apply mt-[20px];
      }
    }

    &__slider-block {
      @apply mt-[85px];

      @media (max-width: 1100px) {
        @apply mt-[20px];
      }
    }
  }
</style>
