<script lang="ts" setup>
const props = defineProps<{
  type?: String;
}>();
</script>

<template>
  <v-btn
    variant="tonal"
    v-bind="$props"
    :class="{ 'v-btn--white': props.type === 'white' }"
  >
    <div class="slot"><slot /></div>
  </v-btn>
</template>

<style lang="scss" scoped>
.v-btn {
  height: 44px;
  width: 100%;
  border-radius: 50px;
  text-transform: capitalize;
  background-color: var(--color-primary);
  color: var(--vt-c-white-soft);

  &--white {
    background-color: var(--vt-c-white-soft);
    color: var(--vt-c-black-soft);
  }

  .slot {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &--size-default {
    --v-btn-height: 44px;
  }
}
</style>
