<template>
  <div>
  <header>
    <Navigation/>
  </header>
  <main class="bg-black">
    <Hero/>
    <Gallery />
    <Faqs/>
    <Contact/>
  </main>
  </div>
</template>

<script>
  import Navigation from "../components/Navigation.vue";
  import Hero from "../components/Hero.vue";
  import Gallery from "../components/Gallery.vue";
  import Faqs from "../components/Faqs.vue";
  import Contact from "../components/Contact.vue";

export default {
    components: {
        Contact,
        Navigation,
        Hero,
        Faqs,
        Gallery
    }
    }
</script>
