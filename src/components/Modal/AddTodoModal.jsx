import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { closeModal } from "../../features/modalSlice";

function AddTodoModal() {
  const { openModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <Modal open={openModal === "addTodo"}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro expedita
      sapiente, illum repudiandae veritatis esse quidem nemo provident, maxime
      tempora dolor? Officia voluptas pariatur dolorum modi explicabo dolor
      inventore mollitia?
      <button onClick={() => dispatch(closeModal())}>close</button>
    </Modal>
  );
}

export default AddTodoModal;
