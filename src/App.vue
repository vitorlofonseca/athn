<script setup lang="ts">
import { RouterView } from "vue-router";
import Button from "@/components/Button.vue";
</script>

<template>
  <v-app>
    <RouterView />
  </v-app>
</template>

<style scoped>
.change-theme-btn {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 154px;
}
</style>
