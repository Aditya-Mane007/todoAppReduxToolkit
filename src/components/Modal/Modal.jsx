import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/modalSlice";

function Modal({ open, children }) {
  const dialogRef = useRef();
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  useEffect(() => {
    const handlerEscKey = (e) => {
      if (e.key === "Escape" && open) {
        dispatch(closeModal());
        closeModalHandler();
      }
    };

    if (open) {
      window.addEventListener("keydown", handlerEscKey);
    }

    return () => {
      window.removeEventListener("keydown", handlerEscKey);
    };
  }, [open, dispatch]);

  return createPortal(
    <dialog ref={dialogRef} open={open} onClose={closeModal}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
