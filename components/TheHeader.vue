<script setup lang="ts">
  import logoSrc from "~/assets/img/logo.svg";
  import { onClickOutside } from "@vueuse/core";

  const slideMenu = ref<HTMLElement | null>(null);
  const header = ref<HTMLElement | null>(null);
  const isOpen = ref<boolean>(false);
  const isLoaded = ref<boolean>(false);

  const matchMedia = ref<MediaQueryList | null>(null);
  const matchMediaChangeHandler = () => {
    if (!matchMedia.value || !slideMenu.value) return;

    if (matchMedia.value.matches) {
      slideMenu.value.style.transition = "none";
      setTimeout(() => {
        slideMenu.value!.style.transition = "";
      });
    } else {
      isOpen.value = false;
    }
  };

  watch(isOpen, () => {
    if (isOpen.value) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  });

  onClickOutside(header, () => {
    isOpen.value = false;
  });

  onMounted(() => {
    matchMedia.value = window.matchMedia("(max-width: 768px)");

    matchMediaChangeHandler();
    matchMedia.value.addEventListener("change", matchMediaChangeHandler);

    isLoaded.value = true;
  });

  onUnmounted(() => {
    matchMedia.value?.removeEventListener("change", matchMediaChangeHandler);
  });
</script>

<template>
  <header ref="header" class="header">
    <MainContainer class="header__container">
      <NuxtLink to="/" class="header__logo">
        <img :src="logoSrc" alt="logo" loading="lazy" width="119" height="26" />
      </NuxtLink>
      <div
        ref="slideMenu"
        class="header__slide-menu"
        :class="{ 'header__slide-menu_open': isOpen, 'no-trans': !isLoaded }"
      >
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
              <button class="menu__registration btn btn_light-blue">
                Регистрация
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <UIBurger
        v-model="isOpen"
        class="header__burger"
        @click="isOpen = !isOpen"
      />
    </MainContainer>
  </header>
</template>

<style scoped lang="scss">
  .header {
    @apply h-[--header-height] grid items-center z-[--header-z-index] fixed top-0 left-0 w-full;
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
      @apply grid items-center gap-[30px] grid-cols-[auto,1fr];
    }
    &__slide-menu {
      @apply grid;

      @media (min-width: 769px) {
        @apply grid-cols-[1fr,auto];
      }

      @media (max-width: 768px) {
        @apply fixed top-[--header-height] left-0 translate-x-[-100%] h-full w-[70%] bg-[--black] content-start gap-[20px] p-[20px];
        transition: var(--trans);
        will-change: transform;

        &_open {
          @apply translate-x-[0];
        }
      }
    }
    // .header__menu
    &__menu {
    }
    &__burger {
      @apply justify-self-end;
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
    @apply flex items-center;
    // .menu__list
    &__list {
      @apply flex gap-[30px] items-center w-full;

      @media (max-width: 768px) {
        @apply grid gap-[20px];
      }
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
      @media (max-width: 768px) {
        @apply w-full text-[18px];
      }
    }
  }
</style>
