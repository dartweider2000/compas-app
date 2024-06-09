<script setup lang="ts"></script>

<template>
  <section class="slider-block">
    <MainContainer class="slider-block__container">
      <MainTitle class="slider-block__title">Документы</MainTitle>
      <div class="slider-block__body">
        <Swiper class="slider-block__slider slider" :slides-per-view="3">
          <SwiperSlide class="slider__slide"> Первый </SwiperSlide>
          <SwiperSlide class="slider__slide"> Второй </SwiperSlide>
          <SwiperSlide class="slider__slide"> Третий </SwiperSlide>
        </Swiper>
      </div>
    </MainContainer>
  </section>
</template>

<style scoped lang="scss"></style>
