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

  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />

      <GuestLayout :title="title"></GuestLayout>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"></div>
  </div>
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
