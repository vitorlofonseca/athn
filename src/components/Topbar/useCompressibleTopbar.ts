import { ref, type Ref } from "vue";

export const useCompressibleTopbar = (
  topbar: Ref<null>,
  compressedAsDefault: boolean = false
) => {
  const topbarEl = topbar.value;
  const topbarIsCompressed = ref(compressedAsDefault);

  if (!compressedAsDefault) {
    window.addEventListener("scroll", () => {
      const screenPosition = window.scrollY;

      if (screenPosition > 220) {
        topbarEl?.classList.add("container--compressed");
        topbarIsCompressed.value = true;
        document.body.parentElement.style.marginTop = "300px";
      } else {
        topbarEl?.classList.remove("container--compressed");
        topbarIsCompressed.value = false;
        document.body.parentElement.style.marginTop = "unset";
      }
    });
  } else {
    topbarEl?.classList.add("container--compressed");
  }

  return topbarIsCompressed;
};
