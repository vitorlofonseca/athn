<script setup lang="ts"></script>

<template>
  <div class="artist-preview">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/d/d2/WLA_metmuseum_Rembrandt_Self-portrait_1660.jpg"
    />
    <span>Rembrandt</span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styling/breakpoints.scss";
.artist-preview {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: fill;
  }
}
</style>
