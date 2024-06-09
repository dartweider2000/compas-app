<script setup lang="ts">
  import infinity from "~/assets/img/infinity.svg";
  import bell from "~/assets/img/bell.svg";
  import payCheck from "~/assets/img/pay-check.svg";
  import reduce from "~/assets/img/reduce.svg";
  import safety from "~/assets/img/safety.svg";
  import time from "~/assets/img/time.svg";

  interface IPlusCard {
    imageSrc: string;
    title: string;
    text: string;
  }

  const cardList = ref<IPlusCard[]>([
    {
      imageSrc: infinity,
      title: "Неограниченый автопарк",
      text: "Можно добавить неограниченное кол-во машин и водителей",
    },
    {
      imageSrc: reduce,
      title: "Сокращение затрат до 50%",
      text: "Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке",
    },
    {
      imageSrc: safety,
      title: "Безопасность",
      text: "Данные передаются в зашифрованном виде, они доступны только получателю",
    },
    {
      imageSrc: bell,
      title: "Уведомление о погашении",
      text: "Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП",
    },
    {
      imageSrc: payCheck,
      title: "Квитанция об оплате",
      text: "После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.",
    },
    {
      imageSrc: time,
      title: "Все история сохраняется по каждой машине",
      text: "Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам",
    },
  ]);
</script>

<template>
  <section class="plus-block">
    <MainContainer class="plus-block__container">
      <MainTitle class="plus-block__title"
        >Плюсы использования сервиса «Компас» для анализа штрафов
      </MainTitle>
      <div class="plus-block__body">
        <PlusCard
          v-for="{ imageSrc, text, title } in cardList"
          :key="imageSrc"
          class="plus-block__card"
          :image-src="imageSrc"
        >
          <template #text>
            {{ text }}
          </template>
          <template #title>
            {{ title }}
          </template>
        </PlusCard>
      </div>
    </MainContainer>
  </section>
</template>

<style scoped lang="scss">
  .plus-block {
    // .plus-block__container
    &__container {
      @apply grid gap-[33px];
    }
    // .plus-block__title
    &__title {
    }
    // .plus-block__body
    &__body {
      @apply grid grid-cols-[repeat(3,1fr)] auto-rows-fr gap-[35px];
    }
    // .plus-block__card
    &__card {
    }
  }
</style>
