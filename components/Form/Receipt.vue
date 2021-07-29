<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
      <span class="block text-indigo-600 xl:inline">You're In. </span>
      <span class="block xl:inline">Tickets will be sent to #email# immediately.</span>
    </h1>

  <div class="bg-white mt-8 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Purchase Receipt
      </h3>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
      <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Full name
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            Margot Foster
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">
           Timeslot(s)
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            <p>10/31/21: 12:00:00PM <b>x 2 Ticket(s)</b></p>
            <p>10/31/21: 12:30:00PM <b>x 1 Ticket(s)</b></p>
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Email address
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            margotfoster@example.com
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Phone
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            (412) 123-4567
          </dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-gray-500">
            About
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
          </dd>
        </div>
      </dl>
    </div>
  </div>
  </div>
</template>

<script>

    export default {

    }
</script>
