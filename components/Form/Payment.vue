<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
<template class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
  <div>
    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
      <span class="block text-indigo-600 xl:inline">Step Three: </span>
      <span class="block xl:inline">Payment</span>
    </h1>

          <NuxtLink to="/receipt" @click="setComplete(3)" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
           Submit
          </NuxtLink>

  </div>
</template>
<script>

    import { mapActions } from 'vuex'

    export default {
        name: "Payment",
        methods: {
            ...mapActions({
                setComplete: 'tickets/setComplete'
            })
        },

    }
</script>
