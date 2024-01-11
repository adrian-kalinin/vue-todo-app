<script setup>
import { ref } from "vue";
import { uid } from "uid";
import TodoCreateForm from "@/components/TodoCreateForm.vue";
import TodoItem from "@/components/TodoItem.vue";

const todoList = ref([]);

const createTodo = (todo) => {
  todoList.value.push({
    id: uid(),
    todo: todo,
    isCompleted: null,
    isEditing: null,
  });
};
</script>

<template>
  <main>
    <h1>Create To-do Task</h1>
    <TodoCreateForm @create-todo="createTodo" />
    <ul v-if="todoList.length" class="todo-list">
      <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo" />
    </ul>
    <p v-else class="todos-message">All done!</p>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
    gap: 20px;
  }

  .todos-message {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
  }
}
</style>
