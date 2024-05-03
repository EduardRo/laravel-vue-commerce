<template>
  <div
    class="min-h-full flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-1">
      <div class="flex justify-center">
        <BeakerIcon class="size-6 text-blue-500" />
      </div>
      <div>
        <h2 class="mt-1 text-center text-3xl font-extrabold py-1 text-gray-100">
          {{ title }}
        </h2>

        <router-view></router-view>
        <GuestLayout title="guestlayout"></GuestLayout>
      </div>
    </div>
  </div>
</template>

<script setup>
import GuestLayout from "./GuestLayout.vue";
import { BeakerIcon } from "@heroicons/vue/24/solid";

const { title } = defineProps({
  title: String,
});
</script>
<style scoped></style>
