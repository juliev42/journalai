<script lang="ts" setup>
import {computed} from 'vue'
import JournalTodoForm from "@/components/JournalTodoForm.vue";
import {useTodosStore} from "@/stores/todos.ts";
import JournalTodo from "@/components/JournalTodo.vue";

const props = defineProps({
  journalId: {
    type: Number,
    required: true,
  },
})

const todosStore = useTodosStore()
const todos = computed(() => todosStore.findManyByJournalId(props.journalId))

</script>

<template>
  <div class="flex flex-col">
    <JournalTodo v-for="todo of todos" :key="todo.id" :todo="todo" />
    <JournalTodoForm />
  </div>
</template>

<style scoped>

</style>