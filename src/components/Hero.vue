<template>
  <section
    class="min-h-screen flex items-center hero-gradient bg-floating-elements relative overflow-hidden"
  >
    <!-- Particle.js Background -->
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="particlesOptions"
      class="absolute inset-0 z-0"
    />

    <!-- Simplified Floating Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div
        class="floating-element top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full floating-slow"
      ></div>
      <div
        class="floating-element top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full floating-medium"
      ></div>
      <div
        class="floating-element bottom-40 left-20 w-24 h-24 bg-pink-500/10 rounded-full floating-fast"
      ></div>
      <div
        class="floating-element bottom-20 right-40 w-16 h-16 bg-indigo-500/10 rounded-full floating-slow"
      ></div>

      <!-- Core Tech Logo Floating Elements (JS, Vue, WordPress, Laravel) -->
      <div
        class="floating-element top-32 left-1/3 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl floating-slow flex items-center justify-center shadow-lg tech-logo-glow"
      >
        <i class="fab fa-vuejs text-white text-2xl"></i>
      </div>
      <div
        class="floating-element bottom-1/3 right-20 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl floating-medium flex items-center justify-center shadow-lg tech-logo-glow"
      >
        <i class="fab fa-wordpress text-white text-xl"></i>
      </div>
      <div
        class="floating-element top-2/3 left-16 w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl floating-fast flex items-center justify-center shadow-lg tech-logo-glow"
      >
        <i class="fab fa-laravel text-white text-2xl"></i>
      </div>
      <div
        class="floating-element top-1/4 right-16 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl floating-medium flex items-center justify-center shadow-lg tech-logo-glow"
      >
        <i class="fab fa-js-square text-white text-lg"></i>
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div
        class="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]"
      >
        <!-- Left Content -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -100, scale: 0.8 }"
          :enter="{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 1000, delay: 200, type: 'spring' },
          }"
          class="lg:w-1/2 text-center lg:text-left"
        >
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 400 },
            }"
            class="mb-6"
          >
            <span
              class="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-purple-300 text-sm font-medium border border-purple-500/30 mb-6 animate-pulse"
            >
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 1000, delay: 600 },
            }"
            class="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            I am
            <span class="text-gradient block mt-2"> Sajjad Hussain </span>
          </h1>

          <h2
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 800 },
            }"
            class="text-2xl lg:text-4xl text-gray-300 mb-8 font-semibold"
          >
            Software Engineer + Full Stack Developer
          </h2>

          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 1000 },
            }"
            class="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            I build modern, scalable, and user-friendly applications using best
            engineering practices. Transforming ideas into digital reality.
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 1200 },
            }"
            class="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10"
          >
            <button class="btn-primary group">
              <span class="flex items-center justify-center">
                <i class="fas fa-download mr-2 group-hover:animate-bounce"></i>
                Download CV
                <i
                  class="fas fa-file-pdf ml-2 group-hover:rotate-12 transition-transform duration-300"
                ></i>
              </span>
            </button>
            <a href="#contact" class="btn-secondary group">
              <span class="flex items-center justify-center">
                <i
                  class="fas fa-paper-plane mr-2 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                ></i>
                Get In Touch
                <i
                  class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"
                ></i>
              </span>
            </a>
          </div>

          <!-- Social Icons -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 800, delay: 1400 },
            }"
            class="flex justify-center lg:justify-start space-x-6"
          >
            <a
              href="https://github.com/dev-sajjad"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 transition-all duration-300 hover:scale-110 border border-gray-700/50 hover:border-purple-500/50"
            >
              <i class="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/sajjad-hussain-bd"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 transition-all duration-300 hover:scale-110 border border-gray-700/50 hover:border-purple-500/50"
            >
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://twitter.com/sajjadbmarpc"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 transition-all duration-300 hover:scale-110 border border-gray-700/50 hover:border-purple-500/50"
            >
              <i class="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="mailto:sajjad.dev@gmail.com"
              class="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-600/20 transition-all duration-300 hover:scale-110 border border-gray-700/50 hover:border-purple-500/50"
            >
              <i class="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Right Content - Profile Image -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, delay: 200 },
          }"
          class="lg:w-1/2 mt-16 lg:mt-0 flex justify-center relative"
        >
          <div class="relative group">
            <!-- Animated Border Circle -->
            <div
              class="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 rounded-full"
            >
              <div
                class="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 animate-spin-slow"
                style="animation-duration: 8s"
              ></div>
              <div class="absolute inset-[2px] rounded-full bg-gray-900"></div>
            </div>

            <!-- Profile Image Container -->
            <div
              class="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full p-1 overflow-hidden"
            >
              <div
                class="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-700 shadow-2xl"
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEs-4rL-ta7sQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697004045467?e=1762387200&v=beta&t=rNbkPcnesEYLuRgMQqpgIlIg4wWStXdvGjTCJI5o7qI"
                  alt="Sajjad Hussain"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <!-- Enhanced Floating elements around profile -->
            <div
              class="floating-element -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl floating-fast glow-purple flex items-center justify-center"
            >
              <i class="fas fa-code text-white text-lg"></i>
            </div>
            <div
              class="floating-element -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl floating-medium glow-blue flex items-center justify-center"
            >
              <i class="fab fa-react text-white text-xl"></i>
            </div>
            <div
              class="floating-element top-10 -left-10 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full floating-slow flex items-center justify-center"
            >
              <i class="fab fa-node-js text-white"></i>
            </div>
            <div
              class="floating-element -bottom-4 right-20 w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl floating-fast flex items-center justify-center"
            >
              <i class="fab fa-js-square text-white text-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "Hero",
  setup() {
    const particlesInit = async (engine) => {
      // You can initialize the tsParticles instance (engine) here
      console.log("Particles initialized", engine);
    };

    const particlesLoaded = async (container) => {
      // You can use the container to interact with particles
      console.log("Particles loaded", container);
    };

    const particlesOptions = ref({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#8b5cf6", "#3b82f6", "#06b6d4"],
        },
        links: {
          color: "#8b5cf6",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    });

    return {
      particlesInit,
      particlesLoaded,
      particlesOptions,
    };
  },
};
</script>
