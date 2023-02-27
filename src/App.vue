<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <v-app class="app">
    <RouterView />
  </v-app>
</template>

<style scoped>
.app {
  background-color: var(--color-background);
  color: var(--color-text);
}
.change-theme-btn {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 154px;
}
</style>
