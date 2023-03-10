<script lang="ts" setup>
import AppTitle from "../AppTitle.vue";
import InputText from "@/components/InputText.vue";
import SideMenu from "@/components/SideMenu.vue";
import { useCompressibleTopbar } from "./useCompressibleTopbar";
import { ref, onMounted, type Ref } from "vue";

const topbar = ref(null);
const { compressed = false } = defineProps<{ compressed?: boolean }>();
const drawerIsOpened = ref(false);
let topbarIsCompressed: Ref<boolean>;

onMounted(() => {
  topbarIsCompressed = useCompressibleTopbar(topbar, compressed);
});
</script>

<template>
  <div class="container" ref="topbar">
    <AppTitle />

    <img
      alt="Hamburger menu button"
      src="@/assets/icons/navigation/hamburger-menu.svg"
      class="hamburger-menu-btn"
      @click="drawerIsOpened = !drawerIsOpened"
    />

    <div class="welcoming-section">
      <h3>Hello user</h3>
      <h2>Let's find some masterpiece art?</h2>
      <InputText label="Search for something" :dark="true"></InputText>
    </div>
  </div>

  <div class="gap-topbar-spacing" v-if="topbarIsCompressed"></div>
  <SideMenu
    :drawerIsOpened="drawerIsOpened"
    @close-drawer="drawerIsOpened = !drawerIsOpened"
  />
</template>

<style lang="scss" scoped>
@import "@/styling/breakpoints.scss";

.welcoming-section {
  width: 90%;
}

.welcoming-section,
.container {
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 30px;
    height: 30px;
  }
}

.hamburger-menu-btn {
  position: fixed;
  right: 30px;
  margin-top: 10px;
  transition: margin 300ms;
  cursor: pointer;
}

.container {
  background-color: var(--color-primary);
  border-radius: 0px 0px 38px 38px;

  gap: 5px;
  color: var(--vt-c-white-soft);
  padding: 20px 0;

  h3 {
    margin-top: 30px;
  }

  .v-input {
    margin-top: 30px;
    max-width: 580px;
  }

  &--compressed {
    position: fixed;
    top: 0;
    height: 70px;
    z-index: 1;
    width: 100%;
    justify-content: center;
    padding: unset;

    .welcoming-section {
      display: none;
    }

    .hamburger-menu-btn {
      margin-top: unset;
    }
  }
}

@media screen and (max-width: $small) {
  .welcoming-section {
    h2 {
      display: none;
    }
  }

  .container {
    .hamburger-menu-btn {
      margin-top: 15px;
      width: 25px;
      height: 25px;
    }

    &--compressed {
      .hamburger-menu-btn {
        margin-top: unset;
      }
    }
  }
}

.gap-topbar-spacing {
  height: 70px;
}
</style>
