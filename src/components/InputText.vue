<script lang="ts" setup>
const props = defineProps<{ dark?: Boolean }>();
</script>

<template>
  <v-text-field
    v-bind="$props"
    :class="{ 'v-input--dark': props.dark }"
    variant="outlined"
  ></v-text-field>
</template>

<style lang="scss" scoped>
.v-input {
  color: var(--color-text);

  &--dark {
    color: var(--vt-c-white-soft);
  }
}
</style>
