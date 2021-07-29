<template>
  <div>
  <header>
    <Navigation/>
  </header>
  <main class="p-8">
    <Receipt class="py-12" />
  </main>
  </div>
</template>

<script>
  import Navigation from "../components/Navigation.vue";
  import Receipt from "../components/Form/Receipt.vue";

export default {
    components: {
        Receipt,
        Navigation,
    }
    }
</script>
