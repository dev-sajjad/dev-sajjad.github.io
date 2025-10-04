<template>
  <header
    v-motion
    :initial="{ opacity: 0, y: -50 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
    class="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800"
  >
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold text-white">
          <span
            class="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            Sajjad H.
          </span>
        </div>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex space-x-8">
          <li>
            <a
              href="#services"
              @click.prevent="scrollToSection('services')"
              :class="[
                'transition-colors duration-300 relative cursor-pointer',
                isActive('services')
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white',
              ]"
            >
              Services
              <span
                v-if="isActive('services')"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#works"
              @click.prevent="scrollToSection('works')"
              :class="[
                'transition-colors duration-300 relative cursor-pointer',
                isActive('works')
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white',
              ]"
            >
              Works
              <span
                v-if="isActive('works')"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              @click.prevent="scrollToSection('skills')"
              :class="[
                'transition-colors duration-300 relative cursor-pointer',
                isActive('skills')
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white',
              ]"
            >
              Skills
              <span
                v-if="isActive('skills')"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              @click.prevent="scrollToSection('experience')"
              :class="[
                'transition-colors duration-300 relative cursor-pointer',
                isActive('experience')
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white',
              ]"
            >
              Experience
              <span
                v-if="isActive('experience')"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#education"
              @click.prevent="scrollToSection('education')"
              :class="[
                'transition-colors duration-300 relative cursor-pointer',
                isActive('education')
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white',
              ]"
            >
              Education
              <span
                v-if="isActive('education')"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#blogs"
              @click.prevent="scrollToSection('blogs')"
              :class="[
                'transition-colors duration-300 relative cursor-pointer',
                isActive('blogs')
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white',
              ]"
            >
              Blogs
              <span
                v-if="isActive('blogs')"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              @click.prevent="scrollToSection('contact')"
              :class="[
                'transition-colors duration-300 relative cursor-pointer',
                isActive('contact')
                  ? 'text-white font-semibold'
                  : 'text-gray-300 hover:text-white',
              ]"
            >
              Contact
              <span
                v-if="isActive('contact')"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              ></span>
            </a>
          </li>
        </ul>

        <!-- Enhanced Hire Me Button -->
        <div class="hidden md:block">
          <a
            href="#contact"
            @click.prevent="scrollToSection('contact')"
            class="hire-me-btn group cursor-pointer"
          >
            <span class="relative z-10 flex items-center gap-2">
              <i class="fas fa-rocket group-hover:animate-bounce"></i>
              Hire Me
              <i
                class="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"
              ></i>
            </span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-3">
          <a
            href="#contact"
            @click.prevent="scrollToSection('contact')"
            class="hire-me-btn-mobile cursor-pointer"
          >
            <span class="flex items-center gap-1">
              <i class="fas fa-rocket"></i>
              Hire
            </span>
          </a>

          <button
            @click="toggleMobileMenu"
            class="text-white focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4">
        <ul class="space-y-4">
          <li>
            <a
              href="#services"
              @click.prevent="
                scrollToSection('services');
                mobileMenuOpen = false;
              "
              :class="[
                'block transition-colors duration-300 relative pl-4 cursor-pointer',
                isActive('services')
                  ? 'text-white font-semibold border-l-2 border-purple-500'
                  : 'text-gray-300 hover:text-white',
              ]"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#works"
              @click.prevent="
                scrollToSection('works');
                mobileMenuOpen = false;
              "
              :class="[
                'block transition-colors duration-300 relative pl-4 cursor-pointer',
                isActive('works')
                  ? 'text-white font-semibold border-l-2 border-purple-500'
                  : 'text-gray-300 hover:text-white',
              ]"
            >
              Works
            </a>
          </li>
          <li>
            <a
              href="#skills"
              @click.prevent="
                scrollToSection('skills');
                mobileMenuOpen = false;
              "
              :class="[
                'block transition-colors duration-300 relative pl-4 cursor-pointer',
                isActive('skills')
                  ? 'text-white font-semibold border-l-2 border-purple-500'
                  : 'text-gray-300 hover:text-white',
              ]"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              @click.prevent="
                scrollToSection('experience');
                mobileMenuOpen = false;
              "
              :class="[
                'block transition-colors duration-300 relative pl-4 cursor-pointer',
                isActive('experience')
                  ? 'text-white font-semibold border-l-2 border-purple-500'
                  : 'text-gray-300 hover:text-white',
              ]"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#education"
              @click.prevent="
                scrollToSection('education');
                mobileMenuOpen = false;
              "
              :class="[
                'block transition-colors duration-300 relative pl-4 cursor-pointer',
                isActive('education')
                  ? 'text-white font-semibold border-l-2 border-purple-500'
                  : 'text-gray-300 hover:text-white',
              ]"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#blogs"
              @click.prevent="
                scrollToSection('blogs');
                mobileMenuOpen = false;
              "
              :class="[
                'block transition-colors duration-300 relative pl-4 cursor-pointer',
                isActive('blogs')
                  ? 'text-white font-semibold border-l-2 border-purple-500'
                  : 'text-gray-300 hover:text-white',
              ]"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#contact"
              @click.prevent="
                scrollToSection('contact');
                mobileMenuOpen = false;
              "
              :class="[
                'block transition-colors duration-300 relative pl-4 cursor-pointer',
                isActive('contact')
                  ? 'text-white font-semibold border-l-2 border-purple-500'
                  : 'text-gray-300 hover:text-white',
              ]"
            >
              Contact
            </a>
          </li>

          <!-- Enhanced Mobile Hire Me Button in Menu -->
          <li class="pt-4 border-t border-gray-700">
            <a
              href="#contact"
              @click.prevent="
                scrollToSection('contact');
                mobileMenuOpen = false;
              "
              class="block w-full px-6 py-4 text-white font-bold text-center uppercase tracking-wide rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden"
              style="
                background: linear-gradient(
                  135deg,
                  #8b5cf6 0%,
                  #3b82f6 50%,
                  #06b6d4 100%
                );
                background-size: 200% 200%;
                animation: gradient-shift 4s ease infinite;
                box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
              "
            >
              <span
                class="relative z-10 flex items-center justify-center gap-2"
              >
                <i class="fas fa-rocket animate-pulse"></i>
                Hire Me Now
                <i class="fas fa-star text-yellow-300 animate-pulse"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "Header",
  setup() {
    const mobileMenuOpen = ref(false);
    const activeSection = ref("services");

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    const sections = [
      "services",
      "works",
      "skills",
      "experience",
      "education",
      "blogs",
      "contact",
    ];

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            activeSection.value = section;
            break;
          }
        }
      }
    };

    const isActive = (section) => {
      return activeSection.value === section;
    };

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", updateActiveSection);
      updateActiveSection(); // Set initial active section
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", updateActiveSection);
    });

    return {
      mobileMenuOpen,
      toggleMobileMenu,
      activeSection,
      isActive,
      scrollToSection,
    };
  },
};
</script>
