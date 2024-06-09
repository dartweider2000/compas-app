<script setup lang="ts"></script>

<template>
  <div class="popup">
    <div class="popup__body">
      <div class="popup__content">
        <UIBurger :model-value="false" />
        <div class="popup__video">
          <iframe
            src="https://www.youtube.com/embed/xKVcVSYmesU?si=Zoq0GSDbbszPr8Y0?autoplay=1"
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

<style scoped lang="scss"></style>
