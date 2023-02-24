<script setup lang="ts">
import { RouterView } from "vue-router";
import Button from "@/components/Button.vue";
import { useTheme } from "@/theme/useTheme";

const { changeTheme } = useTheme();
</script>

<template>
  <Button class="change-theme-btn" @click="changeTheme">Change Theme</Button>
  <RouterView />
</template>

<style scoped>
.change-theme-btn {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  width: 154px;
}
</style>
