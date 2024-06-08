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
    @apply min-h-dvh grid grid-rows-[auto,1fr];
  }
</style>
