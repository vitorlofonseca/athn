<script lang="ts" setup></script>

<template>
  <span class="title">athn</span>
</template>

<style lang="scss" scoped>
@import "@/styling/breakpoints.scss";

.title {
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
  letter-spacing: -0.11em;

  /* white */

  color: var(--vt-c-white-soft);
}

@media screen and (max-width: $small) {
  .title {
    font-size: 42px;
  }
}
</style>
