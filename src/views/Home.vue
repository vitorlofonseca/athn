<script setup lang="ts">
import Topbar from "@/components/Topbar/Topbar.vue";
import ArtPreview from "@/components/ArtPreview.vue";
import ArtistPreview from "@/components/ArtistPreview.vue";
</script>

<template>
  <Topbar />
  <div class="home-body">
    <div class="home-section">
      <h2>Our curation for you</h2>

      <div class="curation">
        <ArtPreview />
        <ArtPreview />
        <ArtPreview />
        <ArtPreview />
        <ArtPreview />
        <ArtPreview />
        <ArtPreview />
        <ArtPreview />
      </div>
    </div>

    <div class="home-section">
      <h2>Best seller artists</h2>

      <div class="curation">
        <ArtistPreview />
        <ArtistPreview />
        <ArtistPreview />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styling/breakpoints.scss";

.home-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

  .curation {
    display: grid;
    margin-top: 20px;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 20px;
    justify-items: center;
    width: 100%;
    max-width: 1200px;
  }
}

@media screen and (max-width: $medium) {
  .home-section {
    align-items: unset;

    .curation {
      display: flex;
      overflow-x: auto;
    }
  }
}
</style>
