<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script src="">
export default {
  name: 'Home',
  created() {
    console.log(import.meta.env.VITE_API_PATH)
  }
}
</script>
