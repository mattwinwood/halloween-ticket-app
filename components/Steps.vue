<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav aria-label="Progress">
    <ol class="space-y-4 md:flex md:space-y-0 md:space-x-8">
      <li v-if="step.visible" v-for="step in steps" :key="step.detail" class="md:flex-1">
        <a v-if="step.status === 'complete'" :href="step.href" class="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
          <span class="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800">{{ step.name }}</span>
          <span class="text-sm font-medium">{{ step.detail }}</span>
        </a>
        <a v-else-if="step.status === 'current'" :href="step.href" class="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4" aria-current="step">
          <span class="text-xs text-indigo-600 font-semibold tracking-wide uppercase">{{ step.name }}</span>
          <span class="text-sm font-medium">{{ step.detail }}</span>
        </a>
        <a v-else :href="step.href" class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
          <span class="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">{{ step.name }}</span>
          <span class="text-sm font-medium">{{ step.detail }}</span>
        </a>
      </li>
    </ol>
  </nav>
</template>

<script>

    export default {
        computed: {
            steps() {
                return this.$store.state.tickets.steps
            },
            activeStep () {
                return this.$store.state.tickets.activeStep
            }
        }    }
</script>
