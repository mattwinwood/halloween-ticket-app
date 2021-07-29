<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div>
      <!-- Hero card -->
      <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2"></div>
        <div class="max-w-7xl mx-auto">
          <div class="relative shadow-xl sm:overflow-hidden">
            <div class="absolute inset-0">
              <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops">
              <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply"></div>
            </div>
            <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white">A Truly Terrifying </span>
                <span class="block text-indigo-200">Haunted House Experience</span>
              </h1>
              <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-2">
                  <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
                   Buy Tickets
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
    import { ref } from 'vue'

    const navigation = [
        { name: 'Buy Tickets', href: '/tickets', current: true },
        { name: 'Team', href: 'team', current: false },
        { name: 'Gallery', href: 'gallery', current: false },
        { name: 'Contact', href: '/contact', current: false },
    ]

    export default {
        setup() {
            const open = ref(false)

            return {
                navigation,
                open,
            }
        },
    }
</script>
