<script setup lang="ts">
  import logoSrc from "~/assets/img/logo.svg";
</script>

<template>
  <header class="header">
    <div class="header__slide-menu"></div>
    <MainContainer class="header__container">
      <NuxtLink to="/" class="header__logo">
        <img :src="logoSrc" alt="logo" loading="lazy" width="119" height="26" />
      </NuxtLink>
      <nav class="header__menu menu menu_left">
        <ul class="menu__list">
          <li class="menu__item">
            <MenuLink to="/">Тарифы</MenuLink>
          </li>
          <li class="menu__item">
            <MenuLink to="/">Контакты</MenuLink>
          </li>
        </ul>
      </nav>
      <nav class="header__menu menu menu_right">
        <ul class="menu__list">
          <li class="menu__item">
            <MenuLink to="tel:+79621660797" class="menu__phone"
              >+7 495 118-44-22</MenuLink
            >
          </li>
          <li class="menu__item">
            <MenuLink to="/">Вход</MenuLink>
          </li>
          <li class="menu__item">
            <ElButton class="menu__registration btn btn__light-blue"
              >Регистрация</ElButton
            >
          </li>
        </ul>
      </nav>
      <button class="header__burger">Бургер</button>
    </MainContainer>
  </header>
</template>

<style scoped lang="scss">
  .header {
    background: linear-gradient(
      to right,
      var(--black) 0%,
      var(--black) 30%,
      var(--very-dark-blue) 73%,
      var(--very-dark-blue) 100%
    );
    @apply py-[12px];
    // .header__container
    &__container {
      @apply grid items-center gap-[30px] grid-cols-[auto,1fr,auto];

      @media (max-width: 768px) {
        @apply grid-cols-[1fr,auto];
      }
    }
    &__slide-menu {
      @apply fixed top-0 left-0 h-full translate-x-[-100%];

      @media (min-width: 769px) {
        @apply hidden;
      }

      &_open {
        @apply translate-x-[0];
      }
    }
    // .header__menu
    &__menu {
    }
    &__burger {
      @media (min-width: 769px) {
        @apply hidden;
      }
    }
    // .header__logo
    &__logo {
    }
  }
  .menu {
    &_left {
    }

    &_right {
    }
    @apply flex gap-[30px] items-center;
    // .menu__list
    &__list {
      @apply flex gap-[30px] items-center;
    }
    // .menu__item
    &__item {
    }
    // .menu__phone
    &__phone {
      @apply font-bold;
    }
    // .menu__registration
    &__registration {
    }
  }
</style>
