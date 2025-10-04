<template>
  <section
    id="services"
    class="py-20 bg-gray-900 relative overflow-hidden bg-floating-elements"
  >
    <!-- Enhanced Floating Background Elements with More Tech Logos -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="floating-element top-16 right-10 w-20 h-20 bg-purple-500/5 rounded-full floating-slow"
      ></div>
      <div
        class="floating-element bottom-20 left-16 w-32 h-32 bg-blue-500/5 rounded-full floating-medium"
      ></div>
      <div
        class="floating-element top-1/3 right-1/4 w-16 h-16 bg-pink-500/5 rounded-full floating-fast"
      ></div>
      <div
        class="floating-element bottom-1/3 left-1/3 w-24 h-24 bg-indigo-500/5 rounded-full floating-slow"
      ></div>

      <!-- Extended Tech Logo Floating Elements -->
      <div
        class="floating-element top-1/4 left-20 w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-lg floating-medium flex items-center justify-center border border-green-500/30 tech-logo-glow"
      >
        <i class="fab fa-vuejs text-green-400 text-lg"></i>
      </div>
      <div
        class="floating-element bottom-1/4 right-32 w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-lg floating-fast flex items-center justify-center border border-blue-500/30 tech-logo-glow"
      >
        <i class="fab fa-wordpress text-blue-400 text-xl"></i>
      </div>
      <div
        class="floating-element top-1/2 right-16 w-10 h-10 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg floating-slow flex items-center justify-center border border-red-500/30 tech-logo-glow"
      >
        <i class="fab fa-laravel text-red-400"></i>
      </div>
      <div
        class="floating-element top-3/4 left-1/4 w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg floating-medium flex items-center justify-center border border-yellow-500/30 tech-logo-glow"
      >
        <i class="fab fa-js-square text-yellow-400"></i>
      </div>
      <div
        class="floating-element bottom-1/3 left-32 w-11 h-11 bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 rounded-lg floating-fast flex items-center justify-center border border-cyan-500/30 tech-logo-glow"
      >
        <i class="fab fa-react text-cyan-400"></i>
      </div>
      <div
        class="floating-element top-1/6 right-24 w-13 h-13 bg-gradient-to-br from-green-500/20 to-green-700/20 rounded-lg floating-slow flex items-center justify-center border border-green-600/30 tech-logo-glow"
      >
        <i class="fab fa-node-js text-green-500"></i>
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div
        v-motion
        :initial="{ opacity: 0, y: 80, scale: 0.8 }"
        :enter="{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 1000, delay: 200 },
        }"
        class="text-center mb-16"
      >
        <h2 class="section-title">My Quality Services</h2>
        <p class="section-subtitle">
          What I offer to help bring your ideas to life
        </p>
      </div>

      <div class="max-w-4xl mx-auto space-y-6">
        <div
          v-for="(service, index) in services"
          :key="`service-${index}-${service.title}`"
          v-motion
          :initial="{ opacity: 0, y: 60 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 800, delay: index * 200 + 400 },
          }"
          class="group"
        >
          <div
            class="card-dark border border-gray-700 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 cursor-pointer overflow-hidden"
            @click="toggleAccordion(index)"
          >
            <div class="flex items-center justify-between p-6">
              <div class="flex items-center space-x-6">
                <div
                  class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <i :class="service.iconClass" class="text-2xl"></i>
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-1"
                  >
                    {{ service.title }}
                  </h3>
                  <p class="text-gray-400 text-sm">{{ service.subtitle }}</p>
                </div>
              </div>
              <div class="flex-shrink-0">
                <svg
                  class="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-all duration-300"
                  :class="{ 'rotate-180': activeAccordion === index }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>

            <transition
              name="accordion"
              @enter="onEnter"
              @after-enter="onAfterEnter"
              @leave="onLeave"
              @after-leave="onAfterLeave"
            >
              <div v-show="activeAccordion === index" class="accordion-content">
                <div class="px-6 pb-6 border-t border-gray-700/50">
                  <div class="pt-4">
                    <p class="text-gray-300 leading-relaxed mb-4">
                      {{ service.description }}
                    </p>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4
                          class="text-white font-semibold mb-2 flex items-center"
                        >
                          <i
                            class="fas fa-check-circle text-green-500 mr-2"
                          ></i>
                          Key Features:
                        </h4>
                        <ul class="text-gray-300 space-y-1 text-sm">
                          <li
                            v-for="(feature, featureIndex) in service.features"
                            :key="`${service.title}-feature-${featureIndex}`"
                            class="flex items-start"
                          >
                            <span class="text-purple-400 mr-2 mt-1">▶</span>
                            {{ feature }}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4
                          class="text-white font-semibold mb-2 flex items-center"
                        >
                          <i class="fas fa-tools text-blue-500 mr-2"></i>
                          Technologies:
                        </h4>
                        <div class="flex flex-wrap gap-1">
                          <span
                            v-for="(tech, techIndex) in service.technologies"
                            :key="`${service.title}-tech-${techIndex}`"
                            class="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs hover:bg-purple-600/20 transition-colors duration-300"
                          >
                            {{ tech }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Services",
  setup() {
    const activeAccordion = ref(null);

    const services = [
      {
        iconClass: "fas fa-code",
        title: "Web Development",
        subtitle: "Modern & Scalable Solutions",
        description:
          "Creating cutting-edge web applications with the latest technologies and frameworks. From concept to deployment, I build responsive, performant, and user-friendly applications.",
        features: [
          "Responsive Design",
          "Performance Optimization",
          "SEO Implementation",
          "Cross-browser Compatibility",
        ],
        technologies: ["React", "Vue.js", "Node.js", "Laravel", "Tailwind CSS"],
      },
      {
        iconClass: "fab fa-wordpress",
        title: "WordPress Development",
        subtitle: "Custom Themes & Plugins",
        description:
          "Specialized in creating custom WordPress solutions including themes, plugins, and complete website development with advanced functionality and optimization.",
        features: [
          "Custom Theme Development",
          "Plugin Development",
          "WooCommerce Integration",
          "Performance Optimization",
        ],
        technologies: ["WordPress", "PHP", "WooCommerce", "Elementor", "ACF"],
      },
      {
        iconClass: "fas fa-database",
        title: "Database & Backend",
        subtitle: "Robust & Efficient Systems",
        description:
          "Designing and implementing efficient database structures and backend systems that can handle complex business logic and scale with your growth.",
        features: [
          "Database Design",
          "API Development",
          "Server Configuration",
          "Security Implementation",
        ],
        technologies: ["MySQL", "MongoDB", "REST APIs", "GraphQL", "AWS"],
      },
      {
        iconClass: "fas fa-cogs",
        title: "Software Engineering",
        subtitle: "Best Practices & Quality",
        description:
          "Following industry best practices for clean, maintainable, and scalable code. Implementing proper testing, documentation, and deployment processes.",
        features: [
          "Clean Code Architecture",
          "Testing & QA",
          "CI/CD Implementation",
          "Code Documentation",
        ],
        technologies: ["Git", "Docker", "Jest", "PHPUnit", "GitHub Actions"],
      },
    ];

    const toggleAccordion = (index) => {
      if (activeAccordion.value === index) {
        activeAccordion.value = null;
      } else {
        activeAccordion.value = index;
      }
    };

    const onEnter = (el) => {
      el.style.height = "0";
      el.style.opacity = "0";
      el.offsetHeight;
    };

    const onAfterEnter = (el) => {
      el.style.transition = "height 0.4s ease, opacity 0.3s ease";
      el.style.height = el.scrollHeight + "px";
      el.style.opacity = "1";

      setTimeout(() => {
        el.style.height = "auto";
      }, 400);
    };

    const onLeave = (el) => {
      el.style.height = el.scrollHeight + "px";
      el.offsetHeight;
      el.style.transition = "height 0.4s ease, opacity 0.3s ease";
      el.style.height = "0";
      el.style.opacity = "0";
    };

    const onAfterLeave = (el) => {
      el.style.height = "";
      el.style.opacity = "";
    };

    return {
      services,
      activeAccordion,
      toggleAccordion,
      onEnter,
      onAfterEnter,
      onLeave,
      onAfterLeave,
    };
  },
};
</script>

<style scoped>
.accordion-content {
  overflow: hidden;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
