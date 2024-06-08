<script setup lang="ts">
  import macImageSrc from "~/assets/img/mac-iphone-image.png";
  import youtubeImageSrc from "~/assets/img/youtube.svg";
</script>

<template>
  <section class="top-block">
    <MainContainer class="top-block__container">
      <MainTitle class="top-block__title"
        >Проверьте штрафы и зарегестрируйтесь в 1 клик</MainTitle
      >
      <div class="top-block__image">
        <img :src="macImageSrc" alt="macbook-iphone" loading="lazy" />
      </div>
      <div class="top-block__form-wrapper">
        <ElForm
          class="top-block__form block-form"
          :hide-required-asterisk="true"
          label-position="top"
          @submit.prevent
        >
          <ElFormItem
            class="top-block__form-item block-from-item"
            label="Номер автомобиля"
          >
            <ElInput class="top-block__form-item block-input" />
          </ElFormItem>
          <ElFormItem
            class="top-block__form-item block-from-item"
            label="Регион"
          >
            <ElInput class="top-block__form-item block-input" />
          </ElFormItem>
          <ElFormItem
            class="top-block__form-item block-from-item"
            label="Свидетельство о регистрации ТС"
          >
            <ElInput class="top-block__form-item block-input" />
          </ElFormItem>
        </ElForm>
        <div class="top-block__actions">
          <button class="top-block__light-blue-button btn btn_light-blue">
            <span>Проверить штрафы</span>
            <!-- <img :src="arrowImageSrc" alt="arrow" loading="lazy" /> -->
            <SvgArrow />
          </button>
          <button class="top-block__youtube-button btn btn_youtube">
            <img :src="youtubeImageSrc" alt="youtube" loading="lazy" />
            <span>Проверить штрафы</span>
            <span>(1 мин. 20 сек)</span>
          </button>
        </div>
        <div class="top-block__warning">
          Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
          персональных данных и принимаете оферту
        </div>
      </div>
    </MainContainer>
  </section>
</template>

<style scoped lang="scss">
  .top-block {
    // .top-block__container
    &__container {
      @apply grid grid-rows-[auto,auto] grid-cols-[1fr,auto] gap-x-[40px] gap-y-[25px];
    }
    // .top-block__title
    &__title {
    }
    // .top-block__image
    &__image {
      @apply row-span-2;
    }
    // .top-block__form-wrapper
    &__form-wrapper {
    }
    // .top-block__form
    &__form {
      @apply grid grid-rows-[auto,auto] grid-cols-[2fr,1fr] gap-x-[30px] gap-y-[16px];
    }
    // .top-block__form-item
    &__form-item {
      &:last-child {
        @apply col-span-2;
      }
    }
    // .top-block__actions
    &__actions {
    }
    // .top-block__light-blue-button
    &__light-blue-button {
      @apply flex gap-[6px] items-center;

      @media (hover: hover) {
        &:hover {
          :deep(.path) {
            @apply fill-[--light-blue];
          }
        }
      }

      & svg {
        @apply mt-[2px];
      }
    }
    // .top-block__youtube-button
    &__youtube-button {
    }
    // .top-block__warning
    &__warning {
    }
  }
  .block-form {
  }
  .block-from-item {
  }
  .block-input {
  }
  .btn {
    // .btn_light-blue
    &_light-blue {
    }
    // .btn_youtube
    &_youtube {
    }
  }
</style>
