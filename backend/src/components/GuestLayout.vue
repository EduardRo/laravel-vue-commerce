<template>
  <div
    class="min-h-full flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold py-6 text-gray-100">
          {{ title }}
        </h2>

        <slot></slot>
      </div>
    </div>
  </div>
</template>
<!--
<script>
export default {
  name: "GuestLayout",
  data() {
    return {
      title: "sfdfs",
    };
  },
  props: { title: String },
};
</script>
-->

<script setup>
const { title } = defineProps({
  title: String,
});
</script>
<style scoped></style>
