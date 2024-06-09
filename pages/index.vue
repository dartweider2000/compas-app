<script setup lang="ts"></script>

<template>
  <main class="main-page">
    <MainPageFormBlock class="main-page__form-block" />
  </main>
</template>

<style scoped lang="scss">
  .main-page {
    // .main-page__form-block
    &__form-block {
      @apply mt-[79px];

      @media (max-width: 1100px) {
        @apply mt-[20px];
      }
    }
  }
</style>
