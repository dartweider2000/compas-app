<script setup lang="ts">
  import macImageSrc from "~/assets/img/mac-iphone-image.png";
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
            class="top-block__form-item block-form-item"
            label="Номер автомобиля"
          >
            <ElInput class="top-block__form-item block-input" tabindex="1" />
          </ElFormItem>
          <ElFormItem
            class="top-block__form-item block-form-item"
            label="Регион"
          >
            <ElInput class="top-block__form-item block-input" tabindex="2" />
          </ElFormItem>
          <ElFormItem
            class="top-block__form-item block-form-item"
            label="Свидетельство о регистрации ТС"
          >
            <ElInput class="top-block__form-item block-input" tabindex="3" />
          </ElFormItem>
        </ElForm>
        <div class="top-block__actions">
          <button
            class="top-block__light-blue-button btn btn_light-blue"
            tabindex="4"
          >
            <span>Проверить штрафы</span>
            <SvgArrow />
          </button>
          <button
            class="top-block__youtube-button btn btn_youtube"
            tabindex="5"
          >
            <SvgYoutube />
            <span>О сервисе</span>
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
      @apply grid gap-[15px];
    }
    // .top-block__form
    &__form {
      @apply grid grid-rows-[auto,auto] grid-cols-[minmax(56.838%,1fr),37.655%] gap-x-[30px] gap-y-[16px];
    }
    // .top-block__form-item
    &__form-item {
      &:last-child {
        @apply col-span-2;
      }
    }
    // .top-block__actions
    &__actions {
      @apply flex flex-wrap gap-[21px];
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

      &:focus {
        :deep(.path) {
          @apply fill-[--light-blue];
        }
      }

      & svg {
        @apply mt-[2px];
      }
    }
    // .top-block__youtube-button
    &__youtube-button {
      @apply grid grid-flow-col gap-[4px] py-[11px] px-[20px] border-[1px] border-solid border-[--light-blue] items-center;

      @media (hover: hover) {
        &:hover {
          @apply bg-[--light-blue];

          :deep(.path-fill) {
            @apply fill-red-600;
          }

          :deep(.path-stroke) {
            @apply stroke-red-600 fill-[--white];
          }

          & > span {
            &:first-of-type {
              @apply text-[--white];
            }
            &:last-of-type {
              @apply text-[--white];
            }
          }
        }
      }

      &:active,
      &:focus {
        @apply bg-[--light-blue];

        :deep(.path-fill) {
          @apply fill-red-600;
        }

        :deep(.path-stroke) {
          @apply stroke-red-600 fill-[--white];
        }

        & > span {
          &:first-of-type {
            @apply text-[--white];
          }
          &:last-of-type {
            @apply text-[--white];
          }
        }
      }

      & > span {
        transition: var(--trans);
        &:first-of-type {
          @apply text-[18px] leading-[23px] text-[--black];
        }
        &:last-of-type {
          @apply text-[15px] leading-[19px] text-[--dark-blue];
        }
      }
    }
    // .top-block__warning
    &__warning {
      @apply text-[13px] leading-[120%] text-[--text-gray];
    }
  }
</style>
