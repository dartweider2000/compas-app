<script setup lang="ts">
  interface ISlide {
    title: string;
    text: string;
    to: string;
  }

  const slideList = ref<ISlide[]>([
    {
      title: "Лицензионный договор",
      text: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
      to: "/documents/license",
    },
    {
      title: "Политика обработки персональных данных",
      text: "Радиус разброса ПГМ составляет до 3 метров и может регулироваться.",
      to: "/documents/politic",
    },
    {
      title: "Информация об оплате",
      text: "Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.",
      to: "/documents/info",
    },
    {
      title: "Лицензионный договор",
      text: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ",
      to: "/documents/license",
    },
  ]);

  const nextEl = ref<HTMLElement | null>(null);
  const prevEl = ref<HTMLElement | null>(null);
  const bulletContainer = ref<HTMLElement | null>(null);
</script>

<template>
  <section class="slider-block">
    <MainContainer class="slider-block__container">
      <MainTitle class="slider-block__title">Документы</MainTitle>
      <div ref="bulletContainer" class="slider-block__pagination"></div>
      <div class="slider-block__body">
        <div class="slider-block__navigation">
          <button ref="prevEl" class="slider-block__arrow arrow arrow_prev">
            <SvgSliderNavigation />
          </button>
          <button ref="nextEl" class="slider-block__arrow arrow arrow_next">
            <SvgSliderNavigation />
          </button>
        </div>
        <Swiper
          class="slider-block__slider slider"
          :modules="[SwiperNavigation, SwiperPagination]"
          :navigation="{
            nextEl: nextEl,
            prevEl: prevEl,
          }"
          :pagination="{
            clickable: true,
            el: bulletContainer,
          }"
          :breakpoints="{
            1001: {
              slidesPerView: 3,
              spaceBetween: 35,
            },
            769: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          }"
        >
          <SwiperSlide
            v-for="{ text, title, to } in slideList"
            :key="to"
            class="slider__slide"
          >
            <SliderCard :to="to" class="slider__slider-content">
              <template #title> {{ title }} </template>
              <template #text>
                {{ text }}
              </template>
            </SliderCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </MainContainer>
  </section>
</template>

<style scoped lang="scss">
  .slider-block {
    // .slider-block__container
    &__container {
      @apply relative pb-[13px];
    }
    // .slider-block__title
    &__title {
      @apply text-center;

      &:not(:last-child) {
        @apply mb-[40px];

        @media (max-width: 1100px) {
          @apply mb-[10px];
        }
      }
    }
    // .slider-block__body
    &__body {
      @apply px-[21px] py-[10px] relative overflow-hidden;

      @media (max-width: 1000px) {
        @apply p-[10px];
      }

      // @media (max-width: 768px) {
      //   @apply mx-[-10px];
      // }
    }
    // .slider-block__slider
    &__slider {
    }
    // .slider-block__navigation
    &__navigation {
    }
    // .slider-block__arrow
    &__arrow {
    }
    &__pagination {
      @apply absolute bottom-0 left-[50%] translate-x-[-50%] h-auto flex justify-center items-center;

      :deep(.swiper-pagination-bullet) {
        @apply w-[7px] h-[7px] rounded-full bg-[--inactive-bullet] opacity-100;
      }

      :deep(.swiper-pagination-bullet-active) {
        @apply w-[10px] h-[10px] bg-[--active-bullet];
      }
    }
  }
  .slider {
    @apply cursor-grab overflow-visible;
    // .slider__slide
    &__slide {
    }
    // .slider__slider-content
    &__slider-content {
    }
  }
  .arrow {
    @apply absolute top-[50%] translate-y-[-50%] z-50;

    &:not(:disabled) {
      @media (hover: hover) {
        &:hover {
          :deep(.area) {
            @apply fill-[--light-blue];
          }
        }
      }
    }

    &:disabled {
      @apply cursor-not-allowed;
      :deep(.area) {
        @apply fill-[--input-border-gray];
      }
    }

    @media (hover: none) {
      @apply hidden;
    }

    @media (max-width: 1000px) {
      @apply hidden;
    }

    // .arrow_prev
    &_prev {
      @apply left-0;
    }
    // .arrow_next
    &_next {
      @apply right-0 scale-[-1];
    }
  }
</style>
