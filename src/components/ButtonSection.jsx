import { useDispatch } from "react-redux";
import { displayModal } from "../features/modalSlice";

function ButtonSection() {
  const dispatch = useDispatch();

  return (
    <div className="btnSection">
      <button
        className="addBtn"
        onClick={() => dispatch(displayModal("addTodo"))}
      >
        Add Task
      </button>
      <button className="filterBtn">
        <select name="todos" id="todos">
          <option value="all" defaultChecked>
            All
          </option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </button>
    </div>
  );
}

export default ButtonSection;
