<script setup lang="ts">
  // const key = ref<number>(0);

  // onMounted(() => {
  //   window.addEventListener("resize", () => key.value++);
  // });
</script>

<template>
  <section class="slider-block">
    <MainContainer class="slider-block__container">
      <MainTitle class="slider-block__title">Документы</MainTitle>
      <div class="slider-block__body">
        <Swiper
          class="slider-block__slider slider"
          :slides-per-view="3"
          :space-between="35"
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
    // .slider-block__container
    &__container {
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
      @apply px-[30px];
    }
    // .slider-block__slider
    &__slider {
    }
  }
  .slider {
    // @apply mt-[-10px] ml-[-10px] pl-[10px] pt-[10px] max-w-full;
    // @apply mx-[-10px] px-[10px];
    @apply p-[10px];
    :deep(.swiper-wrapper) {
      // @apply gap-[30px];
    }
    // .slider__slide
    &__slide {
    }
    // .slider__slider-content
    &__slider-content {
    }
  }
</style>
