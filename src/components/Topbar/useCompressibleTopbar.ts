import type { Ref } from "vue";

export const useCompressibleTopbar = (topbar: Ref<null>) => {
  const topbarEl = topbar.value;
  console.log(topbarEl);

  window.addEventListener("scroll", () => {
    const screenPosition = window.scrollY;

    if (screenPosition > 220) {
      topbarEl?.classList.add("container--compressed");
    } else {
      topbarEl?.classList.remove("container--compressed");
    }
  });
};
