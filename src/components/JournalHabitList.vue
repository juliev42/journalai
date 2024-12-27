<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "JournalHabitList"
})
</script>

<template lang="pug">
.flex
  .flex-1.flex.flex-col.p-2.items-center(
v-for="habit in ['meditate', 'run', 'journal', 'habit5']"
:key="habit")
    | {{ habit }}
    input(
type="checkbox"
:value="habit")
</template>

<style scoped>

</style>