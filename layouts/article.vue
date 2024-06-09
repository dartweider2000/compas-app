<script setup lang="ts"></script>

<template>
  <div class="article">
    <MainContainer class="article__container">
      <div class="article__bread-crumbs">
        <slot name="bread-crumbs" />
      </div>
      <MainTitle class="article__title">
        <slot name="title" />
      </MainTitle>
      <div class="article__content">
        <slot />
      </div>
    </MainContainer>
  </div>
</template>

<style scoped lang="scss">
  .article {
    &__container {
      @apply grid;
    }
    // .article__bread-crumbs
    &__bread-crumbs {
      @apply mt-[20px];
    }
    // .article__title
    &__title {
      @apply mt-[20px];
    }
    // .article__content
    &__content {
      @apply mt-[40px];
    }
  }
</style>
