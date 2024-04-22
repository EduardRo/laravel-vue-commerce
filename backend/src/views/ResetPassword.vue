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

  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img
      class="mx-auto h-10 w-auto"
      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
      alt="Your Company"
    />
    <GuestLayout :title="title">
      <form class="space-y-6" action="/resetpassword" method="POST">
        <div>
          <div class="mt-2">
            <input
              id="new-password"
              name="password"
              type="password"
              autocomplete=""
              required=""
              placeholder="New Password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div class="mt-2">
            <input
              id="password-repeat"
              name="password_repeat"
              type="password"
              autocomplete=""
              required=""
              placeholder="Repeat Password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            class="flex w-full justify-center rounded-md my-3 bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-100"
          >
            <router-link :to="{ name: 'login' }">Back to login</router-link>
          </button>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Change password
          </button>
        </div>
      </form>
    </GuestLayout>
  </div>
</template>

<script>
import GuestLayout from "../components/GuestLayout.vue";

export default {
  name: "ResetPassword",
  components: { GuestLayout },
  data() {
    return { title: "Reset Password" };
  },
};
</script>
