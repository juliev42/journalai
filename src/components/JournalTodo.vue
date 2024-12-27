<script setup lang="ts">
import {PropType} from "vue";
import {Todo} from "@/types/api.ts";
import TodoServices from "@/services/todo.ts";

const props = defineProps({
  todo: {
    type: {} as PropType<Todo>,
    required: true,
  },
})

async function update() {
  await TodoServices.update(props.todo.id, props.todo)
}

</script>

<template>
  <label>
    <input
class="mr-2"
name="todolist"
type="checkbox"
:value="todo.title"
:checked="todo.complete"
@change="update"
/>
    {{ todo.title }}
  </label>
</template>

<style scoped>

</style>