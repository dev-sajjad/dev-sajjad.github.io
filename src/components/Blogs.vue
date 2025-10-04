<template>
  <section id="blogs" class="py-20 bg-gray-900">
    <div class="container mx-auto px-4">
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="text-center mb-16"
      >
        <h2 class="section-title">Recent Blogs</h2>
        <p class="section-subtitle">Latest insights and tutorials</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: index * 100 },
          }"
          class="card-dark hover:scale-105 cursor-pointer overflow-hidden group"
        >
          <!-- Blog Image -->
          <div
            class="h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold"
          >
            {{ blog.placeholder }}
          </div>

          <!-- Blog Content -->
          <div class="p-2">
            <div class="flex items-center text-gray-400 text-sm mb-2">
              <i class="far fa-calendar mr-2"></i>
              {{ blog.date }}
              <span class="mx-2">•</span>
              <i class="far fa-clock mr-2"></i>
              {{ blog.readTime }} min read
            </div>

            <h3
              class="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors"
            >
              {{ blog.title }}
            </h3>

            <p class="text-gray-300 mb-4">{{ blog.excerpt }}</p>

            <div class="flex items-center justify-between">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in blog.tags"
                  :key="tag"
                  class="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                >
                  {{ tag }}
                </span>
              </div>
              <a
                href="#"
                class="text-purple-500 hover:text-purple-400 font-semibold text-sm"
              >
                Read More →
              </a>
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
  name: "Blogs",
  setup() {
    const blogs = ref([
      {
        placeholder: "Vue",
        title: "Building Scalable Vue.js Applications",
        excerpt:
          "Learn best practices for structuring and scaling Vue.js applications with modern development patterns.",
        date: "Jan 15, 2025",
        readTime: 5,
        tags: ["Vue.js", "JavaScript", "Frontend"],
      },
      {
        placeholder: "WP",
        title: "WordPress Plugin Development Guide",
        excerpt:
          "A comprehensive guide to creating custom WordPress plugins with modern PHP practices and hooks.",
        date: "Jan 10, 2025",
        readTime: 8,
        tags: ["WordPress", "PHP", "Plugins"],
      },
      {
        placeholder: "API",
        title: "RESTful API Design Best Practices",
        excerpt:
          "Essential principles for designing maintainable and scalable REST APIs with proper documentation.",
        date: "Jan 5, 2025",
        readTime: 6,
        tags: ["API", "Backend", "Node.js"],
      },
    ]);

    return {
      blogs,
    };
  },
};
</script>
