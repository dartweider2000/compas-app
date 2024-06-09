<script setup lang="ts">
  import SvgBreadCrumbsIcon from "~/components/Svg/SvgBreadCrumbsIcon.vue";
</script>

<template>
  <NuxtLayout name="article">
    <template #bread-crumbs>
      <ElBreadcrumb class="bread-crumb" :separator-icon="SvgBreadCrumbsIcon">
        <ElBreadcrumbItem to="/">Главная</ElBreadcrumbItem>
        <ElBreadcrumbItem to="/documents">Документы</ElBreadcrumbItem>
        <ElBreadcrumbItem>Информация об оплате</ElBreadcrumbItem>
      </ElBreadcrumb>
    </template>
    <template #title>Информация об оплате</template>
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>
