<script lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import {RouterView} from "vue-router";

export default {
  name: 'App',
  components: {
    TheNavbar,
    RouterView,
  },
};
</script>

<template lang="pug">
.h-screen.w-screen.flex.flex-col
  TheNavbar
  RouterView
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
