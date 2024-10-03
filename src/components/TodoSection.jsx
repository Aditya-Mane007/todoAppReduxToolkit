import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import { useEffect, useState } from "react"

function TodoSection() {
  const { todos, filter } = useSelector((state) => state.todo)
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    if (filter === "active") {
      setTodoList(() => todos.filter((todo) => todo.completed === "active"))
    }

    if (filter === "completed") {
      setTodoList(() => todos.filter((todo) => todo.completed === "completed"))
    }
  }, [filter])

  return (
    <div className="todoSection">
      {filter === "all" ? (
        todos && todos.length > 0 ? (
          todos.map((todo) => <TodoItem todo={todo} key={todo._id} />)
        ) : (
          <>
            <p>No Todo Available</p>
          </>
        )
      ) : todoList && todoList.length > 0 ? (
        todoList.map((todo) => <TodoItem todo={todo} key={todo._id} />)
      ) : (
        <p>No Todo Available</p>
      )}
    </div>
  )
}

export default TodoSection
