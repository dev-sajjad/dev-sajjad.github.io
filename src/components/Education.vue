<template>
  <section id="education" class="py-20 bg-gray-800">
    <div class="container mx-auto px-4">
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="text-center mb-16"
      >
        <h2 class="section-title">Education</h2>
        <p class="section-subtitle">My learning journey and qualifications</p>
      </div>

      <div class="max-w-4xl mx-auto space-y-8">
        <div
          v-for="(edu, index) in education"
          :key="index"
          class="card-dark flex items-center space-x-6 animate-fade-in-up"
          :style="{ animationDelay: `${index * 200}ms` }"
        >
          <!-- Timeline Indicator -->
          <div
            class="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center"
          >
            <i :class="edu.icon" class="text-2xl text-white"></i>
          </div>

          <!-- Content -->
          <div class="flex-grow">
            <h3 class="text-xl font-bold text-white mb-2">{{ edu.title }}</h3>
            <p class="text-purple-400 font-semibold mb-1">
              {{ edu.institution }}
            </p>
            <p class="text-gray-400">{{ edu.period }}</p>
          </div>

          <!-- Period Badge -->
          <div class="flex-shrink-0">
            <span
              class="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-semibold"
            >
              {{ edu.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Education",
  setup() {
    const education = ref([
      {
        title: "Software Engineering Best Practices",
        institution: "Self-Learning & Online Courses",
        period: "2023 – Present",
        status: "Ongoing",
        icon: "fas fa-code",
      },
      {
        title: "Programming & Web Development",
        institution: "Various Online Platforms",
        period: "2020 – 2022",
        status: "Completed",
        icon: "fas fa-laptop-code",
      },
      {
        title: "Bachelor's Degree",
        institution: "University Name",
        period: "2016 – 2019",
        status: "Completed",
        icon: "fas fa-graduation-cap",
      },
    ]);

    return {
      education,
    };
  },
};
</script>
