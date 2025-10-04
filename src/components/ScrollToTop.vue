<template>
  <button
    v-if="showButton"
    v-motion
    :initial="{ opacity: 0, scale: 0 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 300 } }"
    :leave="{ opacity: 0, scale: 0, transition: { duration: 300 } }"
    @click="scrollToTop"
    class="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
  >
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "ScrollToTop",
  setup() {
    const showButton = ref(false);

    const handleScroll = () => {
      showButton.value = window.scrollY > 300;
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      showButton,
      scrollToTop,
    };
  },
};
</script>
