<script setup lang="ts">
import Button from "@/components/Button.vue";
import InputText from "@/components/InputText.vue";
</script>

<template>
  <main>
    <Button>Button Test</Button>
    <div class="background-dark">
      <InputText label="Input dark text example" :dark="true"></InputText>
    </div>
    <InputText label="Input text example"></InputText>
  </main>
</template>

<style lang="scss" scoped>
main {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.background-dark {
  padding: 20px;
  background-color: var(--color-primary);
}
</style>
