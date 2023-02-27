<script setup lang="ts">
import Button from "@/components/Button.vue";
import InputText from "@/components/InputText.vue";
import { useTheme } from "@/styling/useTheme";

const { changeTheme } = useTheme();
</script>

<template>
  <main>
    <h1>Welcome to the components list</h1>
    <Button @click="changeTheme">Change Theme</Button>
    <Button>Button Test</Button>
    <Button>
      <img
        alt="Facebook logo"
        src="@/assets/icons/social-networks/facebook-white.svg"
        width="20"
        height="20"
      />
      Button with icon Test</Button
    >
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
