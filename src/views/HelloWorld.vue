<script setup lang="ts">
import { ref } from 'vue'
import TestModal from "@/components/TestModal.vue";

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template lang="pug">
h1 {{ msg }}
.card
  button.bg-red-500(type="button" @click="count++") count is {{ count }}
  p
    | Edit
    code components/HelloWorld.vue
    |  to test HMR
p
  | Check out
  a(href="https://vuejs.org/guide/quick-start.html#local" target="_blank") create-vue
  | , the official Vue + Vite starter
p
  | Learn more about IDE Support for Vue in the
  a(href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank") Vue Docs Scaling up Guide
  | .
p.read-the-docs Click on the Vite and Vue logos to learn more
button(data-modal-target="test-modal" data-modal-toggle="test-modal") ModalTest
TestModal
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
