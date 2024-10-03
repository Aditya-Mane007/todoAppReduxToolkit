import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Modal from "./Modal"
import { closeModal } from "../../features/modalSlice"
import { addTodo, updateTodo } from "../../features/todoSlice"
import { toast } from "react-toastify"

const OPTIONS = [
  { key: "false", value: "Active" },
  { key: "true", value: "Completed" },
]

function UpdateTodoModal() {
  const dispatch = useDispatch()
  const { openModal } = useSelector((state) => state.modal)
  const { todos, updatingTodo } = useSelector((state) => state.todo)

  const [todoText, setTodoText] = useState("")
  const [selectedValue, setSelectedValue] = useState("")

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const d = new Date()

    const date = `${d.getHours()}:${d.getMinutes()}, ${d.getDate()}/${
      d.getMonth() + 1
    }/${d.getFullYear()}`
    const todo = {
      _id: updatingTodo[0]._id,
      todo: todoText,
      completed: selectedValue,
      date: date,
    }

    dispatch(updateTodo(todo))
    dispatch(closeModal())
    setTodoText("")
    setSelectedValue("")
    toast.success("Todo Updated Successfully")
  }

  useEffect(() => {
    if (updatingTodo.length > 0) {
      setTodoText(updatingTodo[0].todo)
      setSelectedValue(updatingTodo[0].completed)
    }
  }, [updatingTodo])
  return (
    <Modal open={openModal === "updateTodo"}>
      <div className="addTodoForm">
        <form method="dialog" onSubmit={submitHandler}>
          <div className="form-input">
            <label htmlFor="todotext">Enter Todo</label>
            <input
              type="text"
              placeholder="e.g Learn React.js"
              name="todoText"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="todoStatus">Select Status of Todo</label>
            <select
              name="todoStaus"
              id="todoStatus"
              value={selectedValue}
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>
                Select Status
              </option>

              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <button type="submit" style={{ margin: "0.5rem 0.5rem 0 0" }}>
            Update Todo
          </button>
          <button
            onClick={() => {
              dispatch(closeModal)
            }}
          >
            cancel
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default UpdateTodoModal
