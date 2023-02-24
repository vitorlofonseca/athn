export const useTheme = () => {
  let theme = "light";
  const body = document.querySelector("body");

  const changeTheme = () => {
    if (theme === "light") {
      body?.setAttribute("data-theme", "dark");
      theme = "dark";
    } else {
      body?.removeAttribute("data-theme");
      theme = "light";
    }
  };

  return { theme, changeTheme };
};
