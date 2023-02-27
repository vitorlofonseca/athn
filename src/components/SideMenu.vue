<script lang="ts" setup>
import { useTheme } from "@/styling/useTheme";
const { changeTheme, theme } = useTheme();

defineEmits(["closeDrawer"]);
const props = defineProps<{ drawerIsOpened: boolean }>();
</script>

<template>
  <v-navigation-drawer
    v-model="props.drawerIsOpened"
    location="right"
    temporary
    :theme="theme === 'light' ? undefined : 'dark'"
  >
    <div class="drawer-header">
      <v-btn
        variant="text"
        icon="mdi-close"
        @click.stop="$emit('closeDrawer')"
      ></v-btn>
    </div>

    <v-list density="compact">
      <v-list-item
        title="Change theme"
        value="changeTheme"
        @click="changeTheme"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.v-navigation-drawer__content {
  background: red !important;
}

.drawer-header {
  padding: 20px;
  display: flex;
  justify-content: end;
  width: 100%;

  .close-drawer-button {
    cursor: pointer;
    color: var(--color-text);
  }
}
</style>
