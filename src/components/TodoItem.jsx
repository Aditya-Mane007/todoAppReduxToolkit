import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

function TodoItem() {
  return (
    <>
      <div className="todoItem">
        <div className="todoDisplay">
          <input type="checkbox" name="completed" id="completd" />
          <div>
            <div className="todoText">Todo 1</div>
            <div className="todoDate">Oct 02 2024 14:21:35</div>
          </div>
        </div>
        <div className="todoActions">
          <button className="updateTodo">
            <FaRegEdit />
          </button>
          <button className="deleteTodo">
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
