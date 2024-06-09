<script setup lang="ts"></script>

<template>
  <div class="article">
    <div class="article__bread-crumbs">
      <slot name="bread-crumbs" />
    </div>
    <MainTitle class="article__title">
      <slot name="title" />
    </MainTitle>
    <div class="article__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .article {
    // .article__bread-crumbs
    &__bread-crumbs {
    }
    // .article__title
    &__title {
    }
    // .article__content
    &__content {
    }
  }
</style>
