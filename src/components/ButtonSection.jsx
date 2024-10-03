import { useState } from "react"
import { useDispatch } from "react-redux"
import { displayModal } from "../features/modalSlice"
import { setFilter } from "../features/todoSlice"

function ButtonSection() {
  const dispatch = useDispatch()
  const [selectedValue, setSelectedValue] = useState("all")

  const handleChange = (e) => {
    setSelectedValue(e.target.value)
    dispatch(setFilter(e.target.value))
  }

  return (
    <div className="btnSection">
      <button
        className="addBtn"
        onClick={() => dispatch(displayModal("addTodo"))}
      >
        Add Task
      </button>
      <select
        name="todos"
        id="todos"
        className="filterBtn"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="all" defaultChecked>
          All
        </option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  )
}

export default ButtonSection
