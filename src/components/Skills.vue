<template>
  <section
    id="skills"
    class="py-20 bg-gray-900 relative overflow-hidden bg-floating-elements"
  >
    <!-- Enhanced Floating Background Elements with All Skills -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="floating-element top-20 right-10 w-16 h-16 bg-purple-500/5 rounded-full floating-slow"
      ></div>
      <div
        class="floating-element bottom-32 left-16 w-24 h-24 bg-blue-500/5 rounded-full floating-medium"
      ></div>
      <div
        class="floating-element top-1/2 right-20 w-12 h-12 bg-pink-500/5 rounded-full floating-fast"
      ></div>

      <!-- All Tech Skills Floating Elements -->
      <div
        class="floating-element top-1/4 left-24 w-14 h-14 bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-xl floating-medium flex items-center justify-center border border-green-500/20 tech-logo-glow"
      >
        <i class="fab fa-vuejs text-green-300 text-lg"></i>
      </div>
      <div
        class="floating-element bottom-1/3 right-32 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-blue-700/10 rounded-xl floating-fast flex items-center justify-center border border-blue-500/20 tech-logo-glow"
      >
        <i class="fab fa-wordpress text-blue-300"></i>
      </div>
      <div
        class="floating-element top-2/3 left-20 w-16 h-16 bg-gradient-to-br from-red-500/10 to-red-700/10 rounded-xl floating-slow flex items-center justify-center border border-red-500/20 tech-logo-glow"
      >
        <i class="fab fa-laravel text-red-300 text-xl"></i>
      </div>
      <div
        class="floating-element bottom-1/4 left-36 w-13 h-13 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-xl floating-medium flex items-center justify-center border border-yellow-500/20 tech-logo-glow"
      >
        <i class="fab fa-js-square text-yellow-300"></i>
      </div>
      <div
        class="floating-element top-1/6 right-28 w-12 h-12 bg-gradient-to-br from-cyan-400/10 to-cyan-600/10 rounded-xl floating-fast flex items-center justify-center border border-cyan-500/20 tech-logo-glow"
      >
        <i class="fab fa-react text-cyan-300"></i>
      </div>
      <div
        class="floating-element bottom-1/5 right-20 w-14 h-14 bg-gradient-to-br from-green-600/10 to-green-800/10 rounded-xl floating-slow flex items-center justify-center border border-green-600/20 tech-logo-glow"
      >
        <i class="fab fa-node-js text-green-400"></i>
      </div>
      <div
        class="floating-element top-1/3 left-32 w-11 h-11 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-xl floating-medium flex items-center justify-center border border-blue-600/20 tech-logo-glow"
      >
        <i class="fab fa-python text-blue-400"></i>
      </div>
      <div
        class="floating-element bottom-2/3 left-28 w-13 h-13 bg-gradient-to-br from-orange-500/10 to-orange-700/10 rounded-xl floating-fast flex items-center justify-center border border-orange-500/20 tech-logo-glow"
      >
        <i class="fas fa-database text-orange-300"></i>
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div
        v-motion
        :initial="{ opacity: 0, y: 80 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 1000, delay: 200 },
        }"
        class="text-center mb-16"
      >
        <h2 class="section-title">Skills</h2>
        <p class="section-subtitle">
          My technical expertise and proficiency levels
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="flex items-center space-x-4 group hover:scale-105 transition-all duration-500 hover:bg-gray-800/30 p-4 rounded-xl animate-fade-in-up"
          :style="{ animationDelay: `${index * 150 + 400}ms` }"
        >
          <!-- Skill Icon -->
          <div
            class="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 tech-logo-glow"
          >
            <i :class="skill.icon" class="text-xl text-white"></i>
          </div>

          <!-- Skill Info -->
          <div class="flex-grow">
            <div class="flex justify-between items-center mb-2">
              <h3
                class="text-white font-semibold group-hover:text-purple-300 transition-colors"
              >
                {{ skill.name }}
              </h3>
              <span class="text-purple-400 font-bold text-lg">
                {{ skill.level }}%
              </span>
            </div>

            <!-- Progress Bar -->
            <div
              class="w-full bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner"
            >
              <div
                :style="{ width: skill.level + '%' }"
                class="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 rounded-full shadow-lg relative overflow-hidden transition-all duration-2000"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"
                ></div>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"
                  style="animation-delay: 0.5s"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Skills",
  setup() {
    const skills = ref([
      { name: "JavaScript", level: 90, icon: "fab fa-js-square" },
      { name: "Vue.js", level: 85, icon: "fab fa-vuejs" },
      { name: "React", level: 85, icon: "fab fa-react" },
      { name: "Node.js", level: 80, icon: "fab fa-node-js" },
      { name: "Python", level: 70, icon: "fab fa-python" },
      { name: "Laravel", level: 85, icon: "fab fa-laravel" },
      { name: "MySQL", level: 80, icon: "fas fa-database" },
      { name: "WordPress Plugin Dev", level: 95, icon: "fab fa-wordpress" },
      {
        name: "WordPress Website Building",
        level: 95,
        icon: "fab fa-wordpress-simple",
      },
    ]);

    return {
      skills,
    };
  },
};
</script>
