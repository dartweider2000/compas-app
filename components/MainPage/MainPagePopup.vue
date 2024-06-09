<script setup lang="ts">
  import { onClickOutside } from "@vueuse/core";

  const emit = defineEmits<{
    close: [];
  }>();

  const popupContentEl = ref<HTMLElement | null>(null);

  onMounted(() => {
    document.body.style.overflow = "hidden";
  });

  onUnmounted(() => {
    document.body.style.overflow = "";
  });

  onClickOutside(popupContentEl, () => {
    emit("close");
  });
</script>

<template>
  <div class="popup">
    <div class="popup__body">
      <div ref="popupContentEl" class="popup__content">
        <UIBurger
          :model-value="true"
          class="popup__close"
          @click="$emit('close')"
        />
        <div class="popup__video">
          <iframe
            src="https://www.youtube.com/embed/xKVcVSYmesU?si=Zoq0GSDbbszPr8Y0&autoplay=1"
            title="YouTube video player"
            loading="lazy"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .popup {
    @apply z-[--popup-z-index] fixed top-0 left-0 w-full h-full bg-[--popup-bg] flex justify-center items-center;
    // .popup__body
    &__body {
      @apply p-[--container-padding] max-w-[960px] max-h-[532px] w-full h-full grid items-center;
      // @apply w;
    }
    // .popup__content
    &__content {
      @apply relative;
    }
    &__close {
      @apply absolute right-0 top-[-8px] translate-y-[-100%];
    }
    // .popup__video
    &__video {
      @apply relative aspect-video w-full;
      max-height: calc(100dvh - 20px * 4);

      & > * {
        @apply absolute top-0 left-0 w-full h-full object-cover;
      }
    }
  }
</style>
