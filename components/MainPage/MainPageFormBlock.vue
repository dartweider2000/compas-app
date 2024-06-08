<script setup lang="ts">
  import macImageSrc from "~/assets/img/mac-iphone-image.png";
  import arrowImageSrc from "~/assets/img/button-arrow.svg";
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
          <ElFormItem class="top-block__form-item block-from-item">
            <ElInput class="top-block__form-item block-input" />
          </ElFormItem>
          <ElFormItem class="top-block__form-item block-from-item">
            <ElInput class="top-block__form-item block-input" />
          </ElFormItem>
          <ElFormItem class="top-block__form-item block-from-item">
            <ElInput class="top-block__form-item block-input" />
          </ElFormItem>
        </ElForm>
        <div class="top-block__actions">
          <button class="top-block__light-blue-button btn btn_light-blue">
            <span>Проверить штрафы</span>
            <img :src="arrowImageSrc" alt="arrow" loading="lazy" />
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
    }
    // .top-block__title
    &__title {
    }
    // .top-block__image
    &__image {
    }
    // .top-block__form-wrapper
    &__form-wrapper {
    }
    // .top-block__form
    &__form {
    }
    // .top-block__form-item
    &__form-item {
    }
    // .top-block__actions
    &__actions {
    }
    // .top-block__light-blue-button
    &__light-blue-button {
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
