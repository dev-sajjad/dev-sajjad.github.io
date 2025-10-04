<template>
  <footer class="bg-gray-900 border-t border-gray-800 py-12">
    <div class="container mx-auto px-4">
      <div class="text-center">
        <!-- Logo -->
        <div class="mb-6">
          <span
            class="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            SH
          </span>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/sajjadhussain"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-purple-500 transition-colors text-2xl"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/sajjadhussain-dev"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-purple-500 transition-colors text-2xl"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/sajjadhussain_dev"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-purple-500 transition-colors text-2xl"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="mailto:sajjad.dev@gmail.com"
            class="text-gray-400 hover:text-purple-500 transition-colors text-2xl"
          >
            <i class="fas fa-envelope"></i>
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-gray-400">
          Copyright © 2025 Sajjad Hussain. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
