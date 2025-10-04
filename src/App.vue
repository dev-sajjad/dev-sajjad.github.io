<template>
  <div class="bg-gray-900 min-h-screen">
    <Header />
    <Hero />
    <Services />
    <Works />
    <Experience />
    <Education />
    <Skills />
    <Testimonials />
    <Blogs />
    <Contact />
    <Footer />
    <ScrollToTop />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Services from "./components/Services.vue";
import Works from "./components/Works.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";
import Skills from "./components/Skills.vue";
import Testimonials from "./components/Testimonials.vue";
import Blogs from "./components/Blogs.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import ScrollToTop from "./components/ScrollToTop.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Services,
    Works,
    Experience,
    Education,
    Skills,
    Testimonials,
    Blogs,
    Contact,
    Footer,
    ScrollToTop,
  },
};
</script>
