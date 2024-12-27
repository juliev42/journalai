<script lang="ts" setup>

const model = defineModel<string>()

</script>

<template>
  <textarea
v-model="model"
class="flex-1"
placeholder="Journal Entry"
/>
</template>

<style scoped>

</style>