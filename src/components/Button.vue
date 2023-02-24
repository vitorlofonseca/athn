<script lang="ts" setup></script>

<template>
  <v-btn variant="tonal" v-bind="$props">
    <div class="slot"><slot /></div>
  </v-btn>
</template>

<style lang="scss" scoped>
.v-btn {
  border-radius: 50px;
  text-transform: capitalize;
  background-color: var(--color-primary);
  color: var(--vt-c-white-soft);

  .slot {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
