import { FaRegEdit } from "react-icons/fa"
import { MdOutlineDelete } from "react-icons/md"
import { removeTodo, setUpdatingId, completeTodo } from "../features/todoSlice"
import { useDispatch } from "react-redux"
import { displayModal } from "../features/modalSlice"

function TodoItem({ todo }) {
  const dispatch = useDispatch()
  return (
    <>
      <div className="todoItem">
        <div className="todoDisplay">
          <input
            type="checkbox"
            name="completed"
            id="completd"
            checked={todo.completed === "completed"}
            onChange={() => dispatch(completeTodo(todo._id))}
          />
          <div>
            <div
              className={`todoText ${
                todo.completed === "completed" ? "completed" : ""
              }`}
            >
              {todo.todo}
            </div>
            <div
              className={`todoDate ${
                todo.completed === "completed" ? "date-completed" : ""
              }`}
            >
              {todo.date}
            </div>
          </div>
        </div>
        <div className="todoActions">
          <button
            className="updateTodo"
            onClick={() => {
              dispatch(displayModal("updateTodo"))
              dispatch(setUpdatingId(todo))
            }}
          >
            <FaRegEdit />
          </button>
          <button
            className="deleteTodo"
            onClick={() => dispatch(removeTodo(todo._id))}
          >
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    </>
  )
}

export default TodoItem
