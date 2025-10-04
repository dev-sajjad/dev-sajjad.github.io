<template>
  <section
    id="experience"
    class="py-20 bg-gray-900 relative overflow-hidden bg-floating-elements"
  >
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="floating-element top-20 left-10 w-16 h-16 bg-purple-500/5 rounded-full floating-slow"
      ></div>
      <div
        class="floating-element bottom-32 right-16 w-28 h-28 bg-blue-500/5 rounded-full floating-medium"
      ></div>
      <div
        class="floating-element top-2/3 left-1/4 w-20 h-20 bg-cyan-500/5 rounded-full floating-fast"
      ></div>
      <div
        class="floating-element bottom-1/4 right-1/3 w-12 h-12 bg-violet-500/5 rounded-full floating-slow"
      ></div>

      <div
        class="floating-element top-1/3 left-32 w-14 h-14 bg-gradient-to-br from-green-400/15 to-green-600/15 rounded-xl floating-slow flex items-center justify-center border border-green-500/20 tech-logo-glow"
      >
        <i class="fab fa-vuejs text-green-300 text-lg"></i>
      </div>
      <div
        class="floating-element bottom-1/2 right-24 w-12 h-12 bg-gradient-to-br from-blue-500/15 to-blue-700/15 rounded-xl floating-medium flex items-center justify-center border border-blue-500/20 tech-logo-glow"
      >
        <i class="fab fa-wordpress text-blue-300"></i>
      </div>
      <div
        class="floating-element top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-red-500/15 to-red-700/15 rounded-xl floating-fast flex items-center justify-center border border-red-500/20 tech-logo-glow"
      >
        <i class="fab fa-laravel text-red-300 text-xl"></i>
      </div>
      <div
        class="floating-element bottom-1/3 left-20 w-10 h-10 bg-gradient-to-br from-purple-500/15 to-purple-700/15 rounded-xl floating-medium flex items-center justify-center border border-purple-500/20 tech-logo-glow"
      >
        <i class="fab fa-react text-purple-300"></i>
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div
        v-motion
        :initial="{ opacity: 0, y: 100, scale: 0.7 }"
        :enter="{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 1200, delay: 300 },
        }"
        class="text-center mb-16"
      >
        <h2 class="section-title">Experience</h2>
        <p class="section-subtitle">
          My professional journey and contributions
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="relative">
          <div
            class="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 transform md:-translate-x-1/2 rounded-full shadow-lg shadow-purple-500/20"
          ></div>

          <div class="space-y-12 md:space-y-16">
            <div
              v-for="(exp, index) in experiences"
              :key="`experience-${index}-${exp.company}`"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: { duration: 800, delay: index * 200 },
              }"
              class="relative"
            >
              <div
                class="absolute left-6 md:left-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 z-10 shadow-lg shadow-purple-500/30"
              >
                <div
                  class="absolute inset-1 bg-white rounded-full animate-pulse"
                ></div>
              </div>

              <div
                :class="[
                  'ml-16 md:ml-0 md:w-5/12',
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8',
                ]"
              >
                <div
                  class="card-dark hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/30 border border-transparent transition-all duration-500 group"
                >
                  <div class="flex justify-between items-start mb-6">
                    <div class="flex-grow">
                      <h3
                        class="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-1"
                      >
                        {{ exp.role }}
                      </h3>
                      <p class="text-purple-400 font-semibold text-lg">
                        {{ exp.company }}
                      </p>
                    </div>
                    <span
                      class="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30 whitespace-nowrap ml-4 shadow-lg"
                      >{{ exp.period }}</span
                    >
                  </div>

                  <div class="mb-6">
                    <h4 class="text-white font-semibold mb-3 flex items-center">
                      <i class="fas fa-tools text-purple-500 mr-2"></i>
                      Tools & Technologies:
                    </h4>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="(tech, techIndex) in exp.technologies"
                        :key="`${exp.company}-tech-${techIndex}`"
                        class="px-3 py-1.5 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 rounded-full text-sm font-medium hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300 cursor-default shadow-sm"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 class="text-white font-semibold mb-3 flex items-center">
                      <i class="fas fa-star text-yellow-500 mr-2"></i>
                      Key Contributions:
                    </h4>
                    <ul class="text-gray-300 space-y-3">
                      <li
                        v-for="(contribution, contribIndex) in exp.contributions"
                        :key="`${exp.company}-contrib-${contribIndex}`"
                        class="flex items-start hover:text-white transition-colors duration-300 group/item"
                      >
                        <span
                          class="text-purple-400 mr-3 mt-1 text-sm group-hover/item:text-purple-300"
                          >▶</span
                        >
                        <span class="leading-relaxed">{{ contribution }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
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
  name: "Experience",
  setup() {
    const experiences = ref([
      {
        role: "Software Engineer",
        company: "AuthLab",
        period: "2024 – Present",
        technologies: [
          "JavaScript",
          "Vue.js",
          "React",
          "Node.js",
          "Python",
          "MySQL",
          "Laravel",
          "WordPress",
          "REST APIs",
        ],
        contributions: [
          "Building and maintaining scalable web applications",
          "Developing custom WordPress plugins and themes for enterprise-level clients",
          "Creating REST APIs and integrating third-party services",
          "Improving database efficiency with MySQL optimization",
          "Collaborating with cross-functional teams following software engineering best practices",
        ],
      },
      {
        role: "Full Stack Developer",
        company: "WeTechPro Agency",
        period: "2023 – 2024",
        technologies: [
          "Laravel",
          "Vue.js",
          "MySQL",
          "WordPress",
          "Tailwind CSS",
        ],
        contributions: [
          "Led multiple client projects end-to-end from UI design to deployment",
          "Integrated payment gateways and developed custom dashboards",
          "Built responsive websites optimized for performance and SEO",
        ],
      },
      {
        role: "Lead Developer",
        company: "Freelance Projects",
        period: "2020 – 2023",
        technologies: [
          "React",
          "Vue",
          "Node.js",
          "WordPress",
          "Elementor",
          "WooCommerce",
        ],
        contributions: [
          "Delivered custom web solutions for international clients",
          "Created e-commerce websites, portfolio platforms, and CMS-based solutions",
          "Focused on usability and client satisfaction",
        ],
      },
      {
        role: "Junior Developer",
        company: "WordPress & Frontend Projects",
        period: "2018 – 2020",
        technologies: ["WordPress", "jQuery", "PHP", "CSS"],
        contributions: [
          "Built and maintained client WordPress websites",
          "Customized themes and plugins",
          "Assisted in front-end bug fixing and cross-browser compatibility improvements",
        ],
      },
    ]);

    return { experiences };
  },
};
</script>
