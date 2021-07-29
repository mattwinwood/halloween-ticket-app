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
<!--  <datepicker @selected="activeDate" :disabledDates="disabledDates" :value="this.activeDate"></datepicker>-->
  <div>
    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
      <span class="block text-indigo-600 xl:inline">Step Two: </span>
      <span class="block xl:inline">Select A Date</span>
    </h1>
    <datepicker @selected="setActiveDate" :disabledDates="disabledDates" :value="this.$store.state.tickets.activeDate"></datepicker>
    <div class="sm:col-span-2">
<!--      <button  @click="setComplete(2)" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-->
<!--        Choose Your Time-->
<!--      </button>-->
    </div>

  </div>
</template>
<script>
    import Datepicker from 'vuejs-datepicker';
    import { mapActions } from 'vuex'

    export default {
        name: "TicketDate",
        data: function() {
            return {
                disabledDates: {
                    to: new Date(new Date().setDate(new Date().getDate() - 1)),
                    from: new Date(new Date().setDate(new Date().getDate() + 5))
                }
            }
        },

        methods: {
            ...mapActions({
              setComplete: 'tickets/setComplete',
              setActiveDate: 'tickets/setActiveDate'
            })
        },
        computed: {
            activeDate () {
                return this.$store.state.tickets && this.$store.state.tickets.activeDate
            }
        },
        components: {
            Datepicker
        }
    }
</script>
