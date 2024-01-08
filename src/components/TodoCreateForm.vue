<script setup>
import { reactive } from "vue";

const emit = defineEmits(["create-todo"]);

const initialTodoState = {
  todo: "",
  valid: true,
  error: "",
};

const todoState = reactive({ ...initialTodoState });

const createTodo = () => {
  if (todoState.todo === "") {
    todoState.valid = false;
    todoState.error = "To-do text cannot be empty.";
    return;
  }

  emit("create-todo", todoState.todo);
  Object.assign(todoState, initialTodoState);
};
</script>

<template>
  <div class="input-wrap" :class="{ 'input-error': !todoState.valid }">
    <input type="text" v-model="todoState.todo" />
    <button @click="createTodo">Create</button>
  </div>
  <p v-show="!todoState.valid" class="error-message">{{ todoState.error }}</p>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &.input-error {
    border-color: red;
  }

  &:focus-within {
    box-shadow:
      0 -4px 6px -1px rgb(0 0 0 / 0.1),
      0 -2px 4px -2px rgb(0 0 0 / 0.1);
  }

  input {
    width: 100%;
    padding: 8px 6px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 8px 16px;
    border: none;
  }
}

.error-message {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: red;
}
</style>
