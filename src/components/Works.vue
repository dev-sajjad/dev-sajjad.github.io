<template>
  <section
    id="works"
    class="py-20 bg-gray-800 relative overflow-hidden bg-floating-elements"
  >
    <!-- Tech Stack Floating Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="floating-element top-16 right-12 w-18 h-18 bg-purple-500/5 rounded-full floating-slow"
      ></div>
      <div
        class="floating-element bottom-24 left-20 w-24 h-24 bg-blue-500/5 rounded-full floating-medium"
      ></div>

      <!-- Project Tech Floating Elements -->
      <div
        class="floating-element top-1/5 left-28 w-12 h-12 bg-gradient-to-br from-green-400/12 to-green-600/12 rounded-xl floating-medium flex items-center justify-center border border-green-500/25 tech-logo-glow"
      >
        <i class="fab fa-vuejs text-green-400"></i>
      </div>
      <div
        class="floating-element bottom-1/5 right-28 w-13 h-13 bg-gradient-to-br from-blue-500/12 to-blue-700/12 rounded-xl floating-fast flex items-center justify-center border border-blue-500/25 tech-logo-glow"
      >
        <i class="fab fa-wordpress text-blue-400 text-lg"></i>
      </div>
      <div
        class="floating-element top-1/2 left-20 w-11 h-11 bg-gradient-to-br from-red-500/12 to-red-700/12 rounded-xl floating-slow flex items-center justify-center border border-red-500/25 tech-logo-glow"
      >
        <i class="fab fa-laravel text-red-400"></i>
      </div>
      <div
        class="floating-element top-2/3 right-24 w-12 h-12 bg-gradient-to-br from-cyan-400/12 to-cyan-600/12 rounded-xl floating-medium flex items-center justify-center border border-cyan-500/25 tech-logo-glow"
      >
        <i class="fab fa-react text-cyan-400"></i>
      </div>
      <div
        class="floating-element bottom-1/3 left-32 w-10 h-10 bg-gradient-to-br from-green-600/12 to-green-800/12 rounded-xl floating-fast flex items-center justify-center border border-green-600/25 tech-logo-glow"
      >
        <i class="fab fa-node-js text-green-500"></i>
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="text-center mb-16"
      >
        <h2 class="section-title">My Recent Works</h2>
        <p class="section-subtitle">
          Some of my latest projects and achievements
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div
          v-for="(work, index) in works"
          :key="`work-${index}-${work.title}`"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { duration: 600, delay: index * 100 },
          }"
          class="group card-dark hover:scale-105 cursor-pointer overflow-hidden transition-all duration-300"
        >
          <div
            class="h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center text-white text-4xl font-bold"
          >
            {{ work.placeholder }}
          </div>

          <h3 class="text-xl font-semibold text-white mb-2">
            {{ work.title }}
          </h3>
          <p class="text-gray-400 mb-4">{{ work.description }}</p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="(tech, techIndex) in work.technologies"
              :key="`${work.title}-tech-${techIndex}`"
              class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex space-x-4">
            <a
              :href="work.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-demo flex items-center"
            >
              <i class="fas fa-external-link-alt mr-2"></i>
              View Demo
            </a>
            <a
              :href="work.codeUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-code flex items-center"
            >
              <i class="fab fa-github mr-2"></i>
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Works",
  setup() {
    const works = [
      {
        placeholder: "WP",
        title: "Custom WordPress Donation Plugin",
        description:
          "A comprehensive donation management system with payment integration and donor management.",
        technologies: ["WordPress", "Vue.js", "PHP", "MySQL"],
        demoUrl: "https://demo.sajjadhussain.dev/donation-plugin",
        codeUrl: "https://github.com/sajjadhussain/wp-donation-plugin",
      },
      {
        placeholder: "CM",
        title: "Full-Stack Contact Manager",
        description:
          "Complete contact management application with CRUD operations and search functionality.",
        technologies: ["React", "Node.js", "MySQL", "Express"],
        demoUrl: "https://contact-manager.sajjadhussain.dev",
        codeUrl: "https://github.com/sajjadhussain/contact-manager",
      },
      {
        placeholder: "EC",
        title: "E-commerce Website",
        description:
          "Modern e-commerce platform with shopping cart, payment gateway, and admin panel.",
        technologies: ["Laravel", "Vue.js", "MySQL", "Tailwind"],
        demoUrl: "https://ecommerce.sajjadhussain.dev",
        codeUrl: "https://github.com/sajjadhussain/ecommerce-platform",
      },
      {
        placeholder: "PF",
        title: "Portfolio Website",
        description:
          "Responsive portfolio website with modern animations and dark theme.",
        technologies: ["Vue.js", "Tailwind CSS", "Framer Motion"],
        demoUrl: "https://sajjadhussain.dev",
        codeUrl: "https://github.com/sajjadhussain/portfolio-website",
      },
    ];

    return {
      works,
    };
  },
};
</script>
