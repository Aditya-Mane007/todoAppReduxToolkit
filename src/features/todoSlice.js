import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todos: [],
  updatingTodo: [],
  filter: "all",
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = action.payload
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      const todoId = action.payload
      state.todos = state.todos.filter((todo) => todo._id !== todoId)
    },
    completeTodo: (state, action) => {
      const todoId = action.payload
      const todo = state.todos.find((todo) => todo._id === todoId)
      if (todo.completed === "completed") {
        todo.completed = "active"
      } else {
        todo.completed = "completed"
      }
      state.updatingTodo = []
    },
    setUpdatingId: (state, action) => {
      state.updatingTodo = []
      state.updatingTodo.push(action.payload)
    },
    updateTodo: (state, action) => {
      const payloadtodo = action.payload
      let todoItem = state.todos.find((todo) => todo._id === payloadtodo._id)
      if (todoItem) {
        todoItem._id = payloadtodo._id
        todoItem.todo = payloadtodo.todo
        todoItem.completed = payloadtodo.completed
      }
      state.updatingTodo = []
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const {
  addTodo,
  removeTodo,
  completeTodo,
  setUpdatingId,
  updateTodo,
  setFilter,
} = todoSlice.actions

export default todoSlice.reducer
