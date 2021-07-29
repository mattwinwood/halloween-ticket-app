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
<template>
  <div id="Contact" class="bg-gray-100">
    <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div class="divide-y-2 divide-gray-200">
          <div class="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Collaborate
                </h3>
                <dl class="mt-2 text-base text-gray-500">
                  <div>
                    <dt class="sr-only">
                      Email
                    </dt>
                    <dd>
                      support@example.com
                    </dd>
                  </div>
                  <div class="mt-1">
                    <dt class="sr-only">
                      Phone number
                    </dt>
                    <dd>
                      +1 (555) 123-4567
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Press
                </h3>
                <dl class="mt-2 text-base text-gray-500">
                  <div>
                    <dt class="sr-only">
                      Email
                    </dt>
                    <dd>
                      support@example.com
                    </dd>
                  </div>
                  <div class="mt-1">
                    <dt class="sr-only">
                      Phone number
                    </dt>
                    <dd>
                      +1 (555) 123-4567
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Join our team
                </h3>
                <dl class="mt-2 text-base text-gray-500">
                  <div>
                    <dt class="sr-only">
                      Email
                    </dt>
                    <dd>
                      support@example.com
                    </dd>
                  </div>
                  <div class="mt-1">
                    <dt class="sr-only">
                      Phone number
                    </dt>
                    <dd>
                      +1 (555) 123-4567
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Say hello
                </h3>
                <dl class="mt-2 text-base text-gray-500">
                  <div>
                    <dt class="sr-only">
                      Email
                    </dt>
                    <dd>
                      support@example.com
                    </dd>
                  </div>
                  <div class="mt-1">
                    <dt class="sr-only">
                      Phone number
                    </dt>
                    <dd>
                      +1 (555) 123-4567
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

    export default {
        name: "contact",
        components: {
        },
    }
</script>
