<script setup lang="ts">
import AppTitle from "@/components/AppTitle.vue";
import InputText from "@/components/InputText.vue";
import Button from "@/components/Button.vue";
</script>

<template>
  <div class="screen">
    <div class="container">
      <AppTitle />
      <h1>Welcome to athn</h1>

      <div class="sso-buttons-container">
        <Button :type="'white'">
          <img
            alt="Facebook logo"
            src="@/assets/icons/social-networks/facebook.svg"
            width="20"
            height="20"
          />
          Login with Facebook</Button
        >
        <Button :type="'white'">
          <img
            alt="Facebook logo"
            src="@/assets/icons/social-networks/apple-black.svg"
            width="20"
            height="20"
          />
          Login with Apple</Button
        >
        <Button :type="'white'">
          <img
            alt="Facebook logo"
            src="@/assets/icons/social-networks/google.svg"
            width="20"
            height="20"
          />
          Login with Google</Button
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.screen {
  background-color: var(--color-primary);
  color: var(--vt-c-white-soft);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  gap: 30px;
  width: 100%;
  max-width: 580px;
  align-items: center;

  .sso-buttons-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
}
</style>
