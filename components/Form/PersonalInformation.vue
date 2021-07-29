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
      <span class="block text-indigo-600 xl:inline">Step One: </span>
      <span class="block xl:inline">Personal Information</span>
    </h1>
<!--    <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">-->
<!--      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.-->
<!--    </p>-->
    <div class="mt-12">
      <form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
          <div class="mt-1">
            <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
          </div>
        </div>
        <div>
          <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
          <div class="mt-1">
            <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <div class="mt-1">
            <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone_number" class="block text-sm font-medium text-gray-700">Phone Number</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input type="text" name="phone_number" id="phone_number" autocomplete="tel" class="py-3 px-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="+1 (555) 987-6543">
          </div>
        </div>

        <div class="sm:col-span-2">
        </div>
      </form>
      <button type="submit" @click="setComplete(1)" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Choose Your Tickets
      </button>

    </div>
  </div>
</template>
<script>
    import { mapActions } from 'vuex'

    export default {
        name: "PersonalInformation",
        methods: {
            ...mapActions({
                setComplete: 'tickets/setComplete'
            })
        },
    }
</script>
