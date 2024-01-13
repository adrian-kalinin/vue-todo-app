<script setup>
import { ref } from "vue";
import TodoCreateForm from "@/components/TodoCreateForm.vue";
import TodoItem from "@/components/TodoItem.vue";
import Todo from "@/types/Todo.js";

const todoList = ref([]);

const createTodo = (text) => {
  todoList.value.push(new Todo(text));
};

const toggleTodoComplete = (index) => {
  todoList.value[index].isCompleted = !todoList.value[index].isCompleted;
};
</script>

<template>
  <main>
    <h1>Create To-do Task</h1>
    <TodoCreateForm @create-todo="createTodo" />
    <ul v-if="todoList.length" class="todo-list">
      <TodoItem
        v-for="(todo, index) in todoList"
        :key="index"
        :todo="todo"
        :index="index"
        @toggle-complete="toggleTodoComplete"
      />
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
