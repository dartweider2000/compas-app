<script setup lang="ts">
  import logoSrc from "~/assets/img/logo.svg";
</script>

<template>
  <header class="header">
    <MainContainer class="header__container">
      <nav class="header__menu menu">
        <NuxtLink to="/" class="menu__logo">
          <img :src="logoSrc" alt="logo" />
        </NuxtLink>
        <ul class="menu__list">
          <li class="menu__item">
            <MenuLink to="/">Тарифы</MenuLink>
          </li>
          <li class="menu__item">
            <MenuLink to="/">Контакты</MenuLink>
          </li>
        </ul>
      </nav>
      <div class="header__actions">
        <a href="tel:79621660797" class="header__phone">+7 495 118-44-22</a>
        <MenuLink to="/">Вход</MenuLink>
        <ElButton class="header__registration btn btn__light-blue"
          >Регистрация</ElButton
        >
      </div>
    </MainContainer>
  </header>
</template>

<style scoped lang="scss"></style>
