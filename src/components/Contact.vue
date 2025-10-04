<template>
  <section id="contact" class="py-20 bg-gray-800">
    <div class="container mx-auto px-4">
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="text-center mb-16"
      >
        <h2 class="section-title">Contact</h2>
        <p class="section-subtitle">Let's work together on your next project</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="space-y-8"
        >
          <div>
            <h3 class="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p class="text-gray-300 mb-8">
              Ready to bring your ideas to life? Let's discuss your project and
              how I can help you achieve your goals.
            </p>
          </div>

          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center"
              >
                <i class="fas fa-phone text-white"></i>
              </div>
              <div>
                <h4 class="text-white font-semibold">Phone</h4>
                <p class="text-gray-300">+880 1234 56789</p>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center"
              >
                <i class="fas fa-envelope text-white"></i>
              </div>
              <div>
                <h4 class="text-white font-semibold">Email</h4>
                <p class="text-gray-300">sajjad.dev@gmail.com</p>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center"
              >
                <i class="fas fa-map-marker-alt text-white"></i>
              </div>
              <div>
                <h4 class="text-white font-semibold">Address</h4>
                <p class="text-gray-300">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{
            opacity: 1,
            x: 0,
            transition: { duration: 800, delay: 200 },
          }"
          class="card-dark"
        >
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-white font-semibold mb-2"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label for="email" class="block text-white font-semibold mb-2"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label for="phone" class="block text-white font-semibold mb-2"
                >Phone</label
              >
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label for="message" class="block text-white font-semibold mb-2"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button type="submit" class="w-full btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Contact",
  setup() {
    const form = ref({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    const submitForm = () => {
      // Handle form submission here
      alert("Thank you for your message! I'll get back to you soon.");

      // Reset form
      form.value = {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
    };

    return {
      form,
      submitForm,
    };
  },
};
</script>
