<script setup lang="ts">
  import SvgBreadCrumbsIcon from "~/components/Svg/SvgBreadCrumbsIcon.vue";
</script>

<template>
  <NuxtLayout name="article">
    <template #bread-crumbs>
      <ElBreadcrumb class="bread-crumb" :separator-icon="SvgBreadCrumbsIcon">
        <ElBreadcrumbItem to="/">Главная</ElBreadcrumbItem>
        <ElBreadcrumbItem>Документы</ElBreadcrumbItem>
      </ElBreadcrumb>
    </template>
    <template #title>Документы</template>
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>
