<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:
    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <img
    class="mx-auto h-10 w-auto"
    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    alt="Your Company"
  />

  <GuestLayout :title="title">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-gray-100"
          >Email address</label
        >
        <div class="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            required=""
            class="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label
            for="password"
            class="block text-sm font-medium leading-6 text-gray-100"
            >Password</label
          >
          <div class="text-sm">
            <router-link
              :to="{ name: 'RequestPasswordReset' }"
              class="font-semibold text-indigo-600 hover:text-indigo-500"
              >Reset Password</router-link
            >
          </div>
        </div>
        <div class="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required=""
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>
  </GuestLayout>
</template>

<script>
import GuestLayout from "../components/GuestLayout.vue";

export default {
  name: "Login",
  components: { GuestLayout },

  data() {
    return { title: "Sign in to your account" };
  },
};
</script>
