import { ref } from "vue";

export const useTheme = () => {
  let theme = ref("light");
  const body = document.querySelector("body");

  const changeTheme = () => {
    if (theme.value === "light") {
      body?.setAttribute("data-theme", "dark");
      theme.value = "dark";
    } else {
      body?.removeAttribute("data-theme");
      theme.value = "light";
    }
  };

  return { theme, changeTheme };
};
