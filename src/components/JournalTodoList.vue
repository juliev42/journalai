<script lang="ts">
import {defineComponent} from 'vue'
import JournalTodoForm from "@/components/JournalTodoForm.vue";

export default defineComponent({
  name: "JournalTodoList",
  components: {JournalTodoForm}
})
</script>

<template lang="pug">
.flex.flex-col
  label(v-for="option of ['dishes', 'trash']" :key="option")
    input.mr-2(name="todolist" type="checkbox" :value="option")
    | {{ option }}
  JournalTodoForm
</template>

<style scoped>

</style>