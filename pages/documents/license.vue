<script setup lang="ts">
  import SvgBreadCrumbsIcon from "~/components/Svg/SvgBreadCrumbsIcon.vue";
</script>

<template>
  <NuxtLayout name="article">
    <template #bread-crumbs>
      <ElBreadcrumb class="bread-crumb" :separator-icon="SvgBreadCrumbsIcon">
        <ElBreadcrumbItem to="/">Главная</ElBreadcrumbItem>
        <ElBreadcrumbItem to="/documents">Документы</ElBreadcrumbItem>
        <ElBreadcrumbItem>Лицензионный договор</ElBreadcrumbItem>
      </ElBreadcrumb>
    </template>
    <template #title>Лицензионный договор</template>
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>
