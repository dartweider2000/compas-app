<script setup lang="ts">
  import SvgBreadCrumbsIcon from "~/components/Svg/SvgBreadCrumbsIcon.vue";
</script>

<template>
  <NuxtLayout name="article">
    <template #bread-crumbs>
      <ElBreadcrumb class="bread-crumb" :separator-icon="SvgBreadCrumbsIcon">
        <ElBreadcrumbItem to="/">Главная</ElBreadcrumbItem>
        <ElBreadcrumbItem to="/documents">Документы</ElBreadcrumbItem>
        <ElBreadcrumbItem
          >Политика обработки персональных данных</ElBreadcrumbItem
        >
      </ElBreadcrumb>
    </template>
    <template #title>Политика обработки персональных данных</template>
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>
