<script setup lang="ts"></script>

<template>
  <div class="art-preview">
    <img src="https://www.dutchamsterdam.nl/i/aa/2007/03/nightwatch2.jpg" />
    <div class="art-preview__information">
      <span>
        <span class="art-preview__name">The night watch</span>
        <span class="art-preview__artist"> by Rembrandt</span>
      </span>
      <div>Date: 1642</div>
      <div>Dimensions: 363cm x 437cm</div>
      <div>From Rijksmuseum, Netherlands</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styling/breakpoints.scss";
.art-preview {
  border: 1px solid var(--color-text);
  width: auto;

  img {
    width: 100%;
    max-height: 230px;
  }

  @media screen and (max-width: $medium) {
    img {
      width: 300px;
    }
  }

  &__information {
    display: flex;
    flex-direction: column;
    margin: 10px;
    gap: 5px;
  }

  &__name {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  &__information,
  &__artist {
    font-family: "Arvo";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
}
</style>
