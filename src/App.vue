<script lang="ts">
import TheJournal from "./views/TheJournal.vue";
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheJournal,
  },
};
</script>

<template lang="pug">
.h-screen.w-screen.flex.flex-col
  TheNavbar
  TheJournal
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
