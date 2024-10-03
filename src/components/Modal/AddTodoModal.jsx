import { useDispatch, useSelector } from "react-redux"
import Modal from "./Modal"
import { closeModal } from "../../features/modalSlice"
import { useState } from "react"
import { addTodo } from "../../features/todoSlice"
import { toast } from "react-toastify"

let id = 0
function AddTodoModal() {
  const { openModal } = useSelector((state) => state.modal)
  const dispatch = useDispatch()
  const [todoText, setTodoText] = useState("")

  const [selectedValue, setSelectedValue] = useState("active")

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
      _id: id,
      todo: todoText,
      completed: selectedValue,
      date: date,
    }
    id++
    dispatch(addTodo(todo))
    dispatch(closeModal())
    setTodoText("")
    setSelectedValue("")
    toast.success("Todo Added Successfully")
  }
  return (
    <Modal open={openModal === "addTodo"}>
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
            Submit
          </button>
          <button
            onClick={() => {
              dispatch(closeModal())
            }}
          >
            cancel
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default AddTodoModal
