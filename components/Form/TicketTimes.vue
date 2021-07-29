<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
      <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span class="block xl:inline">Choose Your Time</span>
      </h1>
    <ul class="divide-y divide-gray-200">
      <li v-for="date in timeslots" :key="date.id" class="py-4 flex">
        <img class="h-10 w-10 rounded-full" :src="date.available" alt="" />
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">{{ date.start}}</p>
          <p class="text-sm text-gray-500">{{ date.end }}</p>
        </div>
      </li>
    </ul>
    <div class="sm:col-span-2">
      <button @click="setComplete(2)" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Payment Information
      </button>
    </div>

  </div>
</template>

<script>
    import { mapActions } from 'vuex'


    export default {
        name: "TicketTimes",
        computed: {
            timeslots () {
                return this.$store.state.tickets.timeslots
            }
        },
        methods: {
            ...mapActions({
                setComplete: 'tickets/setComplete'
            })
        },

    }
</script>
