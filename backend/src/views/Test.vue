<template>
  <div>
    <h1>This is test</h1>
    <GuestLayout :title="title" :body="body"></GuestLayout>
  </div>
</template>

<script>
import GuestLayout from "../components/GuestLayout.vue";

export default {
  name: "Test",
  components: { GuestLayout },

  data() {
    return { title: "Hello guest how are you?", body: "this is the body" };
  },
};
</script>
