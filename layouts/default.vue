<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <TheHeader />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    @apply min-h-dvh overflow-hidden;
  }

  .main {
    @apply pt-[--header-height];
  }
</style>
