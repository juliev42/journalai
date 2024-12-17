<script lang="ts">
import TheHome from "./views/TheHome.vue";
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheHome,
  },
};
</script>

<template lang="pug">
.min-h-screen.min-w-screen.flex.flex-col
  TheNavbar
  TheHome
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
