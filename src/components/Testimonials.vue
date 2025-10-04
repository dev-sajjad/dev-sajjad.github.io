<template>
  <section class="py-20 bg-gray-800">
    <div class="container mx-auto px-4">
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="text-center mb-16"
      >
        <h2 class="section-title">Testimonials</h2>
        <p class="section-subtitle">What clients say about my work</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="card-dark text-center animate-fade-in-up"
          :style="{ animationDelay: `${index * 200}ms` }"
        >
          <!-- Avatar -->
          <div class="mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl"
            >
              {{ testimonial.avatar }}
            </div>
          </div>

          <!-- Quote -->
          <p class="text-gray-300 mb-6 italic">"{{ testimonial.quote }}"</p>

          <!-- Client Info -->
          <div>
            <h4 class="text-white font-semibold">{{ testimonial.name }}</h4>
            <p class="text-purple-400">{{ testimonial.position }}</p>
            <p class="text-gray-400 text-sm">{{ testimonial.company }}</p>
          </div>

          <!-- Stars -->
          <div class="flex justify-center mt-4 text-yellow-500">
            <i v-for="n in 5" :key="n" class="fas fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Testimonials",
  setup() {
    const testimonials = ref([
      {
        avatar: "JD",
        name: "John Doe",
        position: "CEO",
        company: "TechCorp Inc.",
        quote:
          "Sajjad delivered an exceptional WordPress plugin that exceeded our expectations. His attention to detail and technical expertise is outstanding.",
      },
      {
        avatar: "SM",
        name: "Sarah Miller",
        position: "Project Manager",
        company: "Digital Solutions",
        quote:
          "Working with Sajjad was a pleasure. He completed our full-stack application on time and with excellent quality. Highly recommended!",
      },
      {
        avatar: "MJ",
        name: "Michael Johnson",
        position: "Startup Founder",
        company: "InnovateLab",
        quote:
          "Sajjad built our entire e-commerce platform. His expertise in Laravel and Vue.js helped us launch successfully. Great developer!",
      },
    ]);

    return {
      testimonials,
    };
  },
};
</script>
