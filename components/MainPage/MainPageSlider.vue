<script setup lang="ts">
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
          :slides-per-view="3"
          :space-between="35"
          :navigation="{
            nextEl: nextEl,
            prevEl: prevEl,
          }"
          ,
          :pagination="{
            clickable: true,
            el: bulletContainer,
          }"
        >
          <SwiperSlide class="slider__slide">
            <SliderCard to="/" class="slider__slider-content">
              <template #title> Лицензионный договор </template>
              <template #text>
                Механизм разбрасывания веерного типа приводится в действие от
                колес тележки, отличается простой и надежной конструкцией, не
                нуждается в смазке.
              </template>
            </SliderCard>
          </SwiperSlide>
          <SwiperSlide class="slider__slide">
            <SliderCard to="/" class="slider__slider-content">
              <template #title> Лицензионный договор </template>
              <template #text>
                Механизм разбрасывания веерного типа приводится в действие от
                колес тележки, отличается простой и надежной конструкцией, не
                нуждается в смазке.
              </template>
            </SliderCard>
          </SwiperSlide>
          <SwiperSlide class="slider__slide">
            <SliderCard to="/" class="slider__slider-content">
              <template #title> Лицензионный договор </template>
              <template #text>
                Механизм разбрасывания веерного типа приводится в действие от
                колес тележки, отличается простой и надежной конструкцией, не
                нуждается в смазке.
              </template>
            </SliderCard>
          </SwiperSlide>
          <SwiperSlide class="slider__slide">
            <SliderCard to="/" class="slider__slider-content">
              <template #title> Лицензионный договор </template>
              <template #text>
                Механизм разбрасывания веерного типа приводится в действие от
                колес тележки, отличается простой и надежной конструкцией, не
                нуждается в смазке.
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
    @apply pb-[30px];
    // .slider-block__container
    &__container {
      @apply relative pb-[13px];
    }
    // .slider-block__title
    &__title {
      @apply text-center;

      &:not(:last-child) {
        @apply mb-[40px];
      }
    }
    // .slider-block__body
    &__body {
      @apply px-[21px] py-[10px] relative overflow-hidden;
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
